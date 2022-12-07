import {ADD_TO_CART, CLEAR_CART, DELATE_ALL_FROM_CART, DELATE_FROM_CART} from "../types/index.jsx";


const d = () => {
    try {
        const ProductsInLocalStorage = localStorage.getItem('cartProducts')
        return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : []
    } catch (error) {
        return [];
    }
}


const initialState = {
    db: d()
};

export default function  cartReducer(state=initialState, action){
    const product = action.payload;
    switch (action.type) {
        case ADD_TO_CART:
            const inCart = state.db.find(
                (productInCart) => productInCart.id === product.id
            );
            return inCart
                ? {
                    ...state,
                    db: state.db.map((productInCart) =>
                        productInCart.id === product.id
                            ? { ...productInCart, amount: productInCart.amount + 1 }
                            : productInCart

                    ),
                }
                :
                {...state,
                    db:[...state.db,{...product, amount: 1}]}
        case DELATE_FROM_CART:
            let itemToDelete = state.db.find((productInCart) => productInCart.id === product.id);

            return itemToDelete.amount > 1
                ? {
                    ...state,
                    db: state.db.map((productInCart) =>
                        productInCart.id === product.id
                            ? {...productInCart,amount: productInCart.amount -1}
                            : productInCart)
                }
                : {
                    ...state,
                    db: state.db.filter((productInCart) => productInCart.id !== product.id)
                }
        case DELATE_ALL_FROM_CART:
            return {
                ...state,
                db: state.db.filter((productInCart) => productInCart.id !== product.id),
            };
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }

}