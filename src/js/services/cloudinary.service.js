import { toPng } from 'html-to-image'

export const createJpegFromElement = async (element, width, height) => {
  const dataUrl = await toPng(element, { width, height })
  const ev = {
    target: {
      files: [dataUrl],
    },
  }
  return await uploadImgToCloud(ev)
}

/////check ev

export async function uploadImgToCloud(ev) {
  const CLOUD_NAME = 'dnv7wszu3'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('file', ev.target.files[0])
  formData.append('upload_preset', 'p2hi34li')

  try {
    let res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    })
    res = await res.json()

    return res.url
  } catch (err) {
    console.error(err)
  }
}
