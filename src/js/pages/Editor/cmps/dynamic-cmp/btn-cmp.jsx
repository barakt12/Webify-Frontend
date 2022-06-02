export function BtnCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  return (
    <button
      style={cmp.style}
      className={`${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      {cmp.info.txt}
    </button>
  )
}
