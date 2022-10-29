import {CakeContainer} from "./CakesStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function CakeBox({data}) {
    const {addItemToCart} = useContext(CartContext);

    let {id,img,name,about,price} = data;
    return (
        <>
        <CakeContainer>
            <h2>{name}</h2>
            <img src={`${img}`} />
            <div className="text">{about}</div>
            <h3>{price}</h3>
            <button onClick={() => addItemToCart(data)}>Comprar</button>
        </CakeContainer>


        </>
    )
}