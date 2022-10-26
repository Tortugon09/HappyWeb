import {AddBox, Buttom} from "./ShoppingStyles";

export function AddCar(props) {
    return (
        <>
            <AddBox>
                <div className="img-add">
                    <img src={props.imgAdd}/>
                </div>
                <div className="dates-add">
                    <h3>{props.nameAdd}</h3>
                    <h3>{props.cantidadAdd}</h3>
                    <h3>{props.precioAdd}</h3>
                </div>
                <div className="bottoms-add">
                    <Buttom className="submit" type="submit" value="Eliminar" id="btn-delate-car"></Buttom>
                    <Buttom className="submit" type="submit" value="Eliminar" id="btn-post-car"></Buttom>
                </div>
            </AddBox>
        </>
    )
}