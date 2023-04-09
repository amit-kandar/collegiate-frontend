import React from 'react'

function About() {
    return (
        <>
            <section id="about" className="about container">
                <div className="about-container">
                    <div className="about-container-details">
                        <span>About Us</span>
                        <h1>Brilliant Toolkit to Build Nextgen Website Faster.</h1>
                        <p>The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable
                            business applications with interactive panel discussions and roundtables led by subject matter
                            experts.</p>
                        <p>The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable
                            business applications with interactive panel.</p>
                        <a href="/">Learn More</a>
                    </div>
                    <div className="about-container-img">
                        <img src={require("./images/about-image.jpg")} alt="" className="about-img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About