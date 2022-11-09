import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";
import { Loader } from '../INDEX';

const url = 'https://fakestoreapi.com/products';

const BestSales = () => {

    const [product, setProduct] = useState([]);
    const [MenCLothes, setMenCLothes] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('')

    
    const fetchData = async () => {
        setLoader(true);
        try {
        const response = await axios.get(url);
        let ProductArr = response.data.slice(1, 4);
        let MenCLothes = response.data.slice(0, 4);

        setLoader(false);
        setProduct(ProductArr);
        setMenCLothes(MenCLothes)
        setError('');
        } catch (error) {
            console.log(error);
            setError(error.message)
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='pb-36 bg-[#fefefe] text-main-color'>
                <div className="container">
                    <div className='text-center py-16'>
                        <h1>Best Sales</h1>
                        <h6 className='mt-4'>Top Sales In This Weekend</h6>
                    </div>
                    <div className='flex flex-col items-center textCenter lg:flex-row justify-center gap-12'>
                        { loader && <Loader /> }
                        <h1>{error}</h1>

                        {
                            product.map((prop, i) => {
                                return (
                                    <div key={i}>
                                        <div className='shadow-xl p-8 rounded-md'>
                                            <img className='h-[25vh] md:h-[50vh]' src={prop.image} alt="" />
                                            <h2 className='mt-6 text-xl'>{prop.title}</h2>
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

export default BestSales;