import {TYPES} from "../Actions/ShoppingActions.jsx";

/*export const shoppingInitialState = {
    products: [
        {id:1, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 1", price: "100"},
        {id:2, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 2", price: "100"},
        {id:3, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 3", price: "300"},
        {id:4, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 4", price: "200"},
        {id:5, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 5", price: "500"},
        {id:6, img:"src/assets/Img/ImgCake.png", about:"Lorem Ipsum is simply " +
                "dummy text of the printing and typesetting " +
                "industry. Lorem Ipsum has been the industry's standard " +
                "dummy text ever since the 1500s, when an unknown" +
                " printer took a galley of type and scrambled " +
                "it to make a type specimen book", name:"Pastel 6", price: "200"},
    ],
    cart:[],
};
export function shoppingReducer (state,action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            console.log(newItem)
            return {
                ...state,
                cart: [...state.cart, newItem],
            }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }
        default:
            return state;

    }
}*/