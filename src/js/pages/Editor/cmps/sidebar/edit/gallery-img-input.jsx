import { useEffect, useState } from 'react'

export function GalleryImgInput({ img, onChangeImg, idx }) {
  const [imgUrl, setImgUrl] = useState(img)

  useEffect(() => {
    setImgUrl(img)
  }, [img])

  const handleChange = (ev) => {
    setImgUrl(ev.target.value)
    onChangeImg(ev.target.value, idx)
  }

  return (
    <div className="img-input-container">
      <input type="text" value={imgUrl} onChange={handleChange} />
      <img src={imgUrl} alt="" />
    </div>
  )
}
