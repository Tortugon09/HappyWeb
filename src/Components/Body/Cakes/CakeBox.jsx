import {CakeContainer} from "./CakesStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import Img from "../../../assets/Img/ImgCake.png"

export function CakeBox({data}) {
    const { addItemToCart} = useContext(CartContext);

    let {id,name,description,price} = data;
    return (
        <>
        <CakeContainer>
            <h2>{name}</h2>
            <img src={Img}/>
            <div className="text">{description}</div>
            <h3>{price}</h3>
            <button onClick={() => addItemToCart(data)}>Agregar</button>
        </CakeContainer>


        </>
    )
}