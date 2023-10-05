import React from 'react'
import {services} from '../constant'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className='grid grid-cols-3 ml-20  sm:grid-cols-1 md:grid-cols-3'>

      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}

      


    </section>
  )
}

export default Services