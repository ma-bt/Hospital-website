import React from 'react'
import firstImg from "../images/1.png"
import secImg from "../images/2.png"
import thirdImg from "../images/3.png"
import HomePic from "../images/homepic.jpg"
import Home2 from "../images/home2.jpg"
import Home3 from "../images/home3"
import Home4 from "../images/home4.jpg"


export default function Home() {
  return (
    <>
      <section className='container '>
        <div className='row  d-flex mb-5 pb-4 '>


          <div className="col-lg-6">
            <div >
              <h2 className='cool2 text-start fs-1 fw-normal  pt-5 mt-5'> A Ray of <b>Hope</b> for</h2>
              <div className='abc col-lg-8'><h1 className='cool1 text-start  fw-bold  pb-4'>Nepali</h1></div>
              <div className='abcd '><p className=' text-start  pt-5 '>Our Mission is to provide care to our patients by incorporating <br />research, technology, and compassion into evidence-based  <br />preventive, curative, and palliative treatment that improves the  <br />quality of life of our patients and their families. We will foster a  <br />culture of care where all patients are treated with respect and  <br /> dignity regardless of who they are.

              </p></div>
            </div>
          </div>
          <div className="col-lg-6 pt-4 d-none d-lg-block">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={firstImg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={secImg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={thirdImg} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>




          </div>
        </div>

        {/* Card */}
        <div>
          <div className=" mb-3" style={{ background: '#eeeeee' }}>
            <div className="row g-0 p-5">
              <div className="col-md-6">
                <img src={HomePic} className="img-fluid rounded-start" alt="..." />
              </div>

              <div className="col-md-6">
                <div className="card-body ps-5">
                  <h2 className="card-title">Latest event</h2>
                  <p className="card-text py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo,</p>
                  <div ><button type="button" class="btn btn-secondary   ">Read more</button></div>
                  <br />
                  <p className="card-text"><small className="text-muted ">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Card2 */}
        <div>
          <div className='py-5'>
            <h1 className='text-center'>GALLERY</h1>
            <div className='row'>


              {/* 1st */}

              <div className='col-lg-4'>
                <div className="card p-4 m-auto shadow p-3 mb-5 bg-body rounded" style={{ width: '24rem', height: '20rem' }}>
                  <img src={Home2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Our Hospital</h5>
                  </div>
                </div>
              </div>

              {/* 2nd */}

              <div className='col-lg-4'>
                <div className="card p-4 m-auto shadow p-3 mb-5 bg-body rounded" style={{ width: '24rem', height: '20rem' }}>
                  <img src={Home3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Our Surgery Team</h5>
                  </div>
                </div>
              </div>

              {/* third*/}

              <div className='col-lg-4'>
                <div className="card p-4 m-auto shadow p-3 mb-5 bg-body rounded" style={{ width: '24rem', height: '20rem' }}>
                  <img src={Home4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Hospital Ward</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* carousel */}
      <section className='banner py-5 d-none d-lg-block '>
        <div className='container'>
          <div className='py-4 mb-4'><h4 className='text-center text-light'>WHAT OUR PATIENT SAY</h4></div><br />
          <div className='mt-5'>
            <div id="carouselExampleDark" className="carousel carousel slide " data-bs-ride="carousel">
              <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel">
                <div className="carousel-item active" data-bs-interval={3000}>
                  
                  <div className="carousel-caption d-none d-md-block">
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam ac dolor pharetra,</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                  
                  <div className="carousel-caption d-none d-md-block">
                   
                    <p> Dolor sit amet, consectetur adipiscing elit.Aliquam ac dolor pharetra sit amet, consectetur adipiscing elit.Aliqua</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                  
                  <div className="carousel-caption d-none d-md-block">
                   
                    <p> Consectetur adipiscing elit ac dolor pharetra dolor sit amet, consectetur adipiscing  dolor pharetra.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>


          </div>


        </div>
      </section>
    </>
  )
}
