import React from 'react';
import Data from './AboutTeam';

const AboutTeam = () => {

    return (
        <div className='pb-2'>
            <div className='grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    Data.map(({img, alt, name, job}, i) => {
                        return (
                            <div key={i} className='transition-all duration-700 opacity-100'>
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
    )
}

export default AboutTeam