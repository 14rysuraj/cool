import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart.js"
import authReducer from "./features/auth.js"





export default configureStore({
    reducer: {
        cart: cartReducer,
        auth:authReducer,
        
        

    }
})