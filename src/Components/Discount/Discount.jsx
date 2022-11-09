import React from 'react'
import { Header, Off, NewSeason, BlackFriday, ProductsOnSales, WinterClothes, MenClothes } from './INDEX';

const Discount = () => {
    return (
        <>
            <div id='discount' className='bg-second-color text-main-color'>
                <Header />
                <Off />
                <NewSeason />
                <BlackFriday />
                <ProductsOnSales />
                <WinterClothes />
                <MenClothes />
            </div>
        </>
    )
}

export default Discount