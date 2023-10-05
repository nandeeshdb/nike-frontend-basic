import React from 'react'

const ShoeCart = ({imgUrl,changeBigShoeImage,bigShoeImage}) => {




  
    function onClickHandler(){
        if(bigShoeImage!== imgUrl.bigShoe){

            changeBigShoeImage(imgUrl.bigShoe);

        }
    }
  return (
   <div className={`border-2 rounded-xl
    ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
    
    onClick={onClickHandler}>

        <div className='flex justify-center items-center bg-card bg-center bg-cover sm: h-40 sm:30 rounded-xl max-lg:py-4 max-sm:my-[30%]'> 
            <img 
            src={imgUrl.thumbnail}
            alt='no image'
            width={200}
            height={200}
            />
        </div>
    

   </div>
  )
}

export default ShoeCart;