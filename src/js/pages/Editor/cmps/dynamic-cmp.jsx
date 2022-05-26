import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'
import { CarosuelCmp } from './carousel-cmp'
import { useLocation } from 'react-router'
import { setSelectedElement } from '../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'

export const DynamicCmp = ({ cmp }) => {
  const dispatch = useDispatch()
  let insertedCmp = ''
  const location = useLocation()
  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)

  switch (cmp.type) {
    case 'container':
      insertedCmp = cmp?.cmps?.map((innerCmp) => {
        return <DynamicCmp key={innerCmp.id} cmp={innerCmp} />
      })
      break
    case 'txt':
      insertedCmp = <TxtCmp cmp={cmp} selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
      break
    case 'icon':
      insertedCmp = <IconCmp {...cmp.info} />
      break
    case 'img':
      insertedCmp = <ImgCmp cmp={cmp} selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
      break
    case 'faq':
      insertedCmp = <FAQCmp cmp={cmp} selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
      break
    case 'btn':
      insertedCmp = <BtnCmp {...cmp.info} />
      break
    case 'carosuel':
      insertedCmp = <CarosuelCmp {...cmp.info} />
      break
    default:
      return
  }

  const onHoverElement = (ev) => {
    if (cmp.type !== 'container' || location.pathname !== '/preview') {
      ev.target.classList.add('hover')
    }
  }

  return (
    <div className={`cmp ${cmp.name ? cmp.name : ''}`} onMouseOut={(ev) => ev.target.classList.remove('hover')} onMouseOver={(ev) => onHoverElement(ev)} style={cmp.style}>
      {insertedCmp}
    </div>
  )
}
