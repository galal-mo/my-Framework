import React from 'react'
import homeImg from '../Home/homeimg.svg'
import '../css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function Home() {
    return <>
        <div className="homebg d-flex justify-content-center align-items-center text-white py-5 hight topping">
            <div className="text-center">
                <img src={homeImg} className='w-75' alt='' />
                <div className="text-center pt-4">
                    <h2 className="mb-3 fs-1 fw-bolder">START FRAMEWORK</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                    <div className='text-center mt-3 pb-5'>
                            Graphic Artist - Web Designer - Illustrator
                        </div>
                </div>
            </div>  
        </div>
    </>
}



