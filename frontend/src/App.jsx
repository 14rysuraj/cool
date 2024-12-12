import React from "react";
import Navbar from "./components/Navbar";
import './App.css';// Icons
import Home from "./pages/Home";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Category from "./pages/Category";
import Details from "./pages/Details";
import CartSection from "./components/CartSection";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KhaltiCheckoutButton from "./components/KhaltiChecoutButton";


const App = () => {
  return (
    <>
      <Router>
    
        <Navbar />
        <CartSection/>
        

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/category/all" element={<Category />} />
          <Route path="/product/:name" element=

            {
           
              <Details />
          }
          />
          <Route path="/category/:name/:brand" element={<Category />} />
          <Route path="/search/:name" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/payment' element={<KhaltiCheckoutButton/>} />
          

         
      </Routes>
        
      </Router>
      <ToastContainer />
        

    </>
  );
};

export default App;

