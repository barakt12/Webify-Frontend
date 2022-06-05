import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateCmp } from '../../../../store/wap/wap.action'

export function TxtCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const [isEditable, setIsEditable] = useState(true)
  const location = useLocation()
  const dispatch = useDispatch()
  const txtRef = useRef()

  useEffect(() => {
    if (location.pathname.includes('/preview') || location.pathname.includes('/publish')) setIsEditable(false)
  }, [])

  function handleClickOutside(ev) {
    if (txtRef.current && !txtRef.current.contains(ev.target)) {
      txtRef.current.blur()
      document.removeEventListener('mousedown', handleClickOutside)
      if (cmp.info.txt === txtRef.current.innerText) return
      cmp.info.txt = txtRef.current.innerText
      dispatch(updateCmp(cmp))
    }
  }

  const handleSelectTxt = (ev) => {
    document.addEventListener('mousedown', handleClickOutside)
    onSelectCmp(ev, cmp)
  }

  return (
    <p
      ref={txtRef}
      contentEditable={isEditable}
      tabIndex="0"
      suppressContentEditableWarning={true}
      className={`${location.pathname.includes('/editor') ? 'editable-txt' : ''} ${displayClass} ${cmp.info.link && location.pathname.includes('/publish') ? 'linkable' : ''} ${
        selectedCmp?.id === cmp.id ? 'selected' : ''
      } ${cmp.name}`}
      onClick={(ev) => handleSelectTxt(ev)}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      spellCheck="false"
      style={cmp.style}
    >
      <a target="_blank" href={cmp.info.link && location.pathname.includes('/publish') ? cmp.info.link : undefined}>
        {cmp.info.txt}
      </a>
    </p>
  )
}
