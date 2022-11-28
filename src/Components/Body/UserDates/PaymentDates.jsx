import {useContext, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {Modal} from "../../../ControlPanel/Body/ProductsPanel/Modal.jsx";
import {Contenido} from "../../../ControlPanel/Body/ProductsPanel/BodyProductsStyles.jsx";

export function PaymentDates({data,paymentLength}) {
    const {delatePayment, putPayment} = useContext(CartContext)
    const {id,cardNumber,dateExpiry,cardHolder,cardIssuer,cvv,clientId} =data
    const [modal1, setmodal1] = useState(false)
    const[newPayment, setNewPayment] = useState(
        {
            id: id,
            cardNumber: 0,
            dateExpiry: "",
            cardHolder: "",
            cardIssuer: "",
            cvv: 0,
            clientId: clientId
        }
    )
    console.log(data)
    const handleChange= e=>{
        setNewPayment({...newPayment ,[e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        putPayment(newPayment)
        setmodal1(!modal1)
    }
    return(
            <>
            <div className="content-dates">
                <h4>Numero de tarjeta: <span>{cardNumber}</span></h4>
                <h4>Dueño de la tarjeta: <span>{cardHolder}</span></h4>
            </div>
            <div className="buttoms">
                {paymentLength === 0 ? <></> : <button onClick={() =>setmodal1(!modal1)}>Actualizar Metodo de pago</button>}
                <button onClick={() =>delatePayment(id)}>  Borrar Metodo de pago</button>
            </div>


            {/* MODAL FOR UPDATE A ADDRESS*/}
            <Modal
                state={modal1}
                changestate={setmodal1}
                title="Agregar una direccion nueva"
            >
                <Contenido>
                    <form onSubmit={handleSubmit}>
                        <label>Numero de tarjeta</label>
                        <input onChange={handleChange} name="cardNumber" type="number" id="cardNumber" htmlFor="cardNumber">
                        </input>
                        <label>Fecha de caducidad</label>
                        <input onChange={handleChange} name="dateExpiry" type="text" id="dataExpiry" htmlFor="dataExpiry">
                        </input>
                        <label>Dueño de la tarjeta</label>
                        <input onChange={handleChange} name="cardHolder" type="text" id="cardHolder" htmlFor="cardHolder">
                        </input>
                        <label>Remitente de la tarjeta</label>
                        <input onChange={handleChange} name="cardIssuer" type="text" id="cardIssuer" htmlFor="cardIssuer">
                        </input>
                        <label>CVV</label>
                        <input onChange={handleChange} name="cvv" type="number" id="cvv" htmlFor="cvv">
                        </input>
                        <button>Agregar</button>
                    </form>
                </Contenido>
            </Modal>
        </>
    )
}