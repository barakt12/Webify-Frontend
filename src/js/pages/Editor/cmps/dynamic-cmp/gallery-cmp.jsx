export function Gallery({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  return (
    <div
      style={cmp.style}
      className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
        cmp.name
      }`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      onClick={(ev) => onSelectElement(ev, cmp)}
    >
      {cmp.info.images.map((img, idx) => (
<<<<<<< HEAD
        <img src={img} key={idx} />
=======
        <img src={img} key={idx} alt=''></img>
>>>>>>> d0a2206399a0f863a5fcae1353f9c3a608ed9e64
      ))}
    </div>
  )
}
