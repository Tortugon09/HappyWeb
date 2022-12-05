import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {Modal} from "../../../ControlPanel/Body/ProductsPanel/Modal.jsx";
import {Contenido} from "../../../ControlPanel/Body/ProductsPanel/BodyProductsStyles.jsx";

export function AddressDates({data, addressLength}) {
    const {delateAddress,putAddress} = useContext(CartContext)
    const {id,state,city,street,houseNumber,zipCode,clienId} =data
    const [modal1, setmodal1] = useState(false)
    const[newAddress, setNewAddress] = useState({
            id: id,
            state: "",
            city: "",
            street: "",
            houseNumber: "",
            zipCode: 0,
            clientId: clienId
        })
    console.log(data)
    const handleChange= e=>{
        setNewAddress({...newAddress ,[e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        putAddress(newAddress)
        setmodal1(!modal1)
    }
    return(
        <>
            <div className="content-dates">
            <h4>Calle: <span>{street}</span></h4>
            <h4>Numero de casa: <span>{houseNumber}</span></h4>
            <h4>Codigo Postal: <span>{zipCode}</span></h4>
            </div>
            <div className="buttoms">
                {addressLength === 0 ? <></> : <button onClick={() =>setmodal1(!modal1)}>Actualizar direccion</button>}
                <button onClick={() =>delateAddress(id)}>  Borrar Direccion</button>
            </div>


            {/* MODAL FOR UPDATE A ADDRESS*/}
            <Modal
                state={modal1}
                changestate={setmodal1}
                title="Agregar una direccion nueva"
            >
                <Contenido>
                    <form onSubmit={handleSubmit}>
                        <label>Estado</label>
                        <input onChange={handleChange} name="state" type="text" id="state" htmlFor="state">
                        </input>
                        <label>Ciudad</label>
                        <input onChange={handleChange} name="city" type="text" id="city" htmlFor="city">
                        </input>
                        <label>Calle y Colonia</label>
                        <input onChange={handleChange} name="street" type="text" id="street" htmlFor="street">
                        </input>
                        <label>Numero de casa</label>
                        <input onChange={handleChange} name="houseNumber" type="number" id="houseNumber" htmlFor="houseNumber">
                        </input>
                        <label>Codigo postal</label>
                        <input onChange={handleChange} name="zipCode" type="number" id="zipCode" htmlFor="zipCode">
                        </input>
                        <button>Agregar</button>
                    </form>
                </Contenido>
            </Modal>
        </>
    )
}