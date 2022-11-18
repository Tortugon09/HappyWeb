import {AddCar} from "./AddCar";
import ImgTry from "../../../assets/Img/ImgCake.png"
import {Navbar} from "../../Header/Navbar";
import {AddBox, ShoppingBox,BuyAll} from "./ShoppingStyles";
import {useContext, useReducer, useEffect, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function ShoppingCarBody() {
    const {cartItems} = useContext(CartContext)
    const [productsLength, setProductsLength] = useState(0);

    useEffect(() => {
        setProductsLength(
            cartItems?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );


    console.log(cartItems)
    return (
        <>

            <Navbar></Navbar>
            <ShoppingBox>
                <h2>Carrito</h2>

                {productsLength === 0 ? <div><h2>Tu Carrito esta vacio</h2></div> : cartItems.map((item) => <AddCar key={item.id} data={item}></AddCar>)}
                <BuyAll>
                    <div className="dates">
                        <h2>Direrccion:</h2>
                        <h2>Fecha de entrega:</h2>
                    </div>
                    <div className="buy">
                        <div>
                            <h2>Total= {total}</h2>
                            <h2>Total con envio= {total+300}</h2>
                        </div>
                        <button>Pagar</button>
                    </div>
                </BuyAll>
            </ShoppingBox>

        </>
    )
}