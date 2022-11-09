import React from 'react';
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'


const Login = ({ loginHandle }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-second-color h-[100vh] relative bottom-[12px]'>
                <div className="container">
                    <div className='text-main-color mb-8'>
                        <div className='text-center py-4'>
                            <h1 className='text-3xl'>Log In</h1>
                        </div>
                        <div className='pt-2'>
                            <span className='text-2xl cursor-pointer float-right' onClick={loginHandle}><AiOutlineClose /></span>
                        </div>

                        <div className='w-1/2 h-[70vh] shadow-xl absolute top-[45%] md:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 '>
                            <div className='md:flex items-center justify-between'>
                                <div className='p-4'>
                                    <div className='flex items-center justify-between mb-6'>
                                        <div>
                                            <h2 className='text-3xl font-bold'>Login</h2>
                                        </div>
                                        <div className='flex'>
                                            <a href="https://web.facebook.com/kamel.136.km" target='__blanc'><AiOutlineFacebook className='text-xl mr-2 duration-200 hover:text-[#3b5998]' /></a>
                                            <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineInstagram className='text-xl mr-2 duration-200 hover:text-[#cd486b]' /></a>
                                        </div>
                                    </div>

                                    <div>
                                        <form>
                                            <input className='border-b-[1px] border-b-third-color focus:outline-none pl-1' placeholder='Email' type="email" /> <br />
                                            <input className='my-4 border-b-[1px] border-b-third-color focus:outline-none pl-1' placeholder='Password' type="password" />
                                        </form>
                                    </div>

                                    <div>
                                        <button className='text-second-color my-4'>Submit</button>
                                    </div>

                                    <div className='flex'>
                                        <div className='flex items-center mr-4'>
                                            <input className='mr-1' type="checkbox" name="remember me" id="" /> <br />
                                            <h5>Remember Me</h5>
                                        </div>
                                        <div>
                                            <a href="#">Forget Password</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-main-color text-center md:p-4 h-[45vh] md:h-[70vh] md:w-1/2 relative text-second-color'>
                                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <h1 className='text-3xl mt-4 md:mt-0 mb-6'>Welcome To Login</h1>
                                        <p className='my-4'>Don't Have An Account ?</p>
                                        <button className='my-4'>Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Login