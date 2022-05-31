import { GalleryImgInput } from './gallery-img-input'
import { wapService } from '../../../../../services/wap-service'
import { setWap } from '../../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'

export function GalleryImgList({ cmp }) {
  const { wap } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()

  const onChangeImg = (imgUrl, idx) => {
    cmp.info.images.splice(idx, 1, imgUrl)
    console.log(cmp)
    wapService.updateCmp(wap, cmp)
    dispatch(setWap(wap))
  }
  return cmp.info.images.map((img, idx) => <GalleryImgInput key={idx} idx={idx} img={img} onChangeImg={onChangeImg} />)
}
