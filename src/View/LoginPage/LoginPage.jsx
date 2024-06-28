import { React, useState } from 'react';
import { useNavigate} from "react-router-dom";

import './LoginPage.scss';

const LoginPage = () => {

    const navigate = useNavigate();
    

    const clickFunction = () => {
        navigate('/home')
    }
    return (
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-80">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-3">Sign up</h2>

                                    <form>

                                        <div  className="form-outline mb-4">
                                            <input type="text" className="form-control form-control-lg"  placeholder='Full Name'/>
                                        </div>

                                        <div  class="form-outline mb-4 d-flex flex-direction-row">
                                            <input type="email" className="form-control form-control-lg" placeholder='E - Mail' />
                                            <input type="text" className="form-control form-control-lg" placeholder='Contact Number'/>
                                        </div>

                                        <div  class="form-outline mb-4">
                                            <input type="password"  className="form-control form-control-lg" placeholder='Passowrd'/>
                                        </div>

                                        <div  className="form-outline mb-4">
                                            <input type="password"  className="form-control form-control-lg" placeholder='Confirem Passowrd' />
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            <label className="form-check-label">
                                                I agree to the terms and condition
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className='form-control create_accout_btn' onClick={clickFunction}>Create account</button>
                                        </div>

                                        <div className='text-center mt-3'>
                                            <p><span style={{textDecoration: 'line-between'}}>OR</span></p>
                                        </div>

                                        <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="#!"
                                            className="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;