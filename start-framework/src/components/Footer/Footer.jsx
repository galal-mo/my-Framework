import React from 'react'
import '../css/style.css'

export default function Footer() {
    return <>
    <title>Home</title>
        <div className="colorNavFooter  pt-5 pb-2">
            <div className="container p-5">
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card text-center bg-transparent border-0 text-white">
                            <div className="card-body">
                                <h3 className="card-title">LOCATION</h3>
                                <p className="card-text">2215 John Daniel Drive</p>
                                <p className="card-text">Clark, MO 65243</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center bg-transparent border-0 text-white">
                            <div className="card-body">
                                <h3 className="card-title">AROUND THE WEB</h3>
                                <div className="icons">
                                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                                    <i className="fa-solid fa-globe mx-1 icon"></i>
                                </div>                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card text-center bg-transparent border-0 text-white">
                            <div className="card-body">
                                <h3 className="card-title">ABOUT FREELANCER</h3>
                                <p className="card-text">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12 footer py-3">
            <p className='text-center text-white'>Copyright © Your Website 2021</p>
        </div>
    </>
}
