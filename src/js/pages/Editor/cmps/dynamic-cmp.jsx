import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'
import { ImgCmp } from './img-cmp'
import { FAQCmp } from './faq-cmp'

export const DynamicCmp = ({ cmp }) => {
  return (
    <div className={`cmp ${cmp.name}`} style={cmp.style}>
      {cmp.type === 'container' && cmp?.cmps?.map((innerCmp) => <DynamicCmp key={innerCmp.id} cmp={innerCmp} />)}
      {cmp.type === 'txt' && <TxtCmp {...cmp.info} />}
      {cmp.type === 'icon' && <IconCmp {...cmp.info} />}
      {cmp.type === 'img' && <ImgCmp {...cmp.info} />}
      {cmp.type === 'faq' && <FAQCmp {...cmp.info} />}
    </div>
  )
}
