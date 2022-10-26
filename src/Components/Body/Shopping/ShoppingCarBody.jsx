import {AddCar} from "./AddCar";
import ImgTry from "../../../assets/Img/ImgCake.png"

export function ShoppingCarBody() {
    return (
        <>
            <AddCar imgAdd={ImgTry} nameAdd='Nombre del pastel' cantidadAdd='10' precioAdd='100'></AddCar>
        </>
    )
}