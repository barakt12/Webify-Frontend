export function Gallery({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  return (
    <div
      style={cmp.style}
      className={`${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      {cmp.info.images.map((img, idx) => (
        <img src={img} key={idx} alt=""></img>
      ))}
    </div>
  )
}
