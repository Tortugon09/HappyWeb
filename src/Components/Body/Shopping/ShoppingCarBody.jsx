import {AddCar} from "./AddCar";
import ImgTry from "../../../assets/Img/ImgCake.png"
import {Navbar} from "../../Header/Navbar";
import {AddBox, ShoppingBox} from "./ShoppingStyles";
import {useContext, useReducer} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function ShoppingCarBody() {
    const {cartItems} = useContext(CartContext)

    console.log(cartItems)
    return (
        <>

            <Navbar></Navbar>
            <ShoppingBox>
                <h2>Carrito</h2>

                {cartItems.length === 0 ? <div><h2>Tu Carrito esta vacio</h2></div> : cartItems.map((item) => <AddCar key={item.id} data={item}></AddCar>)}
            </ShoppingBox>

        </>
    )
}