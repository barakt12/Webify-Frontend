import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'
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

export const DynamicCmp = (props) => {
  const { cmp } = props
  const dispatch = useDispatch()
  const location = useLocation()
  const selectedCmp = useSelector((storeState) => storeState.wapModule.selectedCmp)

  const onHoverCmp = (ev) => {
    ev.stopPropagation()
    if (location.pathname !== '/preview' && !location.pathname.includes('/publish')) {
      ev.target.classList.add('hover')
    }
  }

  const onSelectCmp = (ev, cmp) => {
    ev.stopPropagation()
    if (location.pathname !== '/preview' && !location.pathname.includes('/publish')) {
      dispatch(setSelectedCmp(cmp))
    }
  }

  switch (cmp.type) {
    case 'container':
      return <ContainerCmp {...props} style={cmp.style} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} selectedCmp={selectedCmp} />
    case 'txt':
      return <TxtCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'icon':
      return <IconCmp {...cmp.info} />
    case 'img':
      return <ImgCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'faq':
      return <FAQCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'btn':
      return <BtnCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'carosuel':
      return <CarouselCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'carousel-lg':
      return <CarouselLgCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'video':
      return <VideoCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'gallery-grid':
      return <Gallery cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'paging-gallery':
      return <PagingGallery cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    case 'form':
      return <FormCmp cmp={cmp} selectedCmp={selectedCmp} onHoverCmp={onHoverCmp} onSelectCmp={onSelectCmp} />
    default:
      return
  }
}
