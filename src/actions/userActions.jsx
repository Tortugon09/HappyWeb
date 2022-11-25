import {CREATE_USER, EDIT_USER} from "../types/index.jsx";


export const createUser = (user) => ({type: CREATE_USER, payload:user});

export const editUser = (user) => ({type: EDIT_USER, payload: user});