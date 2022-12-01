import React from 'react'

export default function Appointment() {
  return (
    <>
      <section>
        <div>
          <div className='banner'>
            <div className=' block1 text-center text-light container-5 pb-5'>
              <h1 className='text-center pt-5  '>Our Online Appointment Service</h1>
              <small className='pt-4 pb-5 '>Please note that your request will be processed within 1-2 business days. If you are <br /> experiencing a medical emergency, please call <b>102</b>.</small>
            </div>
          </div>
          <div className='container'>
            <div className='py-5'>

              {/* Patient information */}
              <h3 className='fw-3 fw-light'>Patient Information :</h3>
              <div className='row py-3'>
                <div className='col-lg-5'>
                  {/* Title */}
                  <h5 className='fw-light pt-4'> Title</h5>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Ms</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                  </select>
                  {/* First Name */}
                  <h5 className='fw-light pt-4'>First Name</h5>
                  <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                  {/* Last Name */}
                  <h5 className='fw-light pt-4'>Last Name</h5>
                  <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />

                  {/* Date of birth */}
                  <h5 className='fw-light pt-4'>Date of Birth</h5>
                  <input type="date" className="form-control" placeholder="mm/dd/yy" aria-label="Last name" />
                  {/* Gender */}
                  <h5 className='fw-light pt-4'> Gender</h5>
                  <select id="inputState" className="form-select">
                    <option selected>Select one </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {/* Marital Status */}
                  <h5 className='fw-light pt-4'> Marital Status</h5>
                  <select id="inputState" className="form-select">
                    <option selected>Select one </option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Domestic Partnership</option>
                    <option>Widowed</option>
                  </select>


                  {/* Address */}
                  <h5 className='fw-light pt-4'> Address</h5>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="1234 Main St"></input>

                  {/* State */}
                  <h5 className='fw-light pt-4'> State</h5>
                  <select id="inputState" class="form-select">
                    <option selected>Select one </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>

                  {/* City */}
                  <h5 className='fw-light pt-4'>City </h5>
                  <input type="text" className="form-control" placeholder="City " aria-label="City" />

                  {/* Phone */}
                  <h5 className='fw-light pt-4'>Phone Number</h5>
                  <input type="text" className="form-control" placeholder="Phone number" aria-label="Phone number" />

                  {/* Email */} 
                  <h5 className='fw-light pt-4'><label for="inputEmail4" clasName="form-label">Email</label></h5>
                  <input type="email" class="form-control mb-4" id="inputEmail4" placeholder='abc@gmail.com'></input>

                  
                </div>

              </div>


              {/* Appointment Details */}


              <h3 className='fw-3 fw-light'>Appointment Details :</h3>
              <div className='row py-3'>
                <div className='col-lg-5'>
                  {/* Radio */}
                  <h5 className='fw-light pt-4'> Has the patient been seen at NAAMS hospital in the past?</h5>
                  <div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio"  />
                    <label className="form-check-label" htmlFor="flexRadio">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio" />
                    <label className="form-check-label" htmlFor="flexRadio">
                      No
                    </label>
                  </div>
                  </div>


                   {/* Text area */}
                  <div>
                  <h5 className='fw-light pt-4'> <label htmlFor="validationTextarea" className="form-label">If yes please describe</label></h5>
                    <textarea className="form-control" id="validationTextarea" placeholder="Describe here " required defaultValue={""} style={{ height:'17rem' }}/>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>


                  {/* Text area */}
                  <div>
                  <h5 className='fw-light pt-4'> <label htmlFor="validationTextarea" className="form-label">Reason for  appoinment</label></h5>
                    <textarea className="form-control" id="validationTextarea" placeholder="Describe here " required defaultValue={""} style={{ height:'17rem' }}/>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>


                   {/* Radio */}

                  <h5 className='fw-light pt-4'> Does the patient have a diagnosis?</h5>
                  <div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioa" id="flexRadioDefault1"  />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioa" id="flexRadioDefault1"  />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      No
                    </label>
                  </div>
                  </div>

                   {/* Radio */}

                  <h5 className='fw-light pt-4'> Is this condition or injury related to work?</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadiob" id="flexRadioDefault2"  />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadiob" id="flexRadioDefault2"  />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      No
                    </label>
                  </div>

                   {/* Radio */}


                  <h5 className='fw-light pt-4'> Is this condition or injury related to an auto accident?</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      No
                    </label>
                  </div>

                   {/* Text area */}
                   <div>
                  <h5 className='fw-light pt-4'> <label htmlFor="validationTextarea" className="form-label" >Reason for  appoinment</label></h5>
                  <small className='fw-light'><i>Preferred day of the week/date/time or first available</i></small><br/>
                  <small className='fw-light'><i>Preferred physician or provider name</i></small><br/>
                 
                    <textarea className="form-control " id="validationTextarea" placeholder="Describe here " required defaultValue={""} style={{ height:'17rem' }}/>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>


                  <small className='fw-light pt-4'>WE  cannot garantee exact scheduling, but we will do our best to accomadate the patient's wish.</small><br/>
                  {/* Submit */}
                  <button type="submit" class="btn btn-primary mt-5">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
