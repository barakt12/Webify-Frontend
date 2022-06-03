import { useLocation } from 'react-router'

export function BtnCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const location = useLocation()

  return (
    <a target="_blank" href={cmp.info.link && location.pathname.includes('/publish') ? cmp.info.link : false}>
      <button
        style={cmp.style}
        className={`${cmp.info.link && location.pathname.includes('/publish') ? 'linkable' : ''} ${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
        onMouseOut={(ev) => ev.target.classList.remove('hover')}
        onMouseOver={(ev) => onHoverCmp(ev)}
        onClick={(ev) => onSelectCmp(ev, cmp)}
      >
        {cmp.info.txt}
      </button>
    </a>
  )
}
