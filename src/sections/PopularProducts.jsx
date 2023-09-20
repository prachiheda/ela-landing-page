import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id = "products" className = "max-container max-sm:mt-12">
        <div className ="flex flex-col justify-start gap-5">
          <h2 className = "text-4xl font-dancer font-bold">
          Our <span className = "text-teal-700">Popular </span>Products</h2>
          <p className = "lg:max-w-lg mt-2 mb-9  font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of fashion, design, and value.</p>

        </div>

      <div className = "mt-25 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-10 sm:mt-10 gap-14">
        {products.map((product)=>(
          <PopularProductCard key = {products.name} {...product} />
        ))}

      </div>
    </section>
  )
}

export default PopularProducts