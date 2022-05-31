import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { wapService } from '../../../../services/wap-service'
import { setWap, updateWap } from '../../../../store/wap/wap.action'

export function TxtCmp({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  const [isEditable, setIsEditable] = useState(true)
  const location = useLocation()
  const dispatch = useDispatch()

  const { wap } = useSelector((storeState) => storeState.wapModule)

  useEffect(() => {
    if (location.pathname === '/preview') setIsEditable(false)
  }, [])

  const handleChange = (ev) => {
    cmp.info.txt = ev.target.innerText
    if (cmp.info.txt === ev.target.innerText) return
    const wapCopy = wapService.getWapCopy(cmp)
    wapService.updateCmp(wapCopy, cmp)
    dispatch(updateWap(wap))
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
