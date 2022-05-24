/* eslint-disable jsx-a11y/anchor-is-valid */
export function Header1() {
  return (
    <header draggable id="hara" onDragEnd={onDragEnd} className="header header2">
      <div className="logo">Header1</div>
      <nav>
        <a href="">
          <span>Home</span>
        </a>
        <a href="">
          <span>page1</span>
        </a>
        <a href="">
          <span>page2</span>
        </a>
        <a href="">
          <span>About</span>
        </a>
      </nav>
    </header>
  )
}

function onDragEnd(e) {
  console.log(e.target.id)
}
