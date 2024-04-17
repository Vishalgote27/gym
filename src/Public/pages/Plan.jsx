import React from 'react'
import "./About.css"

const Plan = () => {

    return <>
        <div className=' bg-body-secondary p-4 text-center d-none d-lg-block d-md-block d-sm-block'>
            <br />
            <br />
            <h1 className=' text-dark a1'>Choose Your Pricing Plan</h1>
            <br />
        </div>
        <div className=' bg-body-secondary p-4 text-center d-block d-sm-none d-md-none d-lg-none'>
            <br />
            <br />
            <h1 className=' text-dark'>Choose Your Pricing Plan</h1>
        </div>
        <br />
        <div className="container">
            <div className="row g-5">
                <div className="col-sm-6 col-lg-4 ">
                    <div class="card border border-dark rounded-0 bg-body-secondary">
                        <div class="card-body text-center">
                            <h4>New Member Trial</h4>
                            <h1>50</h1>
                            <p>Get to know the studio and our classes</p>
                            <p>Valid for 3 months</p>
                            <button type="button" class="btn btn-dark btn-lg w-75 rounded-0">Select</button>

                        </div>
                        <div className='card-footer bg-white border-black text-center'>
                            <h4>5 classes</h4>
                            <p>Open studio access</p>
                            <p>Online resources</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="card border border-dark rounded-0 bg-info-subtle">

                            <div class="card-body text-center  ">
                                <h4>New Member Trial</h4>
                                <h1>50</h1>
                                <p>Get to know the studio and our classes</p>
                                <p>Valid for 3 months</p>
                                <button type="button" class="btn btn-dark btn-lg w-75 rounded-0">Select</button>

                            </div>
                            <div className='card-footer bg-white border-black text-center'>
                                <h4>5 classes</h4>
                                <p>Open studio access</p>
                                <p>Online resources</p>
                                <p>1 Guest pass</p>
                                <p>Free WiFi</p>
                                <p>Weekly newsletter</p>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="card border border-dark rounded-0 bg-body-secondary">

                            <div class="card-body text-center  ">
                                <h4>New Member Trial</h4>
                                <h1>50</h1>
                                <p>Get to know the studio and our classes</p>
                                <p>Valid for 3 months</p>
                                <button type="button" class="btn btn-dark btn-lg w-75 rounded-0">Select</button>

                            </div>
                            <div className='card-footer bg-white border-black text-center'>
                                <h4>5 classes</h4>
                                <p>Open studio access</p>
                                <p>Online resources</p>
                                <p>1 Guest pass</p>
                                <p>Free WiFi</p>
                                <p>Weekly newsletter</p>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}

export default Plan