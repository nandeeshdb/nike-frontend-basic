import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constant";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constant";
import ShoeCart from "./ShoeCart";
import { useState } from "react";
const Hero = () => {

  const [bigShoe,setbigShoe]=useState('bigShoe1');
  return (
    <section id='home'
    className='w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className="text-red-600 font-montserrat text-xl ">Our Summer Collections</p>
        <h1 className="text-[50px] max-sm:text-[30px] mt-4 font-bold max-sm:leading-[35px]" >
          <span>The New Arrival </span><br/>
          
          <span className="text-red-500">Nike </span>
          shoes
        </h1>
        <p className="text-gray-800 font-montserrat sm:max-w-sm text-xl">Discover stylish Nike arrivals quality comfort and innovation for your active life</p>

        <Button label='Shop now' icon={arrowRight}/>

        <div className="grid items-starts grid-cols-3 flex-wrap mt-15 gap-10">
          {statistics.map((stats)=>(
            <div key={stats.label} >
              <h1 className="text-[35px]">{stats.value}</h1>
              <h2  className="text-[30px]">{stats.label}</h2>
            </div>
          ))}

        </div>
      </div>

      <div className="relative flex-1 justify-center items-end flex xl-min-h-screen
      bg-slate-300 lg:mt-20">
        <img
        src={bigShoe}
        alt=''
        width={700}
        height={400}/>

        <div className="flex absolute sm:gap-6 gap-4 -bottom-[22.5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCart
              imgUrl={shoe}
              changeBigShoeImage={(shoe)=>{setbigShoe(shoe)
              }}
              bigShoeImage='' />
            </div>  
          ))}
        </div>

      </div>

      



    </section>
  )
}

export default Hero;