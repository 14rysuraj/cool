import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import '../App.css';// Icons
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../Redux/features/cart';
import { Navigate, useNavigate } from 'react-router-dom';




const Navbar = () => {

  const dispatch = useDispatch();



  return (
      <div className=' bg-blue-600 px-2 lg:px-48 py-4 text-white  flex flex-col gap-2'>
          
          {/* top */}
          <div className='flex justify-between '>
              <p className='font-extralight text-sm'>Buy best food for your dog ☺️</p>
              <div className='flex gap-2'>
                  <TiSocialFacebook />
                  <TiSocialTwitter />
                  <TiSocialLinkedin />
                  <TiSocialPinterest />
                  <FaInstagram />
              </div>
          </div>
          <Middle />

          <div className='flex justify-between '>
              {categories.map((category, index) => {
                  return (
                    <Link to={`/category/${category.name}`} key={index}>
                        <div className='flex gap-2 text-sm'>
                            <p>{category.name}</p>
                           
                        </div>
                    </Link>

                     
                  )
              })}
          </div>

          
     
    </div>
  )
}
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { logout } from '../Redux/features/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
const Middle = () => {
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart)
  const items=cart.items
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleCart())
  }

  const auth = useSelector((state) => state.auth)
  const isAuth = auth.isLoggedIn

 
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/user/logout", {
        withCredentials: true,
      });

      toast.success(response.data.message);
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };


 
 
  
    return (
        <div className='h-24   text-white flex justify-between items-center gap-4 md:gap-10 lg:gap-40'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-secondary text-nowrap cursor-pointer' onClick={()=>navigate('/')}>Dog Food</h1>
            
                <form action="" className='bg-white rounded-md flex justify-between w-full'>
                    <input type="text" placeholder='Search.....' className='px-6 py-2 rounded-md text-black outline-none w-full' />
                    <button className='px-6 py-2 text-2xl bg-black rounded-md '><IoSearchOutline /></button>
             </form>
           
        <div className='flex text-nowrap gap-10 text-xl'>
          

          <button className="icon-container" >
            {
              isAuth ? (
              <div className='flex gap-4'>  <p>{auth.user.fullname}</p>
                  <button onClick={handleLogout}><CiLogout />
                  <span className="tooltip" >Logout</span>
                    
                  </button>
                
                </div>
              )
                : <> <FaUserAlt onClick={() => navigate('/login')}/>
                  
                <span className="tooltip" >Login</span></>
            }
          
                </button>
                <button className="icon-container"><FaRegHeart />
                    <span className="tooltip">Wishlist</span>
          </button>
          
          <div className='relative'>
            <button onClick={toggle} className="icon-container"><FiShoppingCart />
              <p className='absolute bottom-6 text-sm bg-yellow-400 rounded-[50%] w-6 h-6 flex justify-center items-center text-black'>{items.length }</p>
          <span className="tooltip">Cart Item</span></button>
          </div>
               
            </div>
     
      </div>
    );
};
  
const categories =
    [
        {
            "id": 1,
            "name": "Dry Food"
          },
          {
            "id": 2,
            "name": "Wet Food"
          },
          {
            "id": 3,
            "name": "Fresh Food & Toppers"
          },
          {
            "id": 4,
            "name": "Veterinary Diets"
          },
          {
            "id": 5,
            "name": "Shop by Health Condition"
          },
          {
            "id": 6,
            "name": "Puppy Food"
          },
       
       
]

export default Navbar
