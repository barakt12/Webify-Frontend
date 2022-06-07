import { useEffect, useRef } from 'react'

export function SvgCmp({
  cmp,
  onHoverCmp,
  selectedCmp,
  onSelectCmp,
  displayClass,
}) {
  const divRef = useRef()
  useEffect(() => {
    divRef.current.innerHTML = cmp.info.svg
  }, [])

  return (
    <div
      ref={divRef}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      className={`${
        selectedCmp?.id === cmp.id ? 'selected' : ''
      } ${displayClass} ${cmp.name}`}
      src={cmp.info.imgUrl}
      onClick={(ev) => onSelectCmp(ev, cmp)}
      alt=''
      style={cmp.style}
    ></div>
  )
}
