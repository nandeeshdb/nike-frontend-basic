import React from 'react'
import { reviews } from '../constant'
import ReviewCard from './ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl text-center font-bold'>What our <span className='text-coral-red'>Customer </span> say</h3>
      <p className='text-center font-montserrat mt-4'>Hear Geniuine Stories from our satisfied customer about exceptional experince with us</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-12'>
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>

    </section>
  )
}

export default CustomerReview