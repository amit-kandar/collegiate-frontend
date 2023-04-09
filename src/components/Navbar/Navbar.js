import React from "react"
import './Navbar.css'
import logo from './images/logo.png'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" id="brand-logo" />
          </a>
        </div>
        <div className="left-side">
          <ul>
            <li className="nav-links"><a href="/"><i className="uil uil-home"></i></a></li>
            <li className="nav-links"><a href="/notifications"><i className="uil uil-bell"></i></a></li>
            <li className="nav-links"><a href="/jobs"><i className="uil uil-bag"></i></a></li>
          </ul>
        </div>
        <div className="right-side">
          <div className="nav-user-icon online">
            <img src={require('./images/profile-pic.png')} alt="Profile"/>
          </div>
        </div>
      </nav>
    </>
  );
}
