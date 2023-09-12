import React, { useEffect, useRef, useState } from 'react'
import '../css/style.css'
import { Link, useLocation } from 'react-router-dom'
import $ from 'jquery'
export default function Navbar() {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    // window.onscroll = function() {scrollFunction()};
    const [navcahnge, setnavchange] = useState(false);
    function scrollFunction(){
        if (window.scrollY >= 17) {
            setnavchange(true)
        }
        else {
            setnavchange(false);
        }
    }
    window.addEventListener("scroll",scrollFunction)
    return <>
        <nav className={navcahnge ? "navbar navbar-expand-lg colorNavFooter fixed-top":"navbar navbar-expand-lg colorNavFooter fixed-top py-4"}>
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bolder text-white" to="">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <Link className={ (url === "/About" ?" myActive nav-link rounded-3 text-white fw-bold" : "nav-link rounded-3 text-white fw-bold")} to="About">ABOUT</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className={ (url === "/Portofolio" ?" myActive nav-link rounded-3 text-white fw-bold" : "nav-link rounded-3 text-white fw-bold")} to="Portofolio">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item me-3">
                                <Link className={ (url === "/Contact" ?" myActive nav-link rounded-3 text-white fw-bold" : "nav-link rounded-3 text-white fw-bold")} to="Contact">CONTACT</Link>
                            </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
}
