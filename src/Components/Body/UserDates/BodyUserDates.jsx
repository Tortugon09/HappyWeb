import {FaGreaterThan} from "react-icons/fa";
import {UserContainer} from "./BodyUserStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {Link} from "react-router-dom";

export function BodyUserDates() {
    const {setLoginUser, userR, setUserR} = useContext(CartContext)
    const {name, lastName, phone, email} = userR.userInDb
    console.log(userR.userInDb)

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
                        <button>Cambiar datos personales</button>
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
                        <button>Cambiar datos de la cuenta</button>
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
        </>
    )
}