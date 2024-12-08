import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cartSlice";
import { PhotoCartReducer } from "./PhotoCartSlice";

export const store = configureStore({
    reducer: {
        cartState : cartReducer,
        PhotoCartState : PhotoCartReducer,
    }
})
 
