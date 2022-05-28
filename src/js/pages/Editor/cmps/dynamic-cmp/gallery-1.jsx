export function Gallery1({
    cmp,
    onHoverElement,
    selectedElement,
    onSelectElement,
  }) {
    return <div 
    style={cmp.style}
    className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
            cmp.name
        }`}
        onMouseOut={(ev) => ev.target.classList.remove('hover')}
        onMouseOver={(ev) => onHoverElement(ev)}
        onClick={(ev) => onSelectElement(ev, cmp)}
    >
        {cmp.info.images.map(img => <img 
        src={img} 
        ></img>)}
    </div>
}