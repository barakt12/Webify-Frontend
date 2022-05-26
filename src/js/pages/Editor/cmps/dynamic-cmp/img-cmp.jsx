import { useDispatch } from 'react-redux'
import { setSelectedElement } from '../../../../store/wap/wap.action'

export function ImgCmp({ cmp }) {
  const dispatch = useDispatch()

  const onSelectElement = (cmp) => {
    dispatch(setSelectedElement(cmp))
  }

  return (
    <img src={cmp.info.imgUrl} alt='' onClick={() => onSelectElement(cmp)} />
  )
}
