export function BtnCmp({ cmp, onHoverElement, selectedElement, onSelectElement }) {
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
