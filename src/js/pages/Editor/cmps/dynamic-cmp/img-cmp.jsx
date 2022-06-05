export function ImgCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  return (
    <div
      className="img-container"
      onMouseOver={(ev) => {
        ev.stopPropagation()
      }}
    >
      <img
        onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
        onMouseOver={(ev) => onHoverCmp(ev)}
        className={`${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
        src={cmp.info.imgUrl}
        onClick={(ev) => onSelectCmp(ev, cmp)}
        alt=""
        style={cmp.style}
      />
    </div>
  )
}
