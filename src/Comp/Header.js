import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <header className='cool sticky-top' >
                <div className='container  '>
                    <div className='row py-2 d-flex justify-content-between  '>

                        
                        <div className='col-lg-6 '> <Link to='/' className='text-decoration-none text-reset'><h2 className=' fw-bold'>MAAMS</h2></Link></div>
                        <div className='col-lg-6 d-none d-lg-block '>
                            <ul className='list-unstyled d-flex gap-3 justify-content-end m-0 '>
                                <li>
                                    <div className="dropdown">
                                        <button className="btn  dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
                                            Eng
                                        </button>
                                        <ul className="dropdown-menu ">
                                            <li>Nep</li>

                                        </ul>
                                    </div>

                                </li>
                                <li><div className="form  d-flex justify-content-center align-items-center">
                                    <i className="bi bi-search"></i>
                                    <input type="text" className="form-control form-input" placeholder="Search anything..." />

                                </div></li>
                                <li><h2><i className="bi bi-person-circle"></i></h2></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
