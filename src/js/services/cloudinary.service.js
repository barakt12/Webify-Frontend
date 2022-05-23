import { toJpeg } from 'html-to-image';

export const createJpegFromElement = async (element, width, height) => {
   const dataUrl = await toJpeg(element, { cacheBust: true, style: { width: '100%', margin: '0', outline: 'none' }, width, height, quality: 0.5 })
   const ev = {
      target: {
         files: [
            dataUrl
         ]
      }
   }
   return await uploadImgToCloud(ev)
}

/////check ev 

export async function uploadImgToCloud(ev) {
   const CLOUD_NAME = 'dpmzxdfuh'
   const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

   const formData = new FormData();
   // console.log(ev.target.files[0]);
   formData.append('file', ev.target.files[0])
   formData.append('upload_preset', 'brixRNS');

   try {

      let res = await fetch(UPLOAD_URL, {
         method: 'POST',
         body: formData
      })
      res = await res.json();

      return res.url;

   } catch (err) {
      console.error(err)
   }
}
