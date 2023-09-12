import React from 'react'
import '../css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function About() {
    return <>
        <title>about</title>
        <div className="homebg d-flex justify-content-center align-items-center text-white py-5 hight topping">
            <div className="container">
                <div className="text-center pt-4">
                    <h2 className="mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                </div>
            </div>
        </div >
    </>
}
