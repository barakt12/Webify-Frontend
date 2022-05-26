import { useDispatch } from 'react-redux'

export function ImgCmp({ cmp, onHoverElement, selectedElement, setSelectedElement }) {
  const dispatch = useDispatch()

  const onSelectElement = (cmp) => {
    dispatch(setSelectedElement(cmp))
  }

  return (
    <img
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      className={selectedElement?.id === cmp.id ? 'selected' : ''}
      src={cmp.info.imgUrl}
      onClick={() => onSelectElement(cmp)}
    />
  )
}
