export function VideoCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  getVideoId(cmp.info.videoUrl)
  return (
    <iframe
      style={cmp.style}
      title="video"
      className={`${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
      src={`https://www.youtube.com/embed/${getVideoId(cmp.info.videoUrl)}`}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    ></iframe>
  )
}

function getVideoId(videoUrl) {
  const idx = videoUrl.split('').findIndex((char) => char === '=')
  // console.log(idx);
  return videoUrl.substring(idx + 1)
}
