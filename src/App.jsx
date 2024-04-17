import React from 'react'
import Home from './Public/pages/Home'
import Navbar from './Public/components/Navbar'
import Contact from './Public/pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Public/pages/About'
import PublicLayout from './Public/PublicLayout'
import Plan from './Public/pages/Plan'

const App = () => {
  return <>
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<PublicLayout />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plan" element={<Plan />} />
          <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Contact /> */}

  </>
}

export default App