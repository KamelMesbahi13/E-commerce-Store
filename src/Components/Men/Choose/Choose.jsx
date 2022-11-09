import React, { useState, useEffect } from 'react';
import Img from '../../../assets/Man2.jpg';


const Choose = () => {

    const [windowValue, setWindowValue] = useState(false);
    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 410) {
            setWindowValue(true)
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", activeClass)
        return (
            window.removeEventListener("scroll", activeClass)
        )
    },[])

    return (
        <>
            <div className='overflow-hidden mt-12'>
                <div className='flex flex-col items-center sm:flex-row'>
                    <div className="container">
                        <div className={windowValue ? 'md:w-[70%] ActiveLeft' : 'NoneActiveLeft' }>
                            <h6>Special Products Here..</h6>
                            <h1 className='my-4'>Why Choose Us</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus suscipit aperiam voluptates ab assumenda, officiis, est nihil rerum inventore atque aspernatur iusto mollitia vel! Modi quidem adipisci architecto id.</p>
                            <a href="#"><button>See More</button></a>
                        </div>

                    </div>
                    <div className={windowValue ? 'mt-4 md:mt-0 md:w-1/2 ActiveRight' : 'NoneActiveRight' }>
                        <img className='mt-4 md:mt-0 h-[50vh] md:h-full' src={Img} alt="Img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose