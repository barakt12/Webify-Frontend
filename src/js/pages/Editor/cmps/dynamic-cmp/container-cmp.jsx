import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function ContainerCmp({
  style,
  cmp,
  onHoverElement,
  onSelectElement,
  selectedElement,
}) {
  return (
    <div
      style={style}
      className={`container ${cmp.name} ${
        selectedElement?.id === cmp.id ? 'selected' : ''
      }`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      onClick={(ev) => onSelectElement(ev, cmp)}
    >
      {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp.id} cmp={cmp} />
      })}
    </div>
  )
}
