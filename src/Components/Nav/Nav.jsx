import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import Login from './Login/Login';


const Nav = () => {
    const [nav, setNav] = useState(true);
    const [login, setLogin] = useState(false);


    const navHandle = () => {
        setNav(!nav)
    }

    const loginHandle = () => {
        setLogin(!login)
    }

    return (
        <>
            <div className='z-10 w-full relative bg-[#0009] py-3'>
                { login && <Login loginHandle={loginHandle} />}
                <div className="container">
                    <div className='flex justify-between py-1 overflow-hidden'>
                        <div>
                            <h1 className='hidden md:block md:text-2xl'>FashionHub</h1>
                        </div>
                        <div className='hidden md:ml-16 md:flex'>
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/services'>Services</Link>
                            <Link className='nav-link' to='/men'>Men</Link>
                            <Link className='nav-link' to='/women'>Women</Link>
                            <Link className='nav-link' to='/about'>About</Link>
                            <Link to='/contactus' className='nav-link'>Contact Us</Link>
                        </div>
                        <div className='hidden md:flex'>
                            <span className='text-2xl cursor-pointer'><AiOutlineSearch /></span>
                            <span onClick={loginHandle} className='text-2xl cursor-pointer ml-4'><BsPerson /></span>
                        </div>
                        <div className='md:hidden'>
                            <div className=' cursor-pointer'>
                                { nav ? <AiOutlineMenu className='text-2xl' onClick={navHandle} /> : <AiOutlineClose className='text-2xl' onClick={navHandle}  /> }
                            </div>
                            <div className={nav ? 'absolute duration-500 right-[110%] p-4 text-center w-full h-[150vh]' : 'absolute text-center duration-500 right-[0%] w-full bg-[#000000c2] h-[150vh] p-4'}>
                                <div>
                                    <div>
                                        <h1 className='md:hidden text-2xl mb-4'>SaleHub</h1>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/'>Home</Link>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/services'>Services</Link>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/men'>Men</Link>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/women'>Women</Link>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/about'>About</Link>
                                        <Link className='nav-link-sm' onClick={navHandle} to='/contactus' >Contact Us</Link>
                                    </div>
                                    <div className='flex md:hidden'>
                                        <span className='text-2xl cursor-pointer'><AiOutlineSearch /></span>
                                        <span onClick={loginHandle} className='text-2xl cursor-pointer ml-4'><BsPerson /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav