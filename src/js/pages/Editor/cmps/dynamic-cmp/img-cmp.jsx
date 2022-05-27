export function ImgCmp({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  return (
    <div className='img-container'>
      <img
        onMouseOut={(ev) => ev.target.classList.remove('hover')}
        onMouseOver={(ev) => onHoverElement(ev)}
        className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
          cmp.name
        }`}
        src={cmp.info.imgUrl}
        onClick={(ev) => onSelectElement(ev, cmp)}
        alt=''
        style={cmp.style}
      />
    </div>
  )
}
