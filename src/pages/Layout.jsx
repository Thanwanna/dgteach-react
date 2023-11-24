import { Outlet, Link} from "react-router-dom"
import './layout.css'

const  Layout = () => {
  return (
      <>
      <nav>
      <h1>LAYOUT</h1>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/blogs'>BLOGS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
      <Outlet />
      </>
  )
}

export default Layout