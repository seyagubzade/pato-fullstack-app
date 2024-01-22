import { configureStore } from '@reduxjs/toolkit'
import { prodsReducer } from './prods/prodsSlice'
import { wishlistReducer } from './wishlist/wishlistSlice';

const store = configureStore({
  reducer: {
    products: prodsReducer,
    wishlist: wishlistReducer,
  }
})

export default store;