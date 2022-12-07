import {FormBox, FormContainer} from "../Login/LoginStyles.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createUser} from "../../../actions/userActions.jsx";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function BodyRegister() {
    const dispatch = useDispatch()
    const {createUserPost} = useContext(CartContext);
    const [client, setclient] = useState({
        email: "",
        lastName: "",
        name: "",
        password: "",
        phone: ""
    })
    const handleChange = (e) => {
        setclient({...client,[e.target.name]: e.target.value})
        console.log(client)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserPost(client);
    }

    return (
        <>
            <FormBox>
                <div className="box-img-form"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Registro</h2></div>
                        <div><form onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre</label>
                            <input className="input" onChange={handleChange} name="name" type="text" id="name" htmlFor="name" required></input>
                            <label htmlFor="lastname">Apellidos</label>
                            <input className="input" onChange={handleChange} name="lastName" type="text" id="lastname" htmlFor="lastname" required></input>
                            <label htmlFor="email">Email</label>
                            <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                            <label htmlFor="password">Contraseña</label>
                            <input className="input" onChange={handleChange} name="password" type="password" id="password" htmlFor="password" required></input>
                            <label htmlFor="phone">Numero de Telefono (10 DIGITOS REQUERIDOS)</label>
                            <input className="input" onChange={handleChange} name="phone" type="number" id="phone" htmlFor="phone" required></input>
                            <input className="submit" type="submit" value="Register" id="btn-form-register" required/>
                            <div><Link to={"/HappyWeb/LogIn"}>¿Ya tienes una cuenta? Entra Aqui</Link></div>
                        </form></div>
                    </div>
                </FormContainer>
            </FormBox>

        </>
    )
}