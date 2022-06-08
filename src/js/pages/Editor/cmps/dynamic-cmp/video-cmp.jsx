import { useLocation } from 'react-router'

export function VideoCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const location = useLocation()
  return (
    <div
      style={cmp.style}
      title="video"
      className={` video-container ${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      <iframe className={`${location.pathname.includes('editor') ? 'no-mouse-events' : ''}`} src={`https://www.youtube.com/embed/${getVideoId(cmp.info.videoUrl)}`}></iframe>
    </div>
  )
}

function getVideoId(videoUrl) {
  const idx = videoUrl.split('').findIndex((char) => char === '=')
  return videoUrl.substring(idx + 1)
}
