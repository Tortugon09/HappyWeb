import {FaGreaterThan} from "react-icons/fa";
import {UserContainer} from "./BodyUserStyles";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {Link} from "react-router-dom";
import {Modal} from "../../../ControlPanel/Body/ProductsPanel/Modal.jsx";
import {Contenido} from "../../../ControlPanel/Body/ProductsPanel/BodyProductsStyles.jsx";
import {AddressDates} from "./AddressDates";
import {CakeBox} from "../Cakes/CakeBox.jsx";
import {PaymentDates} from "./PaymentDates";

export function BodyUserDates() {
    //USE OF THE CONTEXT
    const {setLoginUser,editUser, userR, setUserR, addAddress, address,payment,addPayment} = useContext(CartContext)

    //DESTRUCTURATION OF THE USER
    const {id ,name, lastName, phone, email} = userR.userInDb
    //STATES FOR THE USER
    const [modal1, setmodal1] = useState(false)
    console.log(userR.userInDb)
    const [updateUser, setUpdateUser] = useState({
        id: id ,
        name: name,
        password:"",
        lastName:lastName,
        phone: 0,
        email:"",
    });
    //STATES FOR THE ADDRESS
    const [addressLength, setAddressLength] = useState(0)
    useEffect(() => {
        setAddressLength(
            address.reduce((previous, current) => previous + current, 0)
        );
    }, [addressLength]);
    console.log(addressLength)
    const [modal2, setmodal2] = useState(false)
    const[newAddress, setNewAddress] = useState({
            state: "",
            city: "",
            street: "",
            houseNumber: "",
            zipCode: 0,
            clientId: id
        })
    //STATES FOR THE PAYMENT
    const [paymentLength, setPaymentLength] = useState(0)
    useEffect(() => {
        setPaymentLength(
            payment.reduce((previous, current) => previous + current, 0)
        );
    }, [paymentLength]);
    const[newPayment, setNewPayment] = useState({
            cardNumber: 0,
            dateExpiry: "",
            cardHolder: "",
            cardIssuer: "",
            cvv: 0,
            clientId: id
        })
    const [modal3, setmodal3] = useState(false)
    console.log(payment)



    //Handles for the update the user
    const handleChange = e => {
        setUpdateUser({...updateUser ,[e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        editUser(updateUser)
        setmodal1(!modal1)
    }
    //Handles for create a address
    const handleChange1= e=>{
        setNewAddress({...newAddress ,[e.target.name]: e.target.value})
    }
    const handleSubmit1 = e =>{
        e.preventDefault()
        addAddress(newAddress)
        setmodal2(!modal2)
    }
    //Handles for create a payment
    const handleChange2= e=>{
        setNewPayment({...newPayment ,[e.target.name]: e.target.value})
    }
    const handleSubmit2 = e =>{
        e.preventDefault()
        addPayment(newPayment)
        setmodal3(!modal3)
    }


    return (
        <>
            <UserContainer className="main-box">
                <div className="title">
                    <h2>Perfil</h2>
                    <Link to={"/HappyWeb/HappyWeb"}><button onClick={() => {
                        setUserR([])
                        setLoginUser(false)}}>Cerrar Sesion</button></Link>
                </div>
                <div className="dates">
                    <div className="title-date">
                        <h3>Datos Personales</h3>
                        <FaGreaterThan></FaGreaterThan>
                    </div>
                    <div className="content-dates">
                        <h4>Nombre: <span>{name}</span></h4>
                        <h4>Apellidos: <span>{lastName}</span> </h4>
                        <h4>Telefono: <span>{phone}</span></h4>
                    </div>
                    <div className="buttoms">
                        <button onClick={() => setmodal1(!modal1)}>Cambiar datos personales</button>
                    </div>
                </div>
                <div className="dates">
                    <div className="title-date">
                        <h3>Datos de la Cuenta</h3>
                        <FaGreaterThan></FaGreaterThan>
                    </div>
                    <div className="content-dates">
                        <h4>Email: <span>{email}</span></h4>
                        <h4>Password:</h4>
                    </div>
                    <div className="buttoms">
                        <button onClick={() => setmodal1(!modal1)}>Cambiar datos de la cuenta</button>
                    </div>
                </div>
                <div className="dates">
                    <div className="title-date">
                        <h3>Direcciones</h3>
                        <FaGreaterThan></FaGreaterThan>
                    </div>
                        {address.map((address) => <AddressDates key={address.id}  addressLength={addressLength}  data={address}/>) }
                    <div className="buttoms"><button onClick={ () => setmodal2(!modal2)}>Crear Nueva Direccion</button>
                    </div>
                </div>
                <div className="dates">
                    <div className="title-date">
                        <h3>Metodos de pago</h3>
                        <FaGreaterThan></FaGreaterThan>
                    </div>
                    {payment.map((payment) => <PaymentDates key={payment.id}  paymentLength={paymentLength}  data={payment}/>) }
                    <div className="buttoms">
                        <button onClick={() => setmodal3(!modal3)}>Crear un nuevo metodo de pago</button>
                    </div>
                </div>
            </UserContainer>

            {/* MODAL FOR UPDATE A USER*/}
            <Modal
                state={modal1}
                changestate={setmodal1}
                title="Agregar"
            >
                <Contenido>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input onChange={handleChange} name="email" type="email" id="name" htmlFor="email">
                        </input>
                        <label>Password</label>
                        <input onChange={handleChange} name="password" type="text" id="password" htmlFor="password">
                        </input>
                        <label>Phone</label>
                        <input onChange={handleChange} name="phone" type="number" id="phone" htmlFor="phone">
                        </input>
                        <button>Agregar</button>
                    </form>
                </Contenido>
            </Modal>

            {/* MODAL FOR CREATE A ADDRESS*/}
            <Modal
                state={modal2}
                changestate={setmodal2}
                title="Agregar una direccion nueva"
            >
                <Contenido>
                    <form onSubmit={handleSubmit1}>
                        <label>Estado</label>
                        <input onChange={handleChange1} name="state" type="text" id="state" htmlFor="state">
                        </input>
                        <label>Ciudad</label>
                        <input onChange={handleChange1} name="city" type="text" id="city" htmlFor="city">
                        </input>
                        <label>Calle y Colonia</label>
                        <input onChange={handleChange1} name="street" type="text" id="street" htmlFor="street">
                        </input>
                        <label>Numero de casa</label>
                        <input onChange={handleChange1} name="houseNumber" type="number" id="houseNumber" htmlFor="houseNumber">
                        </input>
                        <label>Codigo postal</label>
                        <input onChange={handleChange1} name="zipCode" type="number" id="zipCode" htmlFor="zipCode">
                        </input>
                        <button>Agregar</button>
                    </form>
                </Contenido>
            </Modal>
            {/* MODAL FOR CREATE A ADDRESS*/}
            <Modal
                state={modal3}
                changestate={setmodal3}
                title="Agregar un nuevo metodo de pago"
            >
                <Contenido>
                    <form onSubmit={handleSubmit2}>
                        <label>Numero de tarjeta</label>
                        <input onChange={handleChange2} name="cardNumber" type="number" id="cardNumber" htmlFor="cardNumber">
                        </input>
                        <label>Fecha de caducidad</label>
                        <input onChange={handleChange2} name="dateExpiry" type="text" id="dataExpiry" htmlFor="dataExpiry">
                        </input>
                        <label>Dueño de la tarjeta</label>
                        <input onChange={handleChange2} name="cardHolder" type="text" id="cardHolder" htmlFor="cardHolder">
                        </input>
                        <label>Remitente de la tarjeta</label>
                        <input onChange={handleChange2} name="cardIssuer" type="text" id="cardIssuer" htmlFor="cardIssuer">
                        </input>
                        <label>CVV</label>
                        <input onChange={handleChange2} name="cvv" type="number" id="cvv" htmlFor="cvv">
                        </input>
                        <button>Agregar</button>
                    </form>
                </Contenido>
            </Modal>
        </>
    )
}