import {FaGreaterThan} from "react-icons/fa";
import {UserContainer} from "./BodyUserStyles";
import {useContext, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {Link} from "react-router-dom";
import {Modal} from "../../../ControlPanel/Body/ProductsPanel/Modal.jsx";
import {Contenido} from "../../../ControlPanel/Body/ProductsPanel/BodyProductsStyles.jsx";

export function BodyUserDates() {
    const {setLoginUser,editUser, userR, setUserR} = useContext(CartContext)
    const {id ,name, lastName, phone, email} = userR.userInDb
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

    const handleChange = e => {
        setUpdateUser({...updateUser ,[e.target.name]: e.target.value})
        console.log(updateUser)
    }
    const handleSubmit = e => {
        e.preventDefault()
        editUser(updateUser)
        console.log(userR)
        setmodal1(!modal1)
    }

    return (
        <>
            <UserContainer className="main-box">
                <div className="title">
                    <h2>Perfil</h2>
                    <Link to={"/HappyWeb"}><button onClick={() => {
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
                    <div className="content-dates">
                        <h4>Nombre de la direccion:</h4>
                    </div>
                    <div className="buttoms">
                        <button>Cambiar direccion</button>
                    </div>
                </div>
            </UserContainer>
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
        </>
    )
}