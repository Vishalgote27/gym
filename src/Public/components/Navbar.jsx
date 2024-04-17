import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <>
        <div className='bg-light '>
            <div className="container">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <div class="bg-dark navbar-brand  d-flex justify-content-center align-items-center "
                            style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}>
                            <i class="bi bi-vimeo fs-2 text-white"></i>
                        </div>
                        <span className='fw-bold'>Vishal Fitness</span>
                        {/* <a class="navbar-brand  " href="#"> <span><i class="bi bi-vimeo"></i></span> Vishal Fitness</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav mx-auto me-1 gap-5  ">
                                <Link to={"/"} class="nav-link active  ">
                                    Home
                                </Link>
                                {/* <a class="nav-link active" href="#">Home</a> */}
                                <Link to="/plan" class="nav-link active  " href="#">Plan & Pricing</Link>
                                <Link to="/about" class="nav-link active  " href="#"> About</Link>
                                <Link to="/contact" class="nav-link active  " href="#"> Conact</Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </>
}

export default Navbar