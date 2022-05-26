import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function TxtCmp({ cmp, onHoverElement, selectedElement, onSelectElement }) {
  const [isEditable, setIsEditable] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/preview') setIsEditable(false)
  }, [])

  const handleChange = (ev) => {
    console.log(ev.target.innerText)
  }

  return (
    <p
      contentEditable={isEditable}
      onBlur={handleChange}
      suppressContentEditableWarning={true}
      className={`editable-txt ${selectedElement?.id === cmp.id ? 'selected' : ''}`}
      onClick={() => onSelectElement(cmp)}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      spellCheck="false"
    >
      {cmp.info.txt}
    </p>
  )
}
