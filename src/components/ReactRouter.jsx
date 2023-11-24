// No : 2

import { BrowserRouter, Routes,Route ,Outlet, Link } from "react-router-dom"


const Home =()=> {
    return (
        <div>Home</div>
    )
}

const Blogs =()=> {
    return (
        <div>Blogs</div>
    )
}

const Contact =()=> {
    return (
        <div>Contact</div>
    )
}


const NoPage = () => {
  return (
    <div>NoPage</div>
  )
}


const Layout =()=> {
    return (
        <>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/contact'>Contact</Link> </li>
            </ul>
        </nav>

        <Outlet />

        </>
    )
}

const ReactRouter =()=> {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter