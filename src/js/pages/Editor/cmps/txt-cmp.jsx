import { useState } from 'react'

export function TxtCmp({ txt }) {
  let [content, setContent] = useState(txt)

  const handleChange = (ev) => {
    console.log(ev.target.value)
    setContent(ev.target.value)
  }

  return <input type="text" value={content} onChange={handleChange} className="editable-txt" />
}
