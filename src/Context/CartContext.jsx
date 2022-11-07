import {createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console.js";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('cartProducts')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await axios
            .get("http://localhost:8080/product")
            .then(({ data }) => setProducts(data.data));
    };
    const getProductsCart = async () => {
        return await axios
            .get("http://localhost:8080/product-order")
            .then(({ data }) => setCartItems(data.data))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getProducts();
        getProductsCart();
    }, []);

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount+1}
                    } else return productInCart;
                })
            )
        } else {
            setCartItems([...cartItems, {...product, amount: 1}])
        }
    }
    const  removeItemFromCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart.amount === 1){
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart)=> {
                    if(productInCart.id === product.id){
                        return{...inCart, amount: inCart.amount -1}
                    } else return productInCart
                }))
        }
    }

    const editItemToCart = async (id, query, amount) => {
        if (query === "del" && amount === 1) {
            await axios
                .delete(`http:/products-cart/${id}`)
                .then(({ data }) => console.log(data));
        } else {
            await axios
                .put(`http:/products-cart/${id}?query=${query}`, {
                    amount,
                })
                .then(({ data }) => console.log(data));
        }

        getProducts();
        getProductsCart();
    };

    const addProduct = async (product) => {
        const { description,name, quantity, price } = product;

        await axios.post("http://localhost:8080/product", { description ,name, price, quantity });

        getProducts();
        getProductsCart();
    };
    const editProduct = async (product) => {
        const { id, description, name, quantity, price } = product;
        console.log(product)
        await axios
            .put(`http://localhost:8080/product/${id}`, { description , name, price, quantity });

        getProducts();
        getProductsCart();
    };
    const getproductId = async (product) => {
        const { id } = product;
        console.log(product)
        await axios
            .get(`http://localhost:8080/product/${id}`)

        getProducts();
        getProductsCart();
    };

    const delateProduct = async (product) => {
        const { id } = product;
        console.log(product)
        await axios
            .delete(`http://localhost:8080/product/${id}`)

        getProducts();
        getProductsCart();
    };


    return (
        <CartContext.Provider
            value={{ cartItems, products, addItemToCart, editItemToCart, removeItemFromCart,addProduct,editProduct,delateProduct}}
        >
            {children}
        </CartContext.Provider>
    );
};