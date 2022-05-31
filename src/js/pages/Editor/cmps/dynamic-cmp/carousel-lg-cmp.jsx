import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
export function CarouselLgCmp({ cmp, onHoverElement, selectedElement, onSelectElement }) {
  return (
    <div
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${cmp.name}`}
      onClick={(ev) => onSelectElement(ev, cmp)}
      style={cmp.style}
    >
      <Carousel navButtonsAlwaysVisible={true} animation="slide">
        {cmp.info.images.map((img, idx) => (
          <Item key={idx} imgUrl={img}></Item>
        ))}
      </Carousel>
    </div>
  )
}

function Item({ imgUrl }) {
  return (
    <Paper
      style={{
        backgroundImage: `url(${imgUrl})`,
        minHeight: '500px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></Paper>
  )
}
