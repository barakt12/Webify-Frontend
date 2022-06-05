import { useState } from 'react'
import ImageGallery from 'react-image-gallery'

export function GalleryMiniThumbnails({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const [images, setImages] = useState(cmp.info.images)
  return (
    <div
      className={`gallery-mini-thumbnails-container ${selectedCmp?.id === cmp.id ? 'selected' : ''} ${cmp.name} ${displayClass}`}
      onMouseOut={(ev) => ev.taev.currentTargetrget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      <ImageGallery infinite={true} items={images.map((img) => ({ original: img, thumbnail: img }))} />
    </div>
  )
}
