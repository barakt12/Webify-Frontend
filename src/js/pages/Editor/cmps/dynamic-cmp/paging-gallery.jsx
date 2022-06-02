import { useState } from 'react'

export function PagingGallery({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const [currImg, setCurrImg] = useState(0)
  const imgLinks = cmp.info.images

  const adjustImgIdx = (diff) => {
    const nextImgIdx = currImg + diff
    if (nextImgIdx < 0 || nextImgIdx > imgLinks.length - 1) return
    setCurrImg(nextImgIdx)
  }

  return (
    <div className={`paging-gallery-container`}>
      <div
        className={`imgs-container ${selectedCmp?.id === cmp.id ? 'selected' : ''} ${cmp.name} ${displayClass}`}
        onMouseOut={(ev) => ev.target.classList.remove('hover')}
        onMouseOver={(ev) => onHoverCmp(ev)}
        onClick={(ev) => onSelectCmp(ev, cmp)}
      >
        <svg
          onClick={() => {
            adjustImgIdx(-1)
          }}
          className="slideshow-arrow left"
          width="23"
          height="39"
          viewBox="0 0 23 39"
          style={{ transform: 'scaleX(-1) scale(1.08696)' }}
        >
          <path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path>
        </svg>
        <div className="img-container">
          <img src={imgLinks[currImg === 0 ? imgLinks.length - 1 : currImg - 1]} />
        </div>
        <div className="img-container">
          <img src={imgLinks[currImg]} />
        </div>
        <div className="img-container">
          <img src={imgLinks[currImg === imgLinks.length - 1 ? 0 : currImg + 1]} />
        </div>
        <svg
          onClick={() => {
            adjustImgIdx(1)
          }}
          className="slideshow-arrow right"
          width="23"
          height="39"
          viewBox="0 0 23 39"
        >
          <path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path>
        </svg>
      </div>
    </div>
  )
}
