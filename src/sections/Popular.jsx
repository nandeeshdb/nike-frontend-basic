import { products } from "../constant"
import { ProductCard } from "./ProductCard"

const Popular = () => {
  return (
    <section className="max-container  mt-10 max-sm:mt-14">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-[30px]  font-bold"> Our <span className="text-coral-red">Popular</span> Products</h1>
        <p className="font-montserrat text-black">Experience top notch quality 
          and style with our sought-after
          selctions.<br/> Discover a worlf of 
          comfort, design and value </p>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:mt-10 sm:mt-5 lg:gap-4 sm:gap-6">

            {products.map((product)=>(
              <ProductCard key={product.name}
              {...product}
              />


            ))}

          </div>

        

      </div>
    </section>
  )
}

export default Popular