import { useState } from 'react'

export function GalleryImgInput({ img, onChangeImg, idx }) {
  const [imgUrl, setImgUrl] = useState(img)

  const handleChange = (ev) => {
    setImgUrl(ev.target.value)
    onChangeImg(ev.target.value, idx)
  }

  return <input type="text" value={imgUrl} onChange={handleChange} />
}
