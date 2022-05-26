import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function TxtCmp({ txt }) {
  const [content, setContent] = useState(txt)
  const [isEditable, setIsEditable] = useState(true)

  const inputRef = useRef()

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/preview') setIsEditable(false)
    inputRef.current.style.width = txt.length + 'ch'
  }, [])

  const handleChange = (ev) => {
    setContent(ev.target.value)
    inputRef.current.style.width = ev.target.value.length + 'ch'
  }

  return isEditable ? <input type="text" ref={inputRef} value={content} onChange={handleChange} className="editable-txt" /> : <p className="editable-txt">{txt}</p>
}
