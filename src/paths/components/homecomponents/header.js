import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../register/context/AuthProvider';

const Header = () => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn")
    const { setAuth } = useContext(AuthContext);
    const logout = async () => {
        setAuth({});
        window.localStorage.setItem("isLoggedIn", "false");
    }
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link to="/">The Waste that World Needs</Link></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                    <nav id="navbar" className="navbar">
                        <ul>
                            {isLoggedIn === "false" ?
                                <li><Link className="getstarted scrollto" to="SignIn">Sign Up</Link></li> :
                                <li><Link className="getstarted scrollto" to="" onClick={logout}>Sign Out</Link></li>}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    )
}

export default Header