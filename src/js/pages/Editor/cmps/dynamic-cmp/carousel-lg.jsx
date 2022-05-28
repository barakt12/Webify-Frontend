import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
export function CarouselLgCmp({
  cmp,
  onHoverElement,
  selectedElement,
  onSelectElement,
}) {
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
        cmp.name
      }`}
      onClick={(ev) => onSelectElement(ev, cmp)}
      style={cmp.style}
      animation='slide'
    >
      {cmp.info.images.map((img, idx) => (
        <Item key={idx} imgUrl={img}></Item>
      ))}
    </Carousel>
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
