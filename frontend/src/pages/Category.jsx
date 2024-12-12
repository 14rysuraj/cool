import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/Items";
import { add_to_cart, openCart, closeCart } from "../Redux/features/cart";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const Category = () => {


    console.log(items.length)

  return (
    <div className="px-2 lg:px-48 my-10">
      <div className="flex gap-10">
        <Aside />
        <Hero />
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
const Aside = () => {
  let params = useParams()
  const category = params.name;

  

    const categories=["Dry Food","Wet Food","Fresh Food & Toppers","Veterinary Diets","Shop by Health Condition","Puppy Food"]
    const brands=["Chewy","ACANA","Addiction",'American Journey','American Natural Premium','Annamaet','Artemis']
  return (
    <div className="w-1/7 sticky top-10 h-screen overflow-y-auto">
      <div className="flex flex-col gap-3 mb-10">
        <p className="mb-4 font-sans font-semibold">Food Category</p>

        {categories.map((category, index) =>
        (
          <NavLink to={`/category/${category}`}  className={({ isActive }) =>
            isActive ? 'bg-blue-600 font-bold px-2 text-white' : 'text-sm text-slate-600'
          } key={index}>
          {category}
        </NavLink>

        ))}

       

          </div>
          
          <div className="flex flex-col gap-3">
        <p className="mb-4 font-sans font-semibold">Brand</p>
       
              {brands.map((brand, index) => (
                   <NavLink to={`/category/${category}/${brand}`} className={({ isActive }) =>
                    isActive ? 'bg-blue-600 font-bold px-2 text-white' : 'text-sm text-slate-600'
                  } key={index}>
                   {brand}
                       </NavLink>
                       
              ))}
        
      </div>
    </div>
  );
};

const Hero = () => {
let params = useParams();
  const category = params.name;
  const brand = params.brand;
  console.log(category);
  
  let filterItem = [];

  if (brand && category) {
    // If both brand and category are provided, filter based on both
    filterItem = items.filter(
      (item) => item.brand.includes(brand) && item.category.includes(category)
    );
  } else if (category) {
    filterItem = items.filter(item => item.category.includes(category));
  } else {
    filterItem = items; // If only category is provided, use all items
  }


  return (
      <div className="w-full flex gap-7 flex-wrap ">
        
          {filterItem.map((item, index) => (
              <ProductCard item={ item} key={index} />
        ))}

    </div>
  );
};

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(add_to_cart(product));
    dispatch(openCart());
    console.log(product)
    
  }
  const price=item.price
  
  return (
    <div className="flex flex-col border p-4 shadow-md rounded-md w-64 h-72">
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={item.img}
          alt="Product"
          className="w-full h-full object-contain cursor-pointer"
          onClick={() => navigate(`/product/${item.name}`)}
        />
      </div>
      <div
        className="mt-4 text-sm text-gray-700 truncate"
        title="Description about the product. This is a very long description to demonstrate the ellipsis effect."
      >
       {item.name}
      </div>
      <div className="text-lg font-semibold mt-2 text-blue-600">NRS:{item.price }</div>
      <div className="flex gap-4 mt-4 text-gray-500">
        <span>❤️</span>
        <button onClick={() => handleAddToCart({ ...item,userBuy:1,totalPrice:price })}>🛒</button>
        <span>🔄</span>
      </div>
      </div>
      


      
  );
};
export default Category;
