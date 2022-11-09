import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Api/Api';

const ProductsOnSales = () => {

    const [DiscountClothes, setDiscountClothes] = useState([]);

    useEffect(() => {
        fetchData()
        .then((data) => {
            let Discount = data.data.slice(-4)
            setDiscountClothes(Discount);
            console.log(Discount);
        })
    }, [])

    return (
        <>
            <div className='bg-[#fefefe] text-main-color'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 textCenter'>
                        {
                            DiscountClothes.map((prop, i) => {
                                return (
                                    <div key={i}>
                                        <div className='p-8 md:h-[65vh] md:w-full'>
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
            </div>
        </>
    )
}

export default ProductsOnSales