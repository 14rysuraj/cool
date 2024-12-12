import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Auth = () => {
  return (
    <div className="px-2 lg:px-48  flex items-center justify-center h-[80vh]">
      <div className="border-gray-300 border-[1px] px-4 py-7 flex w-[60%] gap-8 justify-between ">
        <Signup />
        <Divider />
        <SocialLogin />
      </div>
    </div>
  );
};

const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullname) return toast.error("Please enter your fullname!");

    


 
      if (!email) return toast.error("Please enter your email address!");
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
        return toast.error("Invalid Email Address!");
      else if (!password || password.length < 8)
        return toast.error("Password must be at least 8 characters long.");
    const response = await axios.post("/api/user/signup", {
  
      email: email,
      password: password,
      fullname: fullname,

    },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.data.success) {
      toast.success("Signup successfully");
      navigate("/login");
    } else {
      toast.error("something went wrong");
    }
  }


 

  return (
    <form className="flex flex-col gap-4 w-1/2"  >
      <p className="font-sans">Sign up to Dog Food</p>
      <p className="text-xs font-sans text-gray-500 ">* Full Name</p>
      <input
        type="text"
        className="border-[1.5px] rounded-sm outline-none px-4 py-2 text-sm"
        placeholder="Meena Tamang"
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <p className="text-xs font-sans text-gray-500">* Email</p>
      <input
        type="text"
        className="border-[1.5px] rounded-sm outline-none px-4 py-2 text-sm"
        placeholder="meena@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p className="text-xs font-sans text-gray-500">* Password</p>
      <input
        type="text"
        className="border-[1.5px] rounded-sm outline-none px-4 py-2 text-sm"
        placeholder="your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-4"   onClick={handleSignup} >
        {" "}
        Sign Up{" "}
      </button>
    </form>
  );
};



const SocialLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-1/2 justify-center gap-7">
      <button className="border-gray-400 border-[0.7px] px-6 py-3 text-xs text-white bg-blue-600 flex items-center gap-10">
        <GrFacebookOption />
        <p>Continue with Facebook</p>
      </button>
      <button className="border-gray-400 border-[0.7px] px-6 py-3 text-xs text-black flex items-center gap-10">
        <AiOutlineGoogle />
        <p>Continue with Google</p>
      </button>
      <button className="border-gray-400 border-[0.7px] px-6 py-3 text-xs text-white bg-black flex items-center gap-10">
        <FaGithub />
        <p>Continue with Github</p>
      </button>
      <button className="border-gray-400 border-[0.7px] px-6 py-3 text-xs  flex items-center gap-10 " onClick={()=>navigate('/login')}>
        ☺️<p>Already have an account ? sign in</p>
      </button>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="flex flex-col items-center  gap-2 ">
      <div className="border-r-2 border-gray-300 h-1/2"></div>
      <p className="text-gray-500">or</p>
      <div className="border-r-2 border-gray-300 h-1/2"></div>
    </div>
  );
};








export default Auth;
