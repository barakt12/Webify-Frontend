import { useDispatch } from 'react-redux'
import { setSelectedElement } from '../../../../store/wap/wap.action'

export function BtnCmp({ cmp, onHoverElement, selectedElement, setSelectedElement }) {
  const dispatch = useDispatch()

  const onSelectElement = (cmp) => {
    dispatch(setSelectedElement(cmp))
  }

  return (
    <button
      className={selectedElement?.id === cmp.id ? 'selected' : ''}
      src={cmp.info.imgUrl}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      onClick={() => onSelectElement(cmp)}
    >
      {cmp.info.txt}
    </button>
  )
}
