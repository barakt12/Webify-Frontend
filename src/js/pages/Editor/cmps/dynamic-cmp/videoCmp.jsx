export function VideoCmp(  {cmp,
    onHoverElement,
    selectedElement,
    onSelectElement,
  }) {
      getVideoId(cmp.info.videoUrl)
    return <iframe 
    style={cmp.style}
    className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
      cmp.name
    }`}
    src={`https://www.youtube.com/embed/${getVideoId(cmp.info.videoUrl)}`}
    onMouseOut={(ev) => ev.target.classList.remove('hover')}
    onMouseOver={(ev) => onHoverElement(ev)}
    onClick={(ev) => onSelectElement(ev, cmp)}
    >
    </iframe>
}

function getVideoId(videoUrl) {
    const idx = videoUrl.split('').findIndex(char => char === '=')
    // console.log(idx);
    return videoUrl.substring(idx + 1)
}