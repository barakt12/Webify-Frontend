import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'
import { BtnCmp } from './btn-cmp'

export const DynamicCmp = ({ cmp }) => {
  let insertedCmp = ''

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
    default:
      return
  }

  return (
    <div className={`cmp ${cmp.name ? cmp.name : ''}`} onMouseOut={(ev) => ev.target.classList.remove('hover')} onMouseOver={(ev) => ev.target.classList.add('hover')} style={cmp.style}>
      {insertedCmp}
    </div>
  )
}
