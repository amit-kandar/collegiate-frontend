import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer-bg-img-container">
                    <img src={require("./images//shape-1.svg")} alt="" className="footer-bg-img-1" />
                    <img src={require("./images//shape-3.svg")} alt="" className="footer-bg-img-2" />
                </div>

                <div className="footer-container container">
                    <div className="footer-details-container">
                        <div className="footer-details-card-container">
                            <div className="footer-details-card-item card-1">
                                <div className="logo" style={{ marginRight: 0, marginBottom: "40px" }}>
                                    <Link to="/">
                                        <img src={require('./images/logo.png')} alt="logo"/>
                                    </Link>
                                </div>
                                <p>We create digital experiences for brands and companies by using technology.</p>
                                <div className="footer-contact-container">
                                    <div className="facebook" style={{ marginLeft: 0 }}>
                                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="twitter">
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="instagram">
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                    <div className="linkedin">
                                        <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-details-card-item card-2">
                                <h4>About Us</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Features</li>
                                    <li>About</li>
                                    <li>Testemonials</li>
                                </ul>
                            </div>
                            <div className="footer-details-card-item card-3">
                                <h4>Features</h4>
                                <ul>
                                    <li>How its work</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Services</li>
                                    <li>Our Vission</li>
                                </ul>
                            </div>
                            <div className="footer-details-card-item card-4">
                                <h4>Sponsors</h4>
                                <div className="sponsors-container">
                                    <div className="right-side-sponsors">
                                        <ul>
                                            <li><a href="/"><img src={require("./images/no-photo-available.png")} alt="" /></a></li>
                                            <li><a href="/"><img src={require("./images/1454.png")} alt="" /></a></li>
                                            <li><a href="/"><img src={require("./images/no-photo-available.png")} alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="left-side-sponsors">
                                        <ul>
                                            <li><a href="/"><img src={require("./images/no-photo-available.png")} alt="" /></a></li>
                                            <li><a href="/"><img src={require("./images/no-photo-available.png")} alt="" /></a></li>
                                            <li><a href="/"><img src={require("./images/no-photo-available.png")} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-footer-container">
                    <div className="lower-footer-details-container container">
                        <div className="lower-footer-details">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Legal Notice</a>
                            <a href="/">Terms of Services</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer