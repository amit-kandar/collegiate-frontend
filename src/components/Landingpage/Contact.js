import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Contact() {

    const host = "http://localhost:5001"

    const [credential, setCredential] = useState({ name: "", email: "", phone: "", message: "" })
    const [phoneNumber, setPhoneNumber] = useState("")
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/v1/public/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credential.name, email: credential.email, phone: phoneNumber, message: credential.message })
        });

        const json = await response.json();
        console.log(json);
        if (json.success) {
            navigate('/feedback/submitted')
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <>
            <section id="contact" className="contact">
                <div className="contact-container-bg"></div>
                <div className="contact-container container">
                    <div className="contact-container-items">
                        <div className="contact-left-side-items">
                            <div className="upper-items">
                                <h3>Contact Us</h3>
                                <h1>Let's talk about
                                    <br />
                                    Love to hear from you!
                                </h1>
                            </div>
                            <div className="lower-items">
                                <div className="location">
                                    <div className="location-icon icon">
                                        <i className="uil uil-location-point"></i>
                                    </div>
                                    <div className="location-details">
                                        <h5>Our Location</h5>
                                        <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                                    </div>
                                </div>
                                <div className="email">
                                    <div className="email-icon icon">
                                        <i className="uil uil-envelope"></i>
                                    </div>
                                    <div className="email-details">
                                        <h5>How Can We Improve?</h5>
                                        <p>info@yourdomain.com contact@yourdomain.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right-side-items">
                            <div className="contact-form">
                                <h3>Send us a Message</h3>
                                <form>
                                    <div className="form-items">
                                        <label htmlFor="fullname">Full Name*</label>
                                        <input className='contact-input' type="text" name="name" id="fullname" placeholder="Adam Gelius" value={credential.name} onChange={onChange} required />
                                    </div>
                                    <div className="form-items">
                                        <label htmlFor="email">Email*</label>
                                        <input className='contact-input' type="text" name="email" id="email" placeholder="example@yourmail.com" value={credential.email} onChange={onChange} required />
                                    </div>
                                    <div className="form-items">
                                        <PhoneInput
                                            country={'in'}
                                            value={phoneNumber}
                                            placeholder="Enter phone number"
                                            onChange={setPhoneNumber} />
                                    </div>
                                    <div className="form-items">
                                        <label htmlFor="message">Message*</label>
                                        <textarea name="message" id="message" cols="30" rows="4" value={credential.message} onChange={onChange} required ></textarea>
                                    </div>
                                    <input type="submit" value="Send Message" className='button' onClick={handleSubmit} />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact