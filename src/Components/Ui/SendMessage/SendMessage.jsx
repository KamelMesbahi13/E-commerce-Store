import React from 'react'

const SendMessage = () => {
    return (
        <>
            <div className='bg-second-color text-main-color py-20 '>
                <div className="container">
                    <div className='flex flex-col md:flex-row justify-between text-center md:text-left'>
                        <div className='md:w-1/2 mb-8'>
                            <div className='mb-4'>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl mb-4 '>Do You Have A Problem ? Send Us A Message And Our Team Will Help You</h1>
                                <h5>We'll Email You As Soon As Possible</h5>
                            </div>
                            <div>
                                <input className='border-b-[1px] py-2 border border-third-color focus:outline-none pl-1' type="text" />
                                <button>Send</button>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl '>Need Help? <br /> 0540/42/59/69</h1>
                            <h5>We Are Available 8:00am - 7:00pm</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendMessage