import {AddCar} from "./AddCar";
import {Navbar} from "../../Header/Navbar";
import {ShoppingBox, BuyAll, Buttom} from "./ShoppingStyles";
import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../actions/cartActions.jsx";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {CartContext} from "../../../Context/CartContext.jsx";
import { v4 as uuidv4 } from 'uuid';



export function ShoppingCarBody() {
    const state = useSelector((state) => state);
    const {addShipping} = useContext(CartContext)
    const dispatch = useDispatch();
    const {db} = state.cart;
    const [productsLength, setProductsLength] = useState(0);

    const total = db?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    const iva = total * 0.16

    //ORDER STATES
    const [shipping, setShipping] = useState({
        id:uuidv4(),
        dateExit: new Date(),
        dateReceived: new Date()
    })
    const [bill, setBill] = useState({
        amount: total,
        iva: iva,
        date: new Date()
    })
    const [statuss,setStatuss] = useState({
        status: "For Shipping",
        dateOrderReceived: new Date(),
        dateOrderEnded: new Date()

    })

    console.log(shipping)

    useEffect(() => {
        setProductsLength(
            db?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [db]);

    const handleclick = () =>{
        addShipping(shipping,bill,statuss)
    }


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
                        <button onClick={handleclick}>Pagar</button>
                    </div>
                </BuyAll>
            </ShoppingBox>

        </>
    )
}