import { IconCmp } from './icon-cmp'
import { TxtCmp } from './txt-cmp'

export const DynamicCmp = ({ cmp }) => {
  return (
    <div className="cmp" style={cmp.style}>
      {cmp.type === 'container' && cmp?.cmps?.map((innerCmp) => <DynamicCmp key={innerCmp.id} cmp={innerCmp} />)}
      {cmp.type === 'txt' && <TxtCmp content={cmp.content} />}
      {cmp.type === 'icon' && <IconCmp iconName={cmp.iconName} />}
    </div>
  )
}
