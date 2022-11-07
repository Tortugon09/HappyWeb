import {AddBox, Buttom} from "./ShoppingStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import Img from "../../../assets/Img/ImgCake.png"

export function AddCar(data) {
    let {id,img,name,about,price} = data;
    console.log(data.data.name)
    const {removeItemFromCart, addItemToCart} = useContext(CartContext)
    return (
        <>
            <AddBox>
                <div className="cake-data">
                    <div className="img-add">
                        <img src={Img}/>
                    </div>
                    <div className="dates-add">
                        <h3 className="name">{data.data.name}</h3>
                        <h3>Cantidad = {data.data.amount}</h3>
                        <h3>Total = ${data.data.price * data.data.amount}</h3>
                    </div>
                </div>

                <div className="bottoms-add">
                    <div><Buttom className="submit" onClick={() => removeItemFromCart(data.data)}>Eliminar Pastel</Buttom></div>
                    <div><Buttom className="submit" onClick={() => addItemToCart(data.data)}>Agregar 1 Pastel Mas</Buttom></div>
                </div>
            </AddBox>
        </>
    )
}