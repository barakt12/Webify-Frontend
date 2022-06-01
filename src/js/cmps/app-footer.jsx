import { Link } from 'react-router-dom'

export function AppFooter() {
  return (
    <div className="app-footer">
      <div className="upper-footer">
        <h2>We care how your website looks</h2>
        <p>Ready to get going?</p>
        <Link to="/templates">
          <button>Start right now!</button>
        </Link>
      </div>
      <div className="lower-footer">
        <div className="left">
          <div className="logo">
            <p>Webify</p>
          </div>
          <hr />
          <p>A Coding Academy Product</p>
        </div>
        <div className="right">
          <p>© 2022 All Turtles Corporation</p>
        </div>
      </div>
    </div>
  )
}
