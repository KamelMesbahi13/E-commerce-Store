import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import { fetchData } from '../../Api/Api';
import { Loader } from '../../Home/INDEX';
import { SpecialEdition } from '../INDEX';

const BestSale = () => {

    const [MenCLothes, setMenCLothes] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('')


    useEffect(() => {
        setLoader(true)

        fetchData()
        .then((data) => {
            let MenCLothes = data.data.slice(0, 4);
            setMenCLothes(MenCLothes);
            setLoader(false)

            console.log(MenCLothes);
        }).catch((error) => {
            setLoader(false)
            setError(error.message)
            
        })
    }, [])


    return (
        <>
            <div className='bg-[#fefefe] text-main-color'>
                <div className="container">
                    <div className='text-center py-16'>
                        <h1>Best Sales</h1>
                        <h6 className='mt-4'>Top Sales In This Weekend</h6>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 textCenter gap-12'>
                        <div className='absolute left-1/2 -translate-x-1/2'>
                            { loader && <Loader /> }
                            <h1>{error}</h1>
                        </div>
                        {
                            MenCLothes.map((prop, i) => {
                                return (
                                    <div key={i}>
                                        <div className='shadow-xl p-8 rounded-md md:h-[65vh] md:w-8/12'>
                                            <img className='h-[25vh] md:h-[35vh]' src={prop.image} alt="" />
                                            <h2 className='mt-6 text-xl'>{prop.title}</h2>
                                            <h2 className='text-xl font-bold mt-2'>{prop.price} $</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <SpecialEdition />
            </div>
        </>
    )
}

export default BestSale