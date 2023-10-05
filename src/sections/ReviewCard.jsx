import React from 'react'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img className='rounded-full'
        src={imgURL}
        alt={customerName}
        height={200}
        width={200}
        />

        <h1 className='text-[20px] font-bold'>{customerName}</h1>

        <h3 className='text-[20px] font-bold'>{rating}</h3>
        <p className='text-center text-[20px]'>{feedback}</p>
    </div>
  )
}

export default ReviewCard