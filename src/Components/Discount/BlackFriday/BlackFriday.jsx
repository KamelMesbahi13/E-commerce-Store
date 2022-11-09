import React from 'react'

const BlackFriday = () => {
    return (
        <>
            <div className='bg-second-color text-main-color'>
                <div className='flex justify-between items-center'>
                    <div className="container">
                        <div>
                            <h1 className='text-4xl md:text-6xl'>Black Friday Discount</h1>
                            <h5 className='mt-4 text-2xl font-bold'>Limited Time Offer</h5>
                        </div>
                    </div>
                    <div className='bg-third-color'>
                        <h1 className='text-[3rem] md:text-[7rem] p-8 font-sans font-bold text-second-color'>80% <br /> OFF</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlackFriday