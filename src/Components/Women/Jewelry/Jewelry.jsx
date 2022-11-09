import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Api/Api';
import { Loader } from '../../Home/INDEX';
import JewelryBack from './JewelryBack/JewelryBack';


const Jewelry = () => {

    const [jewelry, setJewelry] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoader(true)

        fetchData()
        .then((data) => {
            let WomenJewelry = data.data.slice(4, 8);
            setJewelry(WomenJewelry);
            setLoader(false)

            console.log(WomenJewelry);
        }).catch((error) => {
            setLoader(false)
            setError(error.message)
        })
    }, [])

    return (
        <>
            <div className='bg-[#fefefe] py-12'>
                <JewelryBack />
                <div className="container">
                    <div className='text-center py-16'>
                        <h1> Browse Our Popular Jewelry </h1>
                        <h6 className='mt-4'>Top Sales In This Weekend</h6>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 textCenter gap-12'>

                        <div className='absolute left-1/2 -translate-x-1/2'>
                            { loader && <Loader /> }
                            <h1>{error}</h1>
                        </div>

                        {
                            jewelry.map((prop, i) => {
                                return (
                                    <div key={i}>
                                        <div className='shadow-xl p-8 rounded-md md:h-[70vh]'>
                                            <img className='h-[25vh] md:h-[35vh]' src={prop.image} alt="" />
                                            <h2 className='mt-6 lg:text-xl'>{prop.title}</h2>
                                            <h2 className='text-xl font-bold mt-2'>{prop.price} $</h2>
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

export default Jewelry