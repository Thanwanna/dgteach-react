// No : 3
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Layout from "../pages/Layout"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import Contact from "../pages/Contact"
import Nopage from "../pages/Nopage"


// const RouterComponent = () => {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="blogs" element={<Blogs />} />
//                 <Route path="contact" element={<Contact />} />
//                 <Route path="*" element={<Nopage />} />
//             </Route>
//         </Routes>
//     </BrowserRouter>
//   )
// }

const routers = [
  {path : '/',element : <Home />},
  {path : '/blogs',element : <Blogs />},
  {path : '/contact',element : <Contact />},
  {path : '*',element : <Nopage />}
]


const RouterComponent =()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} /> */} 

          {routers.map(r => <Route path={r.path} key={r.path} element={r.element} />)}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default RouterComponent