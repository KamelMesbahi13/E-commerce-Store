import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div name="header" className='header-back-women h-[70vh] md:h-[110vh] text-main-color-women'>
                <div className="container">
                    <div>
                        <div className='absolute top-1/3'>
                            <h6 className='mb-2'>Special Collection</h6>
                            <h1>Discover Women's <br /> Latest Fashion</h1>
                            <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eveniet, molestias. Adipisci, quod omnis? Officia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header