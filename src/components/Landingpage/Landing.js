import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Features from './Features'
import About from './About'
import Faq from './Faq'
import Testemonials from './Testemonials'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
// import Signin from '../SignIn/Signin'
// import Signup from '../SignUp/Signup'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Submit from './Submit'
import GoogleOneTap from 'google-one-tap'


const options = {
    client_id: "425130832294-v3m9u28e4rg91fjnprjkr3uj2j1eum3k.apps.googleusercontent.com",
    auto_select: false,
    cancel_on_tap_outside: false,    
    context: "signin"
}

function Landing() {

    const [loginData, setLoginData] = useState(
        localStorage.getItem("logindata")
            ? JSON.parse(localStorage.getItem("logindata"))
            : null
    )

    useEffect(() => {
      if(!loginData){
        GoogleOneTap(options, async(response)=>{
            console.log(response);
            const res = await fetch("http://localhost:5001/api/v1/user/auth/google", {
                method: "POST",
                body: JSON.stringify({
                    token: response.credential
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            setLoginData(data);
            localStorage.setItem("logindata", JSON.stringify(data))
        })
      }
    }, [loginData])

    // const handleLogout =()=>{
    //     localStorage.removeItem("logindata")
    //     setLoginData(null)
    // }
    

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feature' element={<Features />} />
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/testemonials' element={<Testemonials />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/signup' element={<Signup />} /> */}
                {/* <Route path='/signin' element={<Signin />} /> */}
                <Route path='/feedback/submitted' element={<Submit />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Landing
