import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function AddressDates({data, addressLength}) {
    const {delateAddress} = useContext(CartContext)
    const {id,state,city,street,houseNumber,zipCode,clienId} =data
    console.log(data)
    return(
        <>
            <div className="content-dates">
            <h4>Estado: <span>{state}</span></h4>
            <h4>Ciudad: <span>{city}</span></h4>
            <h4>Calle: <span>{street}</span></h4>
            <h4>Numero de casa: <span>{houseNumber}</span></h4>
            <h4>Codigo Postal: <span>{zipCode}</span></h4>
            </div>
            <div className="buttoms">
                {addressLength === 0 ? <></> : <button>Actualizar direccion</button>}
                <button onClick={() =>delateAddress(id)}>  Borrar Direccion</button>
            </div>
        </>
    )
}