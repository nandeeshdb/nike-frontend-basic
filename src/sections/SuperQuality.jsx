import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'


const SuperQuality = () => {
  return (
    <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container' >
  <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        
        <h1 className="text-[50px] max-sm:text-[30px] mt-4 font-bold max-sm:leading-[35px]" >We Provide You 
          <span className='text-coral-red'>Super<br/>Quality </span> Shoes
          
          <span className="text-red-500">Nike </span>
          shoes
        </h1><br/>
        <p className="text-gray-800 font-montserrat sm:max-w-sm text-xl">Ensuring Premium comfort and styles, our meticulosly
      crafted footware is designed to elevate your experience
      providing you with unmatched quality, innovation, and a
      touch of elegance <br/> <br/>
      Our dedication to detail and excellence ensures yoursatisfaction
      </p> 

        <Button label='View now' icon={arrowRight}/>
    </div>
    <div className='flex-end justify-end items-center'>
      <img
      src={shoe8}
      alt='no'/>


    </div>



    </div>
  )
}

export default SuperQuality


{/* <p>Ensuring Premium comfort and styles, our meticulosly<br/>
      crafted footware is designed to elevate your experience<br/>
      providing you with unmatched quality, innovation, and a<br/>
      touch of elegance <br/><br/>
      Our dedication to detail and excellence ensures your<br/>satisfaction
      </p> */}