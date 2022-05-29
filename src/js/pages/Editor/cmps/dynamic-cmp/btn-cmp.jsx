export function BtnCmp({ cmp, onHoverElement, selectedElement, onSelectElement }) {
  return (
    <button
      style={cmp.style}
      className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${cmp.name}`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      onClick={(ev) => onSelectElement(ev, cmp)}
    >
      {cmp.info.txt}
    </button>
  )
}
