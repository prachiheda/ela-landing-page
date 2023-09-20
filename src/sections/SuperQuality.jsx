import Button from "../components/Button"; 
import { shoe7 } from "../assets/images";
import PopularProductCard from "../components/PopularProductCard";

const SuperQuality = () => {
  return (
    <section id = "about-us" className = "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className = "relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-3xl">
      {/* <div className = "flex justify-center items-center bg-primary bg-hero bg-cover bg-center rounded-3xl w-[500px] h-[500px] xl:min-h-screen max-xl:py-40"> */}
            <img
            src = {shoe7}
            alt ="shoe collection "
            width = {400}
            className = "object-contain relative z-10 px-10"
            />
        {/* </div> */}
      
      </div>
      
      <div className = "flex flex-1 flex-col">
        <h2 className = "font-dancer text-4xl capitalize font-bold lg:max-w-lg">
          <span className = "text-teal-700 ">Ethnic </span> 
          Jewelry for <span className = "text-teal-700 ">Every </span> 
          Occasion
        </h2>
        <p className = "mt-4 lg:max-w-lg info-text">At ELA by Archana, we provide <span className = "text-teal-700 font-bold">E</span>legant, <span className = "text-teal-700 font-bold">L</span>ovely, and <span className = "text-teal-700 font-bold">A</span>uthentic Indian jewelry that captures the essence of timeless beauty and cultural richness. </p>
        <p className = "mt-6 lg:max-w-lg info-text">Our commitment to detail and excellence ensures your satisfaction with every purchase. Explore our collection to embrace the beauty of Indian jewelry.</p>
        <div className = "mt-11">
          <Button label = "View details" />
        </div>
        
      </div>

      
    </section>
  )
}

export default SuperQuality