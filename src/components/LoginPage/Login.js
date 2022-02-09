import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login-container'>
<div className="login-div">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="title">CAMPUS QUORA </div>
        <div className="subtitle">
            <p>BETA</p>
        </div>
        <div className="login-options">
            <div className="heading">
                <h1>Sign in with</h1>
            </div>
            <div className="buttons">
                <div className="social-links">
                    <div>
                      <a href="#"><i className=" icon fa fa-google" aria-hidden="true"></i></a>
                    </div>
                    <div>
                      <a href="#"><i className=" icon fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    <div>
                      <a href="#"><i className=" icon fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                  </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Login