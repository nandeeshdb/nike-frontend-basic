import React from 'react'

export const ProductCard = ({imgURL,name,price}) => {
  return (
    
        <div className='flex flex-1 flex-col w-full max-sm:w-full' >
           <img
           src={imgURL}
           alt={name}
           height={300}
           width={300}/>

           <h1 className='text-[25px] items-center font-bold'>{name}</h1>
           <p className='justify-center items-center mx-28 text-coral-red'  >{price}</p>


        </div>

        
    
  )
}
