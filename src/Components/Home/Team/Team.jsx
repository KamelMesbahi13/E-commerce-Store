import React, { useState, useEffect } from 'react';
import Img from '../../../assets/Women3.jpg';
import Data from './TeamData';

const Team = () => {

    const [windowValue, setWindowValue] = useState(false);
    const [windowValuePic, setWindowValuePic] = useState(false);

    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 3220) {
            setWindowValue(true)
        }
    })

    const activeClassPic = window.addEventListener('scroll', () => {
        if (window.scrollY > 3720) {
            setWindowValuePic(true)
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", activeClass)
        return (
            window.removeEventListener("scroll", activeClass)
        )
    },[])

    useEffect(() => {
        window.addEventListener("scroll", activeClassPic)
        return (
            window.removeEventListener("scroll", activeClassPic)
        )
    },[])

    return (
        <>
            <div className='mt-8 overflow-hidden relative pb-4'>
                <div className="container">
                    <div className='flex flex-col-reverse items-center sm:flex-row'>
                        <div className={windowValue ? 'w-full mt-8 md:mt-0 mr-0 sm:mr-12 sm:w-9/12 ActiveLeft' : 'NoneActiveLeft'}>
                            <h6>Our Special Team</h6>
                            <h1 className='my-4'>Meet Our Team</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dicta dolore officiis eos ipsa magni iusto minus repudiandae fugit recusandae, pariatur incidunt modi earum id nostrum aliquid animi necessitatibus vel!</p>
                        </div>
                        <div className={windowValue ? 'ActiveRight' : 'NoneActiveRight'}>
                            <img src={Img} alt="Img One" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            Data.map(({img, alt, name, job}, i) => {
                                return (
                                    <div key={i} className={windowValuePic ? 'transition-all duration-700 opacity-100' : 'opacity-0' }>
                                        <div className='relative overflow-hidden'>
                                            <img className='lg:h-[55vh] transition-all duration-1000 hover:scale-110' src={img} alt={alt} />
                                        </div>
                                        <div className='relative w-full text-center py-2 bg-second-color text-main-color'>
                                            <h3 className='font-bold text-xl'>{name}</h3>
                                            <h3>{job}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team