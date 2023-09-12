import React from 'react'
import { useRef } from 'react';
import '../css/style.css'
import img1 from '../Port/imags/poert1.png'
import img2 from '../Port/imags/port2.png'
import img3 from '../Port/imags/port3.png'
import $ from 'jquery'


export default function Port() {
    let Close = useRef(null);
    function done() {
        $('#imgContainer').css("display", "none")
    }

    const open =(img)=>{
        console.log();
        $('#imgContainer').css("display", "flex")
        $('.imgitem').css("background-image", `url(${img})`)
        
    }
    return <>
    <title>Portofolio</title>
        <div className="text-center pt-4 p-5 topping">
            <h2 className="mb-3 fs-1 fw-bolder color">PORTFOLIO COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line forbgcolor me-3"></div>
                <i className="fa-solid color fa-star"></i>
                <div className="line forbgcolor ms-3"></div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className='position-relative forhover'>
                            <img  src={img1} className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img1)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className='position-relative forhover'>
                            <img src={img2}   className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img2)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='position-relative forhover'>
                            <img src={img3}  className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img3)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='position-relative forhover'>
                            <img src={img1}  className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img1)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='position-relative forhover'>
                            <img src={img2}  className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img2)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className='position-relative forhover'>
                            <img src={img3}   className='w-100 rounded' alt="" />
                            <div className='overlay rounded' onClick={()=>{open(img3)}}>
                                <i className="fa-solid fa-plus text-white fw-bold fs"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="imgContainer" ref={Close} onClick={done}>
            <div className="imgitem">

            </div>
        </div>
    </>
}
