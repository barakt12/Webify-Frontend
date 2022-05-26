import { useDispatch } from 'react-redux'
import { setSelectedElement } from '../../../../store/wap/wap.action'

export function ImgCmp({ cmp, selectedElement, setSelectedElement }) {
  const dispatch = useDispatch()

  const onSelectElement = (cmp) => {
    dispatch(setSelectedElement(cmp))
  }

  return <img className={selectedElement?.id === cmp.id ? 'selected' : ''} src={cmp.info.imgUrl} alt="" onClick={() => onSelectElement(cmp)} />
}
