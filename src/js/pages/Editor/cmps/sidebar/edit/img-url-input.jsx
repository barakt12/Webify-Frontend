import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadImgToCloud } from '../../../../../services/cloudinary.service'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export function ImageUrl({ imgUrl, cb }) {
  const [url, setUrl] = useState(imgUrl)

  useEffect(() => {
    setUrl(imgUrl)
  }, [imgUrl])

  const onChangeUrl = (ev) => {
    setUrl(ev.target.value)
    cb(ev.target.value)
  }

  async function loadImageFromInput(ev) {
    const cloudUrl = await uploadImgToCloud(ev)
    setUrl(cloudUrl)
    cb(cloudUrl)
  }

  return (
    <div className="img-input-container">
      <input type="text" placeholder="Enter image url.." value={url} onChange={onChangeUrl} />
      <img src={url} alt="" />
      <input type="file" id="img-input" className="img-input" onChange={loadImageFromInput} accept="image/jpeg, image/png, image/jpg"></input>
      <label htmlFor="img-input">
        <CloudUploadIcon style={{ fontSize: '1.7rem', fill: '#767676' }} />
        <span>Upload</span>
      </label>
    </div>
  )
}
