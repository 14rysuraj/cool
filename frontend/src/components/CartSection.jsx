import React, { useState } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_all_items, remove_from_cart } from '../Redux/features/cart';
import { add_to_cart, toggleCart, reduce_from_cart } from '../Redux/features/cart';
import { useEffect } from 'react';
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


const CartSection = () => {
    
    const navigate = useNavigate();
    const container = useRef(null);
    const cart = useSelector((state) => state.cart)
    const dispactch = useDispatch();
    const toggle = () => {
        dispactch(toggleCart())
    }
    
    const items = cart.items
    console.log(items)

  

    const calculateSubtotal = () => {
        return items.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
    }


    useEffect(() => {
        gsap.from(container.current, {
            opacity: 1,
            x: '110%',
         
        })
        
    }, [])
    
    if (cart.open) {
        gsap.to(container.current, {
            opacity: 1,
            x:0
        })
    } else {
        gsap.to(container.current, {
            opacity: 1,
            x:'110%'
        })
    }

    
    const handleRemove = (id) => {
        dispactch(remove_from_cart(id));
        
        
    }
  return (
    <div ref={container} className=' fixed top-0 right-0 shadow-2xl h-[100%] md:w-[600px] w-full  py-3 bg-primary z-50 overflow-y-scroll bg-white '>
      
          {/* heading  */}
          <div className=' flex items-center justify-between my-2 px-6'>
              <div className='flex items-center gap-4'>
                  <h2 className=' font-logo'>Cart Item </h2>
                  <p className='text-xs text-slate-600'>({items.length})</p>
              </div>

              <div>
                  <button className='text-xs border-gray-400 border-[0.6px] py-2 px-5 hover:bg-gray-200' onClick={toggle}>Close</button>
                  <button className='text-xs border-gray-400 border-[0.6px] py-2 px-5 hover:bg-gray-200' onClick={()=>dispactch(remove_all_items())}>Clear Items</button>
              </div>
             
             
             
              

          </div>
          {/* end heading  */}

          {/* products section */}


          {items.length >0 ?   <div className='absolute h-3/4 overflow-scroll w-full px-6'>
              
              
              {items.map((item) => (
                  
         
                  
                  <div className='border-gray-400 border-[0.5px] flex my-3 items-center justify-between '>
                  
                      {/* button  */}
                      <div className='flex flex-col '>
                         <button className='px-2 py-3 text-gray-500 text-sm border-gray-400 border-[0.5px]' onClick={()=>dispactch(add_to_cart(item))}><IoAdd /></button> 
                         <button className='px-2 py-3 text-gray-500 text-sm border-gray-400 border-[0.5px]' onClick={()=>dispactch(reduce_from_cart(item.id))}><RiSubtractFill /></button> 
                          
                      </div>
                      {/* end button  */}


                      {/* image  */}
                      <img src={item.img} alt="" className='max-w-40  max-h-20  px-4 py-2' />
                      {/* end image  */}


                    
                      <div className='flex flex-col justify-evenly gap-2'>
                            {/* name  */}
                          <p className=' text-sm font-semibold text-gray-700 truncate w-40 cursor-pointer underline ' onClick={()=>navigate(`/product/${item.name}`)}>{item.name}</p>
                         
                         {/* end name  */}
                          <div className='flex text-xs text-gray-500 gap-20'>
                              
                              {/* Quantity and size  */}
                              <div className='flex flex-col gap-2'><p>Quantity</p><p className=' text-black'>{ item.userBuy}</p></div>
                          <div className=' flex flex-col gap-2'><p>Size</p><p className=' text-black'>1</p></div>
                              {/* endo Quantity and size */}
                          </div>
                          

                          {/* price  */}
                         

                      
                          
                      </div>

                      <p className='text-sm'>{item.totalPrice }</p>
                      <button className='border-gray-400 border-[0.4px] px-3 py-3 mr-3' onClick={()=>handleRemove(item.id)}><RxCross1 />
                      </button>
                      
                  </div>
    
))}


             


          </div>:<div className='h-[80%] w-full flex items-center justify-center text-gray-500'>Your cart is empty</div>}

        


          {/* end products section */}

          {/* total section */}

          
         
          <div className='fixed bottom-0 h-32 w-full px-6'>
              
              <hr className='my-3' />
          
              <p className='text-xs text-gray-600 '>Subtotal Amount:</p>
        
              <div className='flex justify-between my-2 items-center'>
                    
                  <p>NRS. {calculateSubtotal()}</p>
                  <button className='bg-blue-600 text-white text-sm py-4 px-5 hover:bg-blue-500' onClick={()=>navigate('/payment')}>CHECK OUT</button>
                  
              </div>
                </div>



    </div>
  )
}

export default CartSection
