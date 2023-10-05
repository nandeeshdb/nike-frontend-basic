import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px]  sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-8 py-15'>
        <diV className="justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt="no" 
        height={25}
        width={25}/>
        </diV>

        <div>
            <h1 className='font-semibold text-lg text-justify' >{label}</h1>
            <p>{subtext}</p>
        </div>



    </div>
  )
}

export default ServiceCard