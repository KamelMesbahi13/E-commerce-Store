import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div name="header" className='header-back-services h-[70vh] md:h-[110vh]'>
                <div className="container">
                    <div>
                        <div className='absolute top-1/3'>
                            <h6 className='mb-2'>Our Services</h6>
                            <h1>Modern Clothes & <br /> Fashion Store</h1>
                            <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eveniet, molestias. Adipisci, quod omnis? Officia.</p>
                            <a href="/contactus"><button>Contact Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header