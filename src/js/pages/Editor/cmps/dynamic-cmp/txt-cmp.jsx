import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export function TxtCmp({ cmp, selectedElement, setSelectedElement }) {
  // console.log(selectedElement)
  const [content, setContent] = useState(cmp.info.txt)
  const [isEditable, setIsEditable] = useState(true)

  const dispatch = useDispatch()

  const inputRef = useRef()

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/preview') setIsEditable(false)
    // inputRef.current.style.width = txt.length + 'ch'
  }, [])

  const handleChange = (ev) => {
    console.log(ev.target.innerText)
    setContent(ev.target.innerText)
    // inputRef.current.style.width = ev.target.value.length + 'ch'
  }

  const onSelectElement = (cmp) => {
    dispatch(setSelectedElement(cmp))
  }

  return (
    <p
      contentEditable={isEditable}
      // onBlur={handleChange}
      suppressContentEditableWarning={true}
      className={`editable-txt ${selectedElement?.id === cmp.id ? 'selected' : ''}`}
      src={cmp.info.imgUrl}
      onClick={() => onSelectElement(cmp)}
    >
      {content}
    </p>
  )
}
