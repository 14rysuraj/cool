import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    items: [],
    total: 0,
  },
  reducers: {
    toggleCart: (state) => {
      state.open = !state.open;
    },

    openCart: (state, action) => {
      state.open = true;
    },

    closeCart: (state, action) => {
      state.open = false;
    },

    add_to_cart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      if (existingItem) {
        // Increase the quantity of the existing item
        existingItem.userBuy++;
        // Recalculate total price for the item
        existingItem.totalPrice = parseFloat((existingItem.totalPrice + existingItem.price).toFixed(2));
      } else {
        const price = parseFloat(action.payload.price); // Ensure price is a float
        if (isNaN(price)) {
          console.error("Invalid price value:", action.payload.price);
          return; // Exit the function to avoid adding invalid items
        }

        // Create a new item object
        const item = {
          id: action.payload.id,
          name: action.payload.name,
          about: action.payload.about,
          totalPrice: action.payload.totalPrice, // Set total price to float with 2 decimals
          img: action.payload.img,
          userBuy: action.payload.userBuy, // Set initial quantity to 1
          price: action.payload.price, // Set price as float with 2 decimals
        };
        
        state.items.push(item);
      }
      // Recalculate total price of all items in the cart
      state.total = parseFloat(
        state.items.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)
      );
    },

    reduce_from_cart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      
      if (item) {
        if (item.userBuy > 1) {
          // Decrease the quantity of the item
          item.userBuy--;
          // Recalculate total price for the item
          item.totalPrice = parseFloat((item.totalPrice - item.price).toFixed(2));
        } else {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
      // Recalculate total price of all items in the cart
      state.total = parseFloat(
        state.items.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)
      );
    },

    remove_from_cart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Recalculate total price of all items in the cart
      state.total = parseFloat(
        state.items.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)
      );
    },

    remove_all_items: (state, action) => {
      state.items = [];
      state.total = 0; // Reset total to 0
    },
  },
});

export const {
  openCart,
  closeCart,
  toggleCart,
  add_to_cart,
  remove_from_cart,
  reduce_from_cart,
  remove_all_items,
} = cartSlice.actions;

export default cartSlice.reducer;