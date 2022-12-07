import {AddBox, Buttom} from "./ShoppingStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import Img from "../../../assets/Img/ImgCake.png"
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeAllFromCart} from "../../../actions/cartActions.jsx";
import {removeItemFromCart} from "../../../actions/cartActions.jsx";

export function AddCar(data) {
    const dispatch = useDispatch()
    let {id,img,name,about,price} = data;
    console.log(data.data.name)
    return (
        <>
            <AddBox>
                <div className="cake-data">
                    <div className="img-add">
                        <img src={data.data.cakePicture}/>
                    </div>
                    <div className="dates-add">
                        <h3 className="name">{data.data.name}</h3>
                        <h3>Cantidad = {data.data.amount}</h3>
                        <h3>Total = ${data.data.price * data.data.amount}</h3>
                    </div>
                </div>

                <div className="bottoms-add">
                    <div><Buttom className="submit" onClick={() => dispatch(removeItemFromCart(data.data))}>Eliminar 1 Pastel</Buttom></div>
                    <div><Buttom className="submit" onClick={() => dispatch(removeAllFromCart(data.data))}>Eliminar Todos</Buttom></div>
                    <div><Buttom className="submit" onClick={() => dispatch(addItemToCart(data.data))}>Agregar 1 Pastel Mas</Buttom></div>
                </div>
            </AddBox>
        </>
    )
}