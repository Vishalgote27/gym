import { TextField } from '@mui/material'
import React from 'react'
import "./About.css"

const Contact = () => {
    return <>
        <div className=' bg-body-secondary p-4 text-center'>
            <br />
            <br />
            <h1 className=' text-dark a1'>Contact</h1>
            <br />
        </div>

        <div className="">
            <div className="row g-0 animate__animated animate__fadeInDown">
                <div className="col-sm-5">
                    <div class="card rounded-0">
                        <div class="card-body  bg-info-subtle pt-4 ps-5 ">
                            <h1 className='mt-5'>Get in Touch</h1>
                            <br />
                            <p>I'm a paragraph. Click here to add <br />
                                <br />
                                your own text and edit me </p>
                            <br />
                            <p>Address. 500 Terry Francine Street
                                San Francisco, CA 94158</p>
                            <br />
                            <p>Email. info@mysite.com

                                <br />
                                <br />
                                Phone. 123-456-7890</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-7 ">
                    <div class="card rounded-0 bg-body-tertiary">
                        <div class="card-body">
                            <div className="row  mt-5">
                                <div className="col-sm-6 col-md-6">
                                    <div class="mb-3">
                                        {/* <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}
                                        <TextField variant='standard' label="first name" fullWidth>nnnnnn</TextField>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div class="mb-3">
                                        {/* <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}
                                        <TextField variant='standard' label="first name" fullWidth>nnnnnn</TextField>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-6 mt-4">
                                    <div class="mb-3">
                                        {/* <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}
                                        <TextField variant='standard' label="first name" fullWidth>nnnnnn</TextField>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 mt-4">
                                    <div class="mb-3">
                                        {/* <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}
                                        <TextField variant='standard' label="first name" fullWidth></TextField>
                                    </div>
                                </div>
                                <div className='mt-5'>

                                    <TextField variant='standard' label="Your message" fullWidth></TextField>
                                </div>



                                <button type="button" class="btn btn-primary btn-sm w-50 mx-auto mt-5 p-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







        {/* <div className="container">


            <div className='bg-info w-50 p-5 position-absolute mx-5   '>
                <h3>The Ultimate Method to Change Your Life</h3>
                <br />
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    <br />
                    <br />
                    <br />
                    <br />
                    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.</p>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='bg-warning w-50  p-5 position-relative mx-ato   star-50 mx-auto     '>
                <h3>The Ultimate Method to Change Your Life </h3>
                <br />
                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    <br />
                    <br />
                    <br />
                    <br />
                    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.</p>

            </div>
        </div> */}







        {/* <div className='bg-black pb-5 p-5 w-100' style={{ height: "18rem", }}>

            <div className=''>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 ">
                            <div class="card text-center rounded-0 mt-5 " style={{ width: "15rem" }}>
                                <img src="https://static.wixstatic.com/media/fd6edb_90d702bbbde8422184ee065cd9239255~mv2.jpg/v1/fill/w_392,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd6edb_90d702bbbde8422184ee065cd9239255~mv2.jpg" class="" alt="..." className='' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-none d-sm-none d-md-block  ">
                            <div class="card text-center rounded-0 mt-5 " style={{ width: "15rem" }}>
                                <img src="https://static.wixstatic.com/media/fd6edb_329ca0d207224f279a9cab7c408ad4d5~mv2.jpg/v1/fill/w_392,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd6edb_329ca0d207224f279a9cab7c408ad4d5~mv2.jpg" class="" alt="..." className='' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-none d-sm-none d-md-block  ">
                            <div class="card text-center rounded-0 mt-5 " style={{ width: "15rem" }}>
                                <img src="https://static.wixstatic.com/media/fd6edb_cf56faf05d854ddabafc5f447df68680~mv2.jpg/v1/fill/w_392,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd6edb_cf56faf05d854ddabafc5f447df68680~mv2.jpg" class="" alt="..." className='' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-none d-sm-none d-md-block  ">
                            <div class="card text-center rounded-0 mt-5 " style={{ width: "15rem" }}>
                                <img src="https://static.wixstatic.com/media/fd6edb_8f088bdebace4df985abb6d644b8ec0e~mv2.jpg/v1/fill/w_392,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd6edb_8f088bdebace4df985abb6d644b8ec0e~mv2.jpg" class="" alt="..." className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> */}
    </>
}

export default Contact