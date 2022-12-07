import {CREATE_USER, EDIT_USER} from "../types/index.jsx";
import axios from "axios";


const initialState = {
    user: {}
};

export default function userReducer(state=initialState, action) {
    const user= action.payload
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: {user},
            };
        case EDIT_USER:
            const editProduct = async () => {
                const { id, description, name, quantity, price } = user;
                await axios
                    .put(`http://localhost:8080/client/${id}`, { description , name, price, quantity });
                return {
                    ...state,
                    user: {user},
                };
            };
            return {
                ...state,
                user: {user},
            };
        default:
            return {
                ...state,
                user: {user},
            };

    }
}