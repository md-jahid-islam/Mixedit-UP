import { useEffect, useState } from 'react';
import './App.css'
import { IoMdStar } from "react-icons/io";
import foodData from './ProductData';

function App() {

  const [data ,setData] =  useState(foodData)
  
  // =============== filter data
  const handelButton = (foodCat)=>{
    const filterData = foodData.filter((filterFood)=>{
      console.log(filterFood)
        return filterFood.category == foodCat
    })
    setData(filterData)
  }

  // ================ add new classlist to the jsx
  useEffect(()=>{
    let singel_food_card  = document.querySelectorAll('.singel_food_card')

    singel_food_card.forEach((item)=>{
      item.classList.add('animation_data')
    })
  } , [data])


  return (
    <>
        <nav className="nav">
          <div className="container">
            <div className='py-8 px-10 bg-[#F4EFE3] flex justify-between mb-10 mt-10'>
              <div className="nav_text">
                  <h1 className='text-3xl font-bold text-[#5C6574]'>Mixedit-UP</h1>
              </div>
              <div className="flex gap-5">
                  <button onClick={()=>setData(foodData)} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
                  <button onClick={()=>handelButton('breakfast')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>Breakfast</button>
                  <button onClick={()=>handelButton('lunch')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5c6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>Lunch</button>
                  <button onClick={()=>handelButton('evening')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5c6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>Evening</button>
                  <button onClick={()=>handelButton('dinner')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5c6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>Dinner</button>
               </div>
            </div>
            <div className="allCards flex gap-5 flex-wrap justify-center">
              {
                data.map((item)=>(
                <div key={item.product_id} className="singel_food_card ">
                  <div className="product_image rounded-sm w-[300px] px-[35px] py-[50px] bg-[#F4EFE3] mb-5 relative">
                    {
                      item.discount_price &&
                        <div className=' absolute top-5 left-5 w-[50px] h-[25px] bg-[#FFB539] flex justify-center items-center'><p className='text-sm font-bold text-black'>Sale</p></div>
                    }
                     <img  className='w-[250px] h-[230px] rounded-full' src={item.food_image} alt="Food Image" />
                  </div>
                    <div className="card_text">
                      <ul className='flex gap-1 justify-center '>
                        <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                        <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                        <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                        <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                        <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                      </ul>
                      <div className='card_text flex flex-col items-center mt-5'>
                          <h2 className='text-[23px]   font-playwrite  mb-5 '>{item.food_name}</h2>
                          <p className='text-lg font-bold  text-[#FFB539]'>{ item.discount_price? item.discount_price : item.food_price} <span className='text-[#5C6574] ml-5 line-through'>{item.discount_price&& item.food_price }</span></p>
                      </div>
                    </div>
                 </div>
                ))
              }
            </div>
          </div>
        </nav>
    </>
  )
}

export default App
