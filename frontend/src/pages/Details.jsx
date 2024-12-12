import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../utils/Items';
import { add_to_cart } from '../Redux/features/cart';
import { useDispatch } from 'react-redux';


const Details = () => {
    const dispactch = useDispatch();
    const {name}= useParams();
    const item = items.find((i) => i.name === name);
    const [quantity, setQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(item.price);
    const price=item.price

    console.log(item)

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setItemPrice((quantity - 1) * item.price);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setItemPrice((quantity + 1) * item.price);
    };
    

    return (
      <div className='px-2 lg:px-48'>
    <div class="font-sans tracking-wide lg:max-w-6xl max-w-2xl max-lg:mx-auto my-10">
    <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-10">

        <div class="lg:col-span-3 text-center">
            <div class="lg:h-[450px] p-4 relative before:absolute before:inset-0 before:opacity-20 after:opacity-0 before:rounded">
                <img src={item.img} alt="Product" class="lg:w-11/12 w-full h-full rounded object-contain object-top" />
            </div>

            <div class="flex  flex-wrap gap-4 mx-auto mt-4">
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product2" class="w-20 h-16 object-contain" />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product3" class="w-20 h-16 object-contain" />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product4" class="w-20 h-16 object-contain" />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product5" class="w-20 h-16 object-contain" />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product6" class="w-20 h-16 object-contain" />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                    <img src="" alt="Product7" class="w-20 h-16 object-contain" />
                </div>
            </div>
        </div>

        <div class="lg:col-span-2 ">
            <div class="flex flex-wrap items-start gap-4">
                <div>
                                <h2 class="text-2xl font-extrabold text-gray-800">{item.name}</h2>
                                <p>{ item.brand}</p>

                 
                </div>

              
            </div>

            <hr class="my-6" />

            <div>
                <h3 class="text-xl font-bold text-gray-800">Price</h3>
                            <p class="text-gray-800 text-4xl font-bold mt-4">Nrs {itemPrice }</p>
            </div>

            <hr class="my-6" />

            <div>
                <h3 class="text-xl font-bold text-gray-800">Choose a Size</h3>
                            <div class="flex flex-wrap gap-2 mt-4">

                                {
                                    item.quantity.map((quantity, i) => (
                                        <button type="button" class="px-10 py-5  bg-blue-600 border-2  text-white border-white hover:border-gray-800 rounded shrink-0">{ quantity}</button>

                                    )
                                        
                                    )
                               } 
                                
                   
                    

                </div>
            </div>

            <hr class="my-6" />

            <div>
                <h3 class="text-xl font-bold text-gray-800">Quantity</h3>

                <div class="flex divide-x border w-max mt-4 rounded overflow-hidden">
                    <button type="button" class="bg-gray-100 w-12 h-10 font-semibold" onClick={decreaseQuantity}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current inline" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                        </svg>
                    </button>
                    <button type="button" class="bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg">
                        {quantity}
                    </button>
                    <button type="button" class="bg-gray-800 text-white w-12 h-10 font-semibold" onClick={increaseQuantity}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current inline" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <hr class="my-6" />

            <div class="flex flex-wrap gap-4">
                <button type="button" class="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold rounded">Buy now</button>
                <button type="button" class="min-w-[200px] px-4 py-2.5 border border-blue-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded" onClick={()=>dispactch(add_to_cart({...item,userBuy:quantity,totalPrice:itemPrice}))}>Add to cart</button>
            </div>
        </div>
    </div>

    <div class="mt-6 max-w-2xl">
        <h3 class="text-xl font-bold text-gray-800">Ingredients</h3>

                    <ul class="grid sm:grid-cols-2 gap-3 mt-4">
                        {item.ingredients.map((ingredient, index) => (
                              <li class="flex items-center text-sm text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                              </svg>
                             {ingredient}
                          </li>
                        ))}
          
     
        </ul>

        <div class="mt-6">
            <h3 class="text-xl font-bold text-gray-800">Product Description</h3>
                        <p class="text-sm text-gray-600 mt-4">{ item.description}</p>
        </div>
    </div>
            </div>
            </div>
  )
}

export default Details

