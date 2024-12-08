import { createSlice } from "@reduxjs/toolkit";

const PhotoCartSlice = createSlice({
    name: "photoCart",
    initialState: {
       PhotoCartList: [],
       totalPhoto: 0
    },
    reducers: {
        add_to_cart(state, action){
           const updatedPhotoCart = state.PhotoCartList.concat(action.payload)
           const updatedTotal = state.totalPhoto + action.payload.id
           return {...state, PhotoCartList: updatedPhotoCart, totalPhoto: updatedTotal}
        },
        remove_from_cart(state, action){

        }
    }
})
export const {add_to_cart, remove_from_cart} = PhotoCartSlice.actions
export const PhotoCartReducer  = PhotoCartSlice.reducer
