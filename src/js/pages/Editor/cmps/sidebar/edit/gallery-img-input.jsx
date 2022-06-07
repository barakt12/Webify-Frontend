import { useEffect, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { uploadImgToCloud } from '../../../../../services/cloudinary.service'

export function GalleryImgInput({ img, onChangeImg, idx }) {
  const [imgUrl, setImgUrl] = useState(img)
  useEffect(() => {
    setImgUrl(img)
  }, [img])

  const handleChange = (ev) => {
    setImgUrl(ev.target.value)
    onChangeImg(ev.target.value, idx)
  }

  async function loadImageFromInput(ev) {
    const cloudUrl = await uploadImgToCloud(ev)
    setImgUrl(cloudUrl)
    onChangeImg(cloudUrl, idx)
  }

  return (
    <div className="img-input-container">
      <input type="text" value={imgUrl} onChange={handleChange} />
      <img src={imgUrl} alt="" />
      <input type="file" id={`input${idx}`} className="img-input" onChange={loadImageFromInput} accept="image/jpeg, image/png, image/jpg"></input>
      <label htmlFor={`input${idx}`}>
        <CloudUploadIcon style={{ fontSize: '1.7rem', fill: '#767676' }} />
        <span>Upload</span>
      </label>
    </div>
  )
}
