import {FormBox, FormContainer, InputStyled} from "./LoginStyles";
import FormImg from "../../../assets/Img/Body/Form/FormImg.jpg"
import {InputBox1} from "./InputBox1";
import {useContext, useImperativeHandle, useState} from "react";
import {Link, Navigate, useHref, useNavigate} from "react-router-dom";
import {CartContext} from "../../../Context/CartContext.jsx";

export function BodyLogin() {
    let label1 = "Username";
    let label2 = "Passoword";
    const {login,getAddress,getPayment} = useContext(CartContext);
    const [user, setuser] = useState({
        email: "",
        lastName: "",
        name: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        setuser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login(user);
        location.reload(true)
    }

    return (
        <>
            <FormBox>
                <div className="box-img-form"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Log In</h2></div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                                <label htmlFor="password">Contraseña</label>
                                <input className="input" onChange={handleChange} name="password" type="password" id="password" htmlFor="password" required></input>
                                <Link to={"/HappyWeb/Register"}>No tienes cuenta? registrate aqui</Link>
                                <input className="submit" type="submit" value="Login" id="btn-form-register" required/>
                            </form>
                        </div>
                    </div>
                </FormContainer>
            </FormBox>

        </>
    )
}