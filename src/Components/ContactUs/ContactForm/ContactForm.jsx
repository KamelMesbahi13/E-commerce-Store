import React from 'react';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';


const ContactForm = () => {
    return (
        <>
            <div className='relative before:content-[""] before:hidden before:lg:block before:absolute before:w-[2px] before:h-[75%] before:bg-second-color before:left-1/2 before:-translate-x-1/2 before:top-[60%] before:-translate-y-1/2'>
                <div className="container">
                    <div className='text-center mt-8'>
                        <h6>We'd Love To Hear From You</h6>
                        <h1 className='lg:text-6xl'>Stay Connected</h1>
                    </div>
                    <div className='mt-12 lg:mt-20'>
                        <div className='flex flex-col items-center lg:flex-row justify-between'>
                            <div className='relative w-full lg:w-[45%] before:content-[""] before:absolute before:w-4 before:h-full'>
                                <h4 className='text-3xl mb-8'>Message</h4>
                                <form className='text-main-color'>
                                    <div className='flex flex-col lg:flex-row mb-0 lg:mb-8'>
                                        <div>
                                            <label className='text-second-color mr-4 lg:mr-0' htmlFor="email">Email</label>
                                            <input className='mr-4 lg:ml-2 focus:outline-none pl-1' type="email" name="email" id="email" />
                                        </div>
                                        <div className='my-8 lg:my-0'>
                                            <label className='text-second-color mr-4 lg:mr-0' htmlFor="password">Password</label>
                                            <input className='mr-4 lg:ml-2 focus:outline-none pl-1' type="password" name="password" id="password" />
                                        </div>
                                    </div>
                                    <textarea className='focus:outline-none pl-1' name="message" id="message" cols="30" rows="5" placeholder='Message'></textarea>
                                </form>
                                <button className='w-full'>Submit</button>
                                <div className='mt-8 lg:mt-16'>
                                    <div className='flex items-center'>
                                        <i><GoLocation className='mr-4 text-2xl' /></i>
                                        <h5 className='text-base md:text-xl'> 10478 Boumerdes, Boumerdes</h5>
                                    </div>

                                    <div className='flex items-center my-8'>
                                        <i><BsPhone className='mr-4 text-2xl' /></i>
                                        <h5 className='text-base md:text-xl'>0540/42/59/69</h5>
                                    </div>

                                    <div className='flex items-center'>
                                        <i><GoMail className='mr-4 text-2xl' /></i>
                                        <h5 className='text-base md:text-xl'>info@gmail.com</h5>
                                    </div>
                                    <div className='mt-12'>
                                        <h2 className='my-4 text-3xl'>Our Social Media:</h2>
                                        <div className='flex items-center'>
                                            <a href="https://web.facebook.com/kamel.136.km" target='__blanc'><AiOutlineFacebook className='text-xl duration-200 hover:text-[#3b5998]' /></a>
                                            <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineInstagram className='text-xl mx-2 duration-200 hover:text-[#cd486b]' /></a>
                                            <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineTwitter className='text-xl duration-200 hover:text-[#cd486b]' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:text-center w-full lg:w-[45%] my-16'>
                                <h4 className='text-3xl mb-8'>Visit</h4>
                                <div>
                                    <div className='my-4'>
                                        <h4 className='mb-2 text-2xl'>LOCATION NAME</h4>
                                        <h2>350000 Boumerdes, Boumerdes. ALGERIA</h2>
                                    </div>
                                    <div className='lg:textCenter'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25572.32222867656!2d3.4916869999999998!3d36.7576044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e68dcc89e5b23%3A0x84e914279405eb13!2sBoumerdes!5e0!3m2!1sen!2sdz!4v1666627661136!5m2!1sen!2sdz" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                                <div>
                                    <div className='my-4'>
                                        <h4 className='mb-2 text-2xl'>LOCATION NAME</h4>
                                        <h2>16000 Alger, Alger. ALGERIA</h2>
                                    </div>
                                    <div className='lg:textCenter'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25569.22526302671!2d3.044621307708861!3d36.76689309599256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f877796ffd%3A0x62ac3794efff79ca!2sEl%20Djazair!5e0!3m2!1sen!2sdz!4v1666631427851!5m2!1sen!2sdz" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                                    
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

export default ContactForm