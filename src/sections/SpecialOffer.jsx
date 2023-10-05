import React from 'react'
import { offer } from '../assets/images'
import Button from './Button'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10'>

      <div className='flex-1'>
        <img
        src={offer}
        alt='no image'
        height={600}
        width={800}/>

      </div>

      <div className='flex-col-2 max-container items-center justify-start'>
        <h1 className="text-[50px] max-sm:text-[30px] mt-2 font-bold max-sm:leading-[35px] mr-35"  > 
          <span className='text-coral-red'>Special<br/> </span> Offer
          
          <span className="text-red-500"> Nike </span>
          shoes
        </h1><br/>
        <p className="text-gray-800 font-montserrat sm:max-w-sm text-xl">
          Embark on a shopping journey that redefines your experience 
          with unbeatable deals. From premier slectors to incredible
          savings we offer unparalled value that sets apart.<br/><br/>
          Navigate a realm of posibilities desgined to fullfill your unique
          desires surparsing the loftiest expectations. Your journey with
          us is nothing short of exceptional
      </p> 

        <Button label='shop now' icon={arrowRight}/>
        
        
    </div>
    </section>
  )
}

export default SpecialOffer