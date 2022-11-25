import {ADD_TO_CART, DELATE_FROM_CART, DELATE_ALL_FROM_CART, CLEAR_CART} from "../types/index.jsx";



export const addItemToCart = (product) => ({type: ADD_TO_CART, payload: product })

export const removeItemFromCart = (product) => ({type: DELATE_FROM_CART, payload: product})

export const removeAllFromCart = (product) => ({type: DELATE_ALL_FROM_CART, payload: product})

export const clearCart = () => ({type:CLEAR_CART})

