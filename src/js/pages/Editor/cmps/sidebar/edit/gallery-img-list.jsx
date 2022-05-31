import { GalleryImgInput } from './gallery-img-input'
import { wapService } from '../../../../../services/wap-service'
import { setWap, updateWap } from '../../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'

export function GalleryImgList({ cmp }) {
  const { wap } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()

  const onChangeImg = (imgUrl, idx) => {
    cmp.info.images.splice(idx, 1, imgUrl)
    const wapCopy = wapService.getWapCopy(wap)
    wapService.updateCmp(wapCopy, cmp)
    dispatch(updateWap(wapCopy))
  }
  return cmp.info.images.map((img, idx) => <GalleryImgInput idx={idx} img={img} onChangeImg={onChangeImg} />)
}
