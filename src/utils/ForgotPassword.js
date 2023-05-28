import axios from "../api/axios"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [showAlert, setShowAlert] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState('');
    const handleSignup = () => {
        setShowAlert('')
        setErrMsg('')
        let body = {
            email: email,
        }
        axios.post('account/user/reset-password/email/', body)
            .then(res => {
                setShowAlert("We have sent you an email to reset your password. Please check your inbox.")
            }).catch(err => {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg(err.response?.data.Error);
                }
                console.log(errMsg, 'errMcg')
            })
    }
    return (
        <div className="body-2">
            <section>
                <div className="container">
                    <div className="container-center">
                        <h2 className="text-black">Don't Worry!</h2>
                        <form action="" style={{backgroundColor: "honeydew"}}>
                            <h4>
                                Just provide your email<br />
                                and we will do the rest
                            </h4>
                            <div className={errMsg ? "alert alert-danger alert-dismissible fade show" : "offscreen"}>
                                {errMsg}
                                <button type="button" className={errMsg ? "btn-close" : "d-none"} onClick={() => setErrMsg('')}></button>
                            </div>
                            <div className={showAlert ? "alert alert-info alert-dismissible fade show" : "offscreen"}>
                                {showAlert}
                                <button type="button" className={showAlert ? "btn-close" : "d-none"} onClick={() => setShowAlert('')}></button>
                            </div>

                            <formgroup>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <label htmlFor="email"><br />Email</label>
                                <span>enter your email</span>
                            </formgroup>
                            <button className="px-5" type="button" onClick={handleSignup}>NEXT</button>
                        </form>

                        <p className="text-black">Did you remember? <Link to="/SignIn">Sign In</Link></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword