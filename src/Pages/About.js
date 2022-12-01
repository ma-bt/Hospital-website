import React from 'react'
import About1 from '../images/about1.jpg'
import About3 from '../images/about3.jpg'
import About2  from '../images/about2.jpg'
export default function About() {
    return (
        <>
            <section>
                <div className=''>
                    <div className='block1 text-center cool2 container pb-5'><h1 className=' '> Welcome to MAAMS Hospital</h1>
                        <p className='pt-2'>Touching lives, one patient at a time. Providing all our best.</p>
                    </div>
                    <div className='banner'>
                        <div className='container'>
                            <div className='py-5 text-light'>
                                <div className=" mb-3" style={{}}>
                                    <div className="row g-0">

                                        <div className="col-md-6">
                                            <div className="card-body ">
                                                <h4 className="card-title ">About us</h4>
                                                <p className="card-text pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc susci nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-end ">
                                            <img src={About1} className="img-fluid rounded" style={{ width: '600px',height:'280px' }} alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>

                    </div>

                    <div className='container py-5 my-3'>
                        <div className=" mb-3" style={{  }}>
                            <div className="row g-0">
                            <div className="col-md-6 ">

                             <img src={About3} className="img-fluid rounded"  style={{ width: '600px',height:'280px' }} alt="..." />
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="card-body ps-5">
                                        <h4 className="card-title">Why Choose MAAMS ?</h4>
                                        <p className="card-text pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. </p>
                                       
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}
