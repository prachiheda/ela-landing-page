import Button from "../components/Button"
import {arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images";
import ShoeCard from '../components/shoeCard'
import {useState} from 'react';


const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
      id = "home"
      className = "w-full flex xl:flex-row flex-col gap-10 max-container justify-center min-h-screen"
    >
      <div className = "relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className = "text-xl font-montserrat text-teal-700">Our Summer Collection</p>
        <h1 className = "mt-10 font-dancing text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className = "xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className = "text-teal-700 inline-block mt-3">ELA </span> Jewelry
        </h1>
        <p className = "font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish ELA jewelry, directly imported from India, made with the finest materials and craftmenship.</p>
        <Button label = "Shop now" iconURL = {arrowRight} />
        <div className = "flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key = {stat.label}>
              <p className = "text-4xl font-dancer font-bold">{stat.value}</p>
              <p className = "leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>

          ))}
        </div>

      </div>

      <div className = "relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
        src= {bigShoeImg}
        alt = "shoe collectiion"
        width= {300}
        className = "object-contain relative z-10"
        
        />
        <div className = "flex justify-center items-center sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key = {shoe}>
              <ShoeCard 
                imgURL = {shoe}
                changeBigShoeImage = {(shoe) => {setbigShoeImg(shoe)}}
                bigShoeImg = {bigShoeImg}
              />
            </div>

          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero