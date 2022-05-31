import { GalleryImgInput } from './gallery-img-input'
import { updateCmp } from '../../../../../store/wap/wap.action'
import { useDispatch } from 'react-redux'

export function GalleryImgList({ cmp }) {
  const dispatch = useDispatch()

  const onChangeImg = (imgUrl, idx) => {
    cmp.info.images.splice(idx, 1, imgUrl)
    dispatch(updateCmp(cmp))
  }
  return cmp.info.images.map((img, idx) => (
    <GalleryImgInput key={idx} idx={idx} img={img} onChangeImg={onChangeImg} />
  ))
}
