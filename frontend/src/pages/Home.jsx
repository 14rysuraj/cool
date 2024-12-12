import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    return (
      <div className="px-2 lg:px-48 ">

        <div className="bg-gray-100 flex my-20 px-4 py-4 gap-20">
          <div className="w-1/2 flex flex-col gap-3 justify-center">
            <p className="font-bold text-2xl">Serve this for sensitive tummies</p>
            <p>Itchy skin? Digestive issues? Your dog may have a food allergy or intolerance. Sensitive stomach formulas are easier to digest to keep them feeling their best and may have :</p>
           
            <li className="text-sm font">High protein</li>
            <li className="text-sm font">High protein</li>
            <li className="text-sm font">High protein</li>
            <li className="text-sm font">High protein</li>

            <button className="bg-blue-600 w-40 text-white hover:bg-blue-700 rounded-full px-2 py-3" onClick={()=>navigate('/category/all')}>Shop Now</button>
            
      
          
          </div>
        <img src={"https://image.chewy.com/catalog/cms/images/1360301-2024-04-SE-DogFoodePLP-TradeUpEducation-FreshPrepared-50-50-ContentBlock._SX1360__V1715117789_.jpeg"} alt=""  className="w-1/2"/>

        </div>
      </div>

  );
};

export default Home;
