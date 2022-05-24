import { Icon } from './icon'

export function DynamicCmp({ cmp }) {
  return (
    <div className="cmp" style={cmp.style}>
      {cmp.type === 'container' && cmp.cmps && cmp.cmps.map((innerCmp) => <DynamicCmp cmp={innerCmp} />)}
      {cmp.type === 'nav-bar' && cmp.cmps && cmp.cmps.map((innerCmp) => <DynamicCmp cmp={innerCmp} />)}
      {cmp.type === 'txt' && <span>{cmp.content}</span>}
      {cmp.type === 'icon' && <Icon iconName={cmp.iconName} />}
    </div>
  )
}
