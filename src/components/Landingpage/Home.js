import React from 'react'
import Features from './Features'
import About from './About'
import Faq from './Faq'
import Testemonials from './Testemonials'
import Team from './Team'
import Contact from './Contact'

function Home() {
    return (
        <>
            <section id="home" className="home container">
                <div className="home-container">
                    <div className="hero-title">
                        <h1>Open-Source Web Template for SaaS, Startup, Apps, and More</h1>
                        <p>Multidisciplinary Web Template Built with Your Favourite Tchnology - HTML Bootstrap, Tailwind and
                            React NextJS.</p>
                    </div>
                    <div className="hero-img">
                        <img src={require('./images/Social-Book.png')} alt="" />
                    </div>
                </div>
            </section>
            <Features/>
            <About/>
            <Faq/>
            <Testemonials/>
            <Team/>
            <Contact/>
        </>
    )
}

export default Home