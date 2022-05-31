import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateCmp } from '../../../../store/wap/wap.action'

export function TxtCmp({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  const [isEditable, setIsEditable] = useState(true)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname === '/preview') setIsEditable(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (ev) => {
    cmp.info.txt = ev.target.innerText
    if (cmp.info.txt === ev.target.innerText) return
    dispatch(updateCmp(cmp))
  }

  return (
    <p
      contentEditable={isEditable}
      onBlur={handleChange}
      suppressContentEditableWarning={true}
      className={`editable-txt ${
        selectedElement?.id === cmp.id ? 'selected' : ''
      } ${cmp.name}`}
      onClick={(ev) => onSelectElement(ev, cmp)}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      spellCheck='false'
      style={cmp.style}
    >
      {cmp.info.txt}
    </p>
  )
}
