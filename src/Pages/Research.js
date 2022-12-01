import React from 'react'
import { Link } from 'react-router-dom'
import  { Medical } from '../Data/Data'
import Research1 from "../images/research1.jpg"
import Research2 from "../images/research2.jpg"
import Research3 from "../images/research3.jpg"

export default function Research() {
  return (
    <>
      <section>
        <div className='' >

          {/* carousel */}
          <div className='container'>

            <div className='row py-5'>
              <div className=' col-lg-6 py-lg-5 mt-lg-5 cool2 '>
                <h2 className='fw-normal'> Research At  </h2>
                <h1 className='fw-normal'><b>MAAMS</b> Hospital</h1>
                <div className='abcd '><p className=' text-start  pt-3 '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo ornare.
                </p></div>
              </div>

              <div className='col-lg-6 '><div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={3000}>
                    <img src={Research1} className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block cool ">
                      <h5 className='text-light'>Vaccine</h5>
                      <p className='text-light'>Designing personalized vaccines to combat Covid 19</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <img src={Research2} className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block cool">
                      <h5 className='text-light'>Viruses</h5>
                      <p className='text-light'> Study on various viruses for vast knowledge.</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <img src={Research3} className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block cool">
                      <h5 className='text-light'>Experiment</h5>
                      <p className='text-light'>Different drug test for better medicine.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div></div>
            </div>

            {/* Mapping data */}
            <div>
              <div className='py-4'>
                <h2 className=' text-center  cool2'>Our Researches</h2>
                <h1 className=' text-center cool2'><i class="bi bi-activity"></i></h1>
              </div>
              <div className='row py-2'>

                {Medical.map((a, index) => (
                  <div className='col-lg-12  py-4 text-center'>
                    <Link className='text-decoration-none text-reset hov'><h1 className=''>{a.title}</h1></Link>
                    <div className='abcd mainNav'><p>{a.body}</p></div>
                  </div>
                ))}

              </div>
            </div>
          </div>

      </div>
    </section>

    </>
  )
}
