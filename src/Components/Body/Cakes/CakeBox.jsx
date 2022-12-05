import {CakeContainer} from "./CakesStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import Img from "../../../assets/Img/ImgCake.png"
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart} from "../../../actions/cartActions.jsx";

export function CakeBox({data}) {
    const dispatch = useDispatch();
    const state =  useSelector((state => state))
    let {id,name,description,price,cakePicture} = data;
    return (
        <>
        <CakeContainer>
            <h2>{name}</h2>
            <img src={cakePicture} alt="Img Cake"/>
            <div className="text">{description}</div>
            <h3>{price}</h3>
            <button onClick={() => dispatch(addItemToCart(data))}>Agregar</button>
        </CakeContainer>


        </>
    )
}