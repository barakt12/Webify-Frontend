export function ImgCmp({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  return (
    <img
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      className={selectedElement?.id === cmp.id ? 'selected' : ''}
      src={cmp.info.imgUrl}
      onClick={() => onSelectElement(cmp)}
      alt=''
    />
  )
}
