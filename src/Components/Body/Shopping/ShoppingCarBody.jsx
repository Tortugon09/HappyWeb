import {AddCar} from "./AddCar";
import {Navbar} from "../../Header/Navbar";
import {ShoppingBox, BuyAll, Buttom} from "./ShoppingStyles";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../actions/cartActions.jsx";



export function ShoppingCarBody() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {db} = state.cart;
    const [productsLength, setProductsLength] = useState(0);

    useEffect(() => {
        setProductsLength(
            db?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [db]);

    const total = db?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );


    console.log(db)
    return (
        <>

            <Navbar></Navbar>
            <ShoppingBox>
                <div className="header">
                    <h2>Carrito</h2>
                    <Buttom onClick={() => dispatch(clearCart())}>Eliminar todo el carrito</Buttom>
                </div>
                {productsLength === 0 ? <div><h2>Tu Carrito esta vacio</h2></div> : db.map((item) => <AddCar key={item.id} data={item}></AddCar>)}
                <BuyAll>
                    <div className="dates">
                        <h2>Direrccion:</h2>
                        <h2>Fecha de entrega:</h2>
                    </div>
                    <div className="buy">
                        <div>
                            <h2>Total= {total}</h2>
                            <h2>Total con envio (+$300)= {total+300}</h2>
                        </div>
                        <button>Pagar</button>
                    </div>
                </BuyAll>
            </ShoppingBox>

        </>
    )
}