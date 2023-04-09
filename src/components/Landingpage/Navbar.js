import React, { useState,useEffect } from "react"
import './CSS/Main.css'
import logo from './images/logo.png'
import darkLogo from './images/Dark-logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const [image, setImage] = useState(false)

    useEffect(() => {
        window.onscroll = function () {
            const navbar = document.querySelector(".nav-bar")
            const signup = document.querySelector(".active")
            const signin = document.querySelector(".sign-in")
            const menu = document.querySelectorAll(".menu div")
            const menubar = document.querySelector(".nav-items")
            const newmenubar = document.querySelector(".left-side ul")

            if (window.pageYOffset < 400) {
                document.querySelector(".backtotop").style.display = "None"
            } else {
                document.querySelector(".backtotop").style.display = "flex"
            }

            if (window.pageYOffset > 30) {
                setImage(true)
                navbar.classList.add("sticky")
                document.querySelectorAll(".nav-links").forEach((e) => {
                    e.classList.add("nav-links-a")
                })
                signup.classList.add("sign-up")
                signin.classList.add("signin")
                menu.forEach(div => {
                    div.style.backgroundColor = "#3056d3"
                })
                if (window.innerWidth <= 640) {
                    menubar.style.backgroundColor = "#fff"
                } else if (window.innerWidth >= 641 && window.innerWidth <= 1007) {
                    newmenubar.style.backgroundColor = "#fff"
                }
            } else {
                setImage(false)
                navbar.classList.remove("sticky")
                document.querySelectorAll(".nav-links").forEach((e) => {
                    e.classList.remove("nav-links-a")
                })
                signup.classList.remove("sign-up")
                signin.classList.remove("signin")
                menu.forEach(div => {
                    div.style.backgroundColor = "#fff"
                })
                if (window.innerWidth <= 640) {
                    menubar.style.backgroundColor = "#3056d3"
                } else if (window.innerWidth >= 641 && window.innerWidth <= 1007) {
                    newmenubar.style.backgroundColor = "#3056d3"
                }
            }
        }
    })

    const [isMobile, setIsMobile] = useState(false)
    const [isPad, setIsPad] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const navslide = () => {
        let navHeight = document.querySelector("nav").clientHeight
        let bodyHeight = window.innerHeight
        let navBodyHeight = bodyHeight - navHeight

        // Small Screen
        if (window.innerWidth <= 640) {

            if (document.querySelector(".nav-items").classList.value === "nav-items nav-active") {
                setIsMobile(false)
                setIsActive(false)
                setTimeout(() => {
                    document.querySelector(".nav-items").style.top = "0"
                    document.querySelector(".nav-items").style.height = "0"
                }, 500);
            } else if (document.querySelector(".nav-items").classList.value === "nav-items") {
                setIsMobile(true)
                setIsActive(true)
                document.querySelector(".nav-items").style.height = `${navBodyHeight}px`
                document.querySelector(".nav-items").style.top = `${navHeight}px`
            }
        }

        // Medium Screen
        else if (window.innerWidth >= 641 && window.innerWidth <= 1007) {

            if (document.querySelector(".left-side ul").classList.value === "nav-active") {
                setIsPad(false)
                setIsActive(false)
                setTimeout(() => {
                    document.querySelector(".left-side ul").style.top = "0"
                    document.querySelector(".left-side ul").style.height = "0"
                }, 500);
            } else {
                setIsPad(true)
                setIsActive(true)
                document.querySelector(".left-side ul").style.height = `${navBodyHeight}px`
                document.querySelector(".left-side ul").style.top = `${navHeight}px`
            }
        }
    }

    return (
        <>
            <nav className="nav-bar" id="nav">
                <div className="logo">
                    <Link to="/">
                        <img src={image? darkLogo: logo} alt="logo" id="brand-logo" />
                    </Link>
                </div>
                <div className={isMobile ? "nav-items nav-active" : "nav-items"}>
                    <div className="left-side">
                        <ul className={isPad ? "nav-active" : ""}>
                            <li className="nav-links" id="home"><Link to="/">Home</Link></li>
                            <li className="nav-links" id="about"><Link to="/about">About</Link></li>
                            <li className="nav-links" id="team"><Link to="/team">Team</Link></li>
                            <li className="nav-links" id="contact"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <Link to="/signin" className="sign-in">Sign In</Link>
                        <Link to="/signup" className="active">Sign Up</Link>
                    </div>
                </div>
                <div className={isActive ? "menu toggle" : "menu"} onClick={navslide}>
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                    <div className="bar-3"></div>
                </div>
            </nav>

            <a href="#home" className="backtotop">
                <span className="line1"></span>
                <span className="line2"></span>
            </a>
        </>
    );
}
