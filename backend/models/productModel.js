import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please Enter product name"]
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required:[true,"Please Enter product description"]
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})