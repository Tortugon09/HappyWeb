import {combineReducers } from "redux";
import cartReducer from "./cartReducer.jsx";
import userReducer from "./userReducer.jsx";

const reducer = combineReducers({
    cart: cartReducer,
    users: userReducer,
});

export default reducer;