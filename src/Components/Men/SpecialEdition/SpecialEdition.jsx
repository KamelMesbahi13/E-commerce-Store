import React from 'react';
import Img from '../../../assets/SpecialEdition.webp';

const SpecialEdition = () => {
  return (
    <>
      <div className='text-main-color py-8 mt-12'>
        <div className="container">
          <div className='text-center mb-12'>
            <h1 className='mb-2'>Special Edition</h1>
            <h6>Our Special Product</h6>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <div className='sm:w-1/2 sm:mr-8 pt-8'>
              <h1>A Black Line Favorite: <br /> Marshall Artist transalpino</h1>
              <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic pariatur expedita, aperiam natus ducimus dolor? Nisi corrupti quia, quis atque perspiciatis quasi eius consectetur repellendus nobis esse porro nihil.</p>
            </div>
            <div className='overflow-hidden'>
              <img className='w-10/12 my-4 sm:h-[70vh] sm:my-0 sm:w-[35rem] transition-all duration-1000 hover:scale-110' src={Img} alt="Marshall Artist" />
            </div>
            <div className='sm:w-1/2 sm:ml-8 pt-8'>
              <h1>Padded Jacket <br /> In Black</h1>
              <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eum perspiciatis ipsa soluta numquam non ducimus commodi animi. Ad dolorem perspiciatis laborum asperiores omnis maxime reprehenderit magni perferendis qui consequuntur?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialEdition