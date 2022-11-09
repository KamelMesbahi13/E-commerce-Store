import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ModalStyle.css";
import Img from '../../../assets/Modal.jpg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const overlayVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.3,
                delayChildren: 0.4
            }
        },

        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.3,
                delay: 0.4
            }
        }
    };

    useEffect(() => {
        setModalIsOpen(true)
    }, [])
    

    return (
        <div className="App">
        <AnimatePresence>
            { modalIsOpen && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={ overlayVariants }
                className="modal-overlay"
            >
                <motion.div
                    className="modal"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.5 }}
                    >
                    <div className="modal-header">
                        <div className="modal-title">
                            <img className="h-[20vh] lg:h-[45vh] w-full" src={Img} alt="" />
                        </div>
                    </div>
                    <div className="modal-content">
                        <div>
                            <h6>NEWSLETTER</h6>
                            <p className="text-xs">Receive Our Weekly Newsletters. <br />For Dietary Content, FashionHub Provides The Best Offers</p>
                        </div>
                        <div className="mt-4">
                            <form>
                                <input placeholder="Enter Your Email Address" className="border-b-[1px] border-b-third-color focus:outline-none pl-1" type="text" name="" id="" />
                            </form>
                            <a href="#"><button className="text-second-color px-[3.8rem]">Subscribe</button></a>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <a href="https://web.facebook.com/kamel.136.km" target='__blanc'><AiOutlineFacebook className='text-xl mr-2 duration-200 hover:text-[#3b5998]' /></a>
                            <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineInstagram className='text-xl mr-2 duration-200 hover:text-[#cd486b]' /></a>
                            <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineTwitter className='text-xl mr-2 duration-200 hover:text-[#3b5998]' /></a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a
                        className="modal-button"
                        onClick={() => setModalIsOpen(false)}
                        >
                        Close
                        </a>
                    </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}

export default Modal;