import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'
import { CarosuelCmp } from './carousel-cmp'
import { useLocation } from 'react-router'

export const DynamicCmp = ({ cmp }) => {
  let insertedCmp = ''
  const location = useLocation()

  switch (cmp.type) {
    case 'container':
      insertedCmp = cmp?.cmps?.map((innerCmp) => {
        return <DynamicCmp key={innerCmp.id} cmp={innerCmp} />
      })
      break
    case 'txt':
      insertedCmp = <TxtCmp {...cmp.info} />
      break
    case 'icon':
      insertedCmp = <IconCmp {...cmp.info} />
      break
    case 'img':
      insertedCmp = <ImgCmp {...cmp.info} />
      break
    case 'faq':
      insertedCmp = <FAQCmp {...cmp.info} />
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
    // if (cmp.type === 'container' || location.pathname === '/preview') return
    ev.target.classList.add('hover')
  }

  return (
    <div className={`cmp ${cmp.name ? cmp.name : ''}`} onMouseOut={(ev) => ev.target.classList.remove('hover')} onMouseOver={(ev) => onHoverElement(ev)} style={cmp.style}>
      {insertedCmp}
    </div>
  )
}
