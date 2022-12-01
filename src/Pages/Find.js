import React from 'react'
import  { Doctor } from '../Data/Data'
import img from "../images/doctor.jpg"

export default function Find() {
  return (
    <section>
      <div>
        {/* Top */}
        <div className='banner'>
          <div className='block1 text-center text-light container'><h1 className=' '> Find a Doctor</h1>
            <p className='pt-2'>Search for your Preferred doctor</p>
            <div className='row pb-5'><div className=" col-lg-4  "></div>
              <div className="form  col-lg-4 d-flex justify-content-center  pb-5">
                <i className="bi bi-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search  ..." />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className='container cool2 py-4 fw-bold fw-1 text-center'><h1>Our Doctors</h1></div>

        {/* card Area*/}

        <div className='container d-flex border-bottom '>
          <div className='row'>
            {Doctor.map((a, index) => (

              <div className='col-lg-4'>
                <div className="card  m-auto shadow p-3 mb-5 bg-body rounded " style={{ width: '22rem', height: '34rem' }}>
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text">{a.body}</p>
                    <div className='d-flex justify-content-between abcd'>

                      <a href="/book-an-appointment" className="btn btn-primary " style={{height: '2rem'}}> <p className='text-reset'>Book an appointment </p></a>


                        <a href="/" className="btn btn-primary" style={{height: '2rem'}}> <p className='text-reset text-center' >View more </p></a>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
