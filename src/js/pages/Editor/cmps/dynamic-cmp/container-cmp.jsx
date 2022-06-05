import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function ContainerCmp({ style, cmp, onHoverCmp, onSelectCmp, selectedCmp, displayClass }) {
  return (
    <div
      style={style}
      className={`container ${displayClass} ${cmp.name} ${selectedCmp?.id === cmp.id ? 'selected' : ''}`}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp.id} cmp={cmp} />
      })}
    </div>
  )
}
