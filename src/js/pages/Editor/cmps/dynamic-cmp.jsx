export function DynamicCmp({ cmp }) {
  // console.log(cmp)
  return (
    <div className='cmp' style={cmp.style}>
      {cmp.type === 'header' &&
        cmp.cmps &&
        cmp.cmps.map((innerCmp) => (
          <DynamicCmp cmp={innerCmp} key={innerCmp.id} />
        ))}
      {cmp.type === 'nav-bar' &&
        cmp.cmps &&
        cmp.cmps.map((innerCmp) => (
          <DynamicCmp cmp={innerCmp} key={innerCmp.id} />
        ))}
      {cmp.type === 'txt' && <span>{cmp.content}</span>}
    </div>
  )
}
