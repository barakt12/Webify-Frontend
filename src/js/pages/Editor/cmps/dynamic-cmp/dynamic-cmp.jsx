import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'
import { CarouselCmp } from './carousel-cmp'
import { useLocation } from 'react-router'
import { setSelectedElement } from '../../../../store/wap/wap.action'
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
  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)

  const onHoverElement = (ev) => {
    ev.stopPropagation()
    if (location.pathname !== '/preview' && !location.pathname.includes('/publish')) {
      ev.target.classList.add('hover')
    }
  }

  const onSelectElement = (ev, cmp) => {
    ev.stopPropagation()
    if (location.pathname !== '/preview' && !location.pathname.includes('/publish')) {
      dispatch(setSelectedElement(cmp))
    }
  }

  switch (cmp.type) {
    case 'container':
      return <ContainerCmp {...props} style={cmp.style} onHoverElement={onHoverElement} onSelectElement={onSelectElement} selectedElement={selectedElement} />
    case 'txt':
      return <TxtCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'icon':
      return <IconCmp {...cmp.info} />
    case 'img':
      return <ImgCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'faq':
      return <FAQCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'btn':
      return <BtnCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'carosuel':
      return <CarouselCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'carousel-lg':
      return <CarouselLgCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'video':
      return <VideoCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'gallery-grid':
      return <Gallery cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'paging-gallery':
      return <PagingGallery cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    case 'form':
      return <FormCmp cmp={cmp} selectedElement={selectedElement} onHoverElement={onHoverElement} onSelectElement={onSelectElement} />
    default:
      return
  }
}
