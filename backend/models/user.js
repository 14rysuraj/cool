import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
     },
     password: {
        type: String,
        required: true,
     },
     fullname: {
        type: String,
        required: true,
        trim: true,
     },
   
})


 export const User =mongoose.model('User',userSchema);

