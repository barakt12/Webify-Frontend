import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'
import { SvgCmp } from './svg-cmp'
import { CarouselCmp } from './carousel-cmp'
import { useLocation } from 'react-router'
import { setSelectedCmp } from '../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import { ContainerCmp } from './container-cmp'
import { CarouselLgCmp } from './carousel-lg-cmp'
import { VideoCmp } from './video-cmp'
import { Gallery } from './gallery-cmp'
import { FormCmp } from './form-cmp'
import { PagingGallery } from './paging-gallery'
import { useEffect, useState } from 'react'
import { GalleryMiniThumbnails } from './gallery-mini-thumbnails'
import { MapCmp } from './map-cmp'

export const DynamicCmp = (props) => {
  const { cmp } = props
  const dispatch = useDispatch()
  const location = useLocation()
  const selectedCmp = useSelector(
    (storeState) => storeState.wapModule.selectedCmp
  )

  const { displaySize } = useSelector((storeState) => storeState.wapModule)
  const [displayClass, setDisplayClass] = useState('')
  useEffect(() => {
    switch (displaySize) {
      case '720px':
        setDisplayClass('tablet-layout')
        break
      case '420px':
        setDisplayClass('mobile-layout')
        break
      default:
        setDisplayClass('')
    }
  }, [displaySize])

  const onHoverCmp = (ev) => {
    ev.stopPropagation()
    // console.log(ev.currentTarget)
    if (
      !location.pathname.includes('/preview') &&
      !location.pathname.includes('/publish')
    ) {
      ev.currentTarget.classList.add('hover')
    }
  }

  const onSelectCmp = (ev, cmp) => {
    ev.stopPropagation()
    if (window.innerWidth < 700) {
      ev.target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // window.scrollBy(0, -20)
      // ev.target.scrollIntoView(true)

      // console.log(ev.target.offsetTop)
      // (document.querySelector('.editor').scrollTop = ev.target.offsetTop - 60)

      // window.scrollTo({ top: y, behavior: 'smooth' })
    }
    if (
      !location.pathname.includes('/preview') &&
      !location.pathname.includes('/publish')
    ) {
      dispatch(setSelectedCmp(cmp))
    }
  }

  switch (cmp.type) {
    case 'container':
      return (
        <ContainerCmp
          displayClass={displayClass}
          {...props}
          style={cmp.style}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
          selectedCmp={selectedCmp}
        />
      )
    case 'txt':
      return (
        <TxtCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'icon':
      return (
        <IconCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'img':
      return (
        <ImgCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'svg':
      return (
        <SvgCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'faq':
      return (
        <FAQCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'btn':
      return (
        <BtnCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'carosuel':
      return (
        <CarouselCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'carousel-lg':
      return (
        <CarouselLgCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'video':
      return (
        <VideoCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'gallery-grid':
      return (
        <Gallery
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'paging-gallery':
      return (
        <PagingGallery
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'gallery-mini-thumbnails':
      return (
        <GalleryMiniThumbnails
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'form':
      return (
        <FormCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    case 'map':
      return (
        <MapCmp
          displayClass={displayClass}
          cmp={cmp}
          selectedCmp={selectedCmp}
          onHoverCmp={onHoverCmp}
          onSelectCmp={onSelectCmp}
        />
      )
    default:
      return
  }
}
