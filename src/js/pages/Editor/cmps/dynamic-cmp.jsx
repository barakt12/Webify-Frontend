import { Icon } from './icon'

export const DynamicCmp = ({ cmp }) => {
  // console.log(cmp)
  return (
    <div className="cmp" style={cmp.style}>
      {cmp.type === 'container' && cmp.cmps && cmp.cmps.map((innerCmp) => <DynamicCmp cmp={innerCmp} />)}
      {cmp.type === 'nav-bar' && cmp.cmps && cmp.cmps.map((innerCmp) => <DynamicCmp cmp={innerCmp} />)}
      {/* change txt to paragraph (p) */}
      {cmp.type === 'txt' && <span>{cmp.content}</span>}
      {cmp.type === 'icon' && <Icon iconName={cmp.iconName} />}
    </div>
  )
}
