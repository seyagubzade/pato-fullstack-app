// wishlistSlice
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let allData = JSON.parse(JSON.stringify(state.wishlist));
      const target = allData.find((item) => item._id == action.payload._id);
      if (target) {
        toast.error("Item already exists in your wishlist");
      } else {
        allData = [...allData, action.payload];
        state.wishlist = allData;
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action) => {
      let allData = JSON.parse(JSON.stringify(state.wishlist));
      const target = allData.find((item) => item._id == action.payload);
      const indexOfTarget = allData.indexOf(target);
      allData.splice(indexOfTarget, 1);
      state.wishlist = allData;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
