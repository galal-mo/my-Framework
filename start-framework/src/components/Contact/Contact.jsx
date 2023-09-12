import React, { useRef, useState } from 'react'
import $, { event } from 'jquery'

export default function Contact() {
    const nameref = useRef(null);
    let tomovename = (name) => {
        name != "" ? $(".nameSpan").animate({ top: 0 }, 200) : $(".nameSpan").animate({ top: 30 }, 200)
    }
    const nameChange = (theRef) => {
        // console.log(theRef.current.value);
        tomovename(theRef.current.value)
    }
    const ageref = useRef(null);
    let tomoveage = (name) => {
        name != "" ? $(".ageSpan").animate({ top: 0 }, 200) : $(".ageSpan").animate({ top: 30 }, 200)
    }
    const ageChange = (theRef) => {
        console.log(theRef.current.value);
        tomoveage(theRef.current.value)
    }
    const emailref = useRef(null);
    let tomovemail = (name) => {
        name != "" ? $(".emailSpan").animate({ top: 0 }, 200) : $(".emailSpan").animate({ top: 30 }, 200)
    }
    const emailChange = (theRef) => {
        console.log(theRef.current.value);
        tomovemail(theRef.current.value)
    }

    const passref = useRef(null);
    let tomovepass = (name) => {
        name != "" ? $(".passSpan").animate({ top: 0 }, 200) : $(".passSpan").animate({ top: 30 }, 200)
    }
    const passChange = (theRef) => {
        console.log(theRef.current.value);
        tomovepass(theRef.current.value)
    }


    return <>
        <title>Portofolio</title>
        <div className="text-center pt-4 p-5 topping">
            <h2 className="mb-3 fs-1 fw-bolder color">CONATCT SECTION</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line forbgcolor me-3"></div>
                <i className="fa-solid color fa-star"></i>
                <div className="line forbgcolor ms-3"></div>
            </div>
        </div>
        <div className="container w-50">
            <div className="row">
                <div className="col-sm-12 mt-5">
                    <div className='postiosn-relative'>
                        <div className='forMoves'>
                            <span className='nameSpan'>userName:</span>
                        </div>
                        <div className="text-center z-2">
                            <input type="text" ref={nameref} onKeyUp={() => nameChange(nameref)} id='Uname' placeholder='userName' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-5">
                    <div className='postiosn-relative'>
                        <div className='forMoves'>
                            <span className='ageSpan'>userAge:</span>
                        </div>
                        <div className="text-center">
                            <input type="number" name='Uage' ref={ageref} onKeyUp={() => ageChange(ageref)} placeholder='userAge' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-5">
                    <div className='postiosn-relative'>
                        <div className='forMoves'>
                            <span className='emailSpan'>userEmail:</span>
                        </div>
                        <div className="text-center">
                            <input type="email" name='Uemail' ref={emailref} onKeyUp={() => emailChange(emailref)} placeholder='userEmail' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-5">
                <div className='postiosn-relative'>
                        <div className='forMoves'>
                            <span className='passSpan'>userPassword:</span>
                        </div>
                        <div className="text-center">
                        <input type="password" name='Upass' ref={passref} onKeyUp={() => passChange(passref)} placeholder='userPassword' className='form-control' />
                    </div>
                    </div>
                    
                </div>
            </div>
            <button className='btn myBtn mt-3 mb-5'>send Message</button>
        </div>
    </>
}
