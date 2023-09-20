import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className = "flex flex-1 flex-col justify-center w-full max-sm:w-full">
        <div className = "bg-card bg-center bg-cover w-[300px] h-[300px] flex justify-center items-center">
        <img 
        src = {imgURL}
        alt = {name}
        className = "w-[280px] "
        />
        </div>
        <div className = 'mt-8 flex justify-start items-center gap-2.5'>
            <img src = {star} alt ='rating' width={24} height = {24}/>
            <p className = "font-montserrat mt-1 leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className = "mt-2 text-xl leading-normal font-semibold font-montserrat">{name}</h3>
        <p className = "font-semibold font-montserrat text-teal-700 text-lg leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard