import React from 'react'
import { Routes, Route } from "react-router-dom"
import Appointment from '../Pages/Appointment'
import Find from '../Pages/Find'
import { Link } from "react-router-dom";
import Home from '../Pages/Home'
import Research from '../Pages/Research'
import Services from '../Pages/Services'
import About from '../Pages/About';



export default function Navbar() {
  
  return (
    <>
    <nav className='mainNav bg-light   '>
      <div className='container py-3  '>
        <ul className=' list-unstyled d-flex gap-3 justify-content-between  m-0 '>
          <li>
            <Link to="/" className='text-decoration-none text-reset d-none d-lg-block  '><button type="button" className="btn cool px-5 py-1" >Home</button></Link>
          </li>
          <li>
            <Link to="/medical-services" className='text-decoration-none text-reset'><button type="button" className="btn cool px-4 py-1">Medical Services</button></Link>
          </li>
          <li>
            <Link to="/medical-research" className='text-decoration-none text-reset'><button type="button" className="btn cool px-4 py-1">Clinical Research</button></Link>
          </li>
          <li>
            <Link to="/find-a-doctor" className='text-decoration-none text-reset d-none d-lg-block'><button type="button" className="btn cool px-4 py-1">Find a doctor</button></Link>
          </li>
          
          <li>
            <Link to="/book-an-appointment" className='text-decoration-none text-reset'><button type="button" className="btn cool px-4 py-1">Appointment</button></Link>
          </li>
          <li>
            <Link to="/about-us" className='text-decoration-none text-reset d-none d-lg-block'><button type="button" className="btn cool px-5 py-1">About US</button></Link>
          </li>
        </ul>
      </div>

    </nav>
 
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/medical-services' element={<Services />} />
      <Route path='/find-a-doctor' element={<Find />} />
      <Route path='/medical-research' element={<Research />} />
      <Route path='/book-an-appointment' element={<Appointment />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  
   </>
  )
}
