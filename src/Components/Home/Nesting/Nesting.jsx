import React from 'react';
import './Nesting.css'
import { MdPayment, MdOutlineLocalShipping, MdAttachMoney } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai'

const Nesting = () => {
    return (
        <>
            <div className='mt-16'>
                <div className="container">
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4'>
                            <div className='flex mr-4 md:mr-0'>
                                <p className='text-4xl mr-4'><MdAttachMoney /></p>
                                <div>
                                    <h6>Money Guarantee</h6>
                                    <p>Within 30 Days For An Exchange</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <p className='text-4xl mr-4'><MdOutlineLocalShipping /></p>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>Free Shipping For Orders <br /> Over 130$</p>
                                </div>
                            </div>

                            <div className='flex mt-12 mr-4 md:mr-0 md:mt-0'>
                                <p className='text-4xl mr-4'><AiOutlinePhone /></p>
                                <div>
                                    <h6>Online Support</h6>
                                    <p> Within 30 Days For An Exchange</p>
                                </div>
                            </div>

                            <div className='flex mt-12 md:mt-0'>
                                <p className='text-4xl mr-4'><MdPayment /></p>
                                <div>
                                    <h6>Flexible Payment </h6>
                                    <p>Pay With Multiple Credit Card</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='mt-24 h-[50vh] md:h-[80vh] nestingBack'></div>
            </div>
        </>
    )
}

export default Nesting