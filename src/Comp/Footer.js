import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../Data/Data'

export default function Footer() {
  return (
    <>
      <section className='bg-black'>
        <div className=' container  '>
          <div className='row pt-5 '>
            {Post.map((b,index) => (
            <div className='col-lg-4 foot pt-5 '>
              <Link to="" className='text-decoration-none text-light'><h6>{b.title}</h6></Link>
                <Link to="" className='text-decoration-none cool-3'><p>{b.body}</p></Link>
                <Link to="" className='text-decoration-none cool-3'><p>{b.body1}</p></Link>
              </div>

            ))}
          </div>
          <div>
            <div className='pt-5'>
              <h5 className='text-center text-light'>Follow MAAMS Hospital on</h5>
            </div>
            <div className=''>
              <ul className=' d-flex cool-3 justify-content-center list-unstyled gap-3'>
                <li><h3><i class="bi bi-facebook"></i></h3></li>
                <li><h3><i class="bi bi-twitter"></i></h3></li>
                <li><h3><i class="bi bi-youtube"></i></h3></li>
                <li><h3><i class="bi bi-linkedin"></i></h3></li>
              </ul>
              <small className='d-flex justify-content-center  cool-3 pb-5'>© 1998-2022 MAAMS Foundation for Medical Education and Research (MFMER). All rights reserved.</small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
