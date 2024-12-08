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
           const updatedTotal = state.totalPhoto + action.payload.albumId
           return {...state, PhotoCartList: updatedPhotoCart, totalPhoto: updatedTotal}
        },
        remove_from_cart(state, action){
           const updatedCartList = state.PhotoCartList.filter(item => item.id !== action.payload.id)
           const updatedTotal = state.totalPhoto - action.payload.albumId
           return {...state, PhotoCartList: updatedCartList, totalPhoto:updatedTotal}
        }
    }
})
export const {add_to_cart, remove_from_cart} = PhotoCartSlice.actions
export const PhotoCartReducer  = PhotoCartSlice.reducer
