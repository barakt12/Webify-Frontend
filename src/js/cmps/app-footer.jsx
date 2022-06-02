import { Link } from 'react-router-dom'

export function AppFooter() {
  return (
    <div className='app-footer'>
      <div className='upper-footer'>
        <h2>We care how your website looks</h2>
        <p>Ready to get going?</p>
        <Link to='/templates'>
          <button>Start right now!</button>
        </Link>
      </div>
      <div className='lower-footer'>
        <div className='left'>
          <div className='logo'>
            <p>Webify</p>
          </div>
          <hr />
          <p> Made by Barak Treves - Avi Isakov - Amit Akuka</p>
        </div>
        <div className='right'>
          <p>© 2022 Webify LTD.</p>
        </div>
      </div>
    </div>
  )
}
