import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function TxtCmp({ txt }) {
  const [content, setContent] = useState(txt)
  const [isEditable, setIsEditable] = useState(true)

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

  return (
    <p
      contentEditable={isEditable}
      onBlur={handleChange}
      suppressContentEditableWarning={true}
      className='editable-txt'
    >
      {content}
    </p>
  )
}
