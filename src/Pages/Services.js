import React from 'react'
import Data from '../Data/Data'

export default function Services() {
  return (
    <>
      <section >
        <div >
          <div className='banner'>
            <div className='block1 text-center text-light container'><h1 className=' '> Find Medical Services</h1>
              <p className='pt-2'>Search or browse services and conditions</p>
              <div className='row pb-5'><div className=" col-lg-4  "></div>
                <div className="form  col-lg-4 d-flex justify-content-center  pb-5">
                  <i className="bi bi-search"></i>
                  <input type="text" className="form-control form-input" placeholder="Search services and condition..." />
                </div>
              </div>
            </div>
          </div>
          <div className='container cool2 pt-4 text-center fw-bold 
          
          fw-1'><h1>Our Services</h1></div>


            {/* card Area*/}
          <div className='container d-flex border-bottom '>
            <div className='row'>
              {Data.map((a, index) => (
                
                  <div className='col-lg-4'>
                    <div className="card p-4 m-3 shadow p-3 mb-5 bg-body rounded " style={{ width: '22rem',height:'17rem' }}>
                      <div className="card-body  ">
                        <div >
                          <h5 className="card-title cool2 fw-3">{a.title}</h5>
                          <p className="card-text fw-light ">{a.body}</p>
                          <a href="" className="card-link text-decoration-none">Visit</a>
                          <a href="/book-an-appointment" className="card-link text-decoration-none">Book an appoinment</a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
