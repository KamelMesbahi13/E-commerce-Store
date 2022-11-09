import React, { useState, useEffect } from 'react';
import Img from '../../../assets/Women13.jpg';


const Unique = () => {

    const [windowValue, setWindowValue] = useState(false);
    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 815) {
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
            <div className='overflow-hidden mt-28'>
                <div className='flex flex-col items-center sm:flex-row'>
                    <div className="container">
                        <div className={windowValue ? 'sm:w-[70%] ActiveLeft' : 'NoneActiveLeft' }>
                            <h6>Unique Products Here..</h6>
                            <h1 className='my-4'>True Unique Style</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus suscipit aperiam voluptates ab assumenda, officiis, est nihil rerum inventore atque aspernatur iusto mollitia vel! Modi quidem adipisci architecto id.</p>
                            <a href="#"><button className='bg-third-color-women border-none hover:bg-[#ffa8a8]'>See More</button></a>
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

export default Unique;