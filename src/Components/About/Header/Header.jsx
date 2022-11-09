import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div name="header" className='about-header-back h-[70vh] md:h-[100vh]'>
                <div className="container">
                    <div>
                        <div className='absolute top-[20%] md:top-1/3'>
                            <h6 className='mb-2'>About Us</h6>
                            <h1>Get To Know Better Our <br /> Store And Our Product</h1>
                            <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eveniet, molestias. Adipisci, quod omnis? Officia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header