import {FormBox, FormContainer} from "../Login/LoginStyles.jsx";
import {InputBox1} from "../Login/InputBox1.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

export function BodyRegister() {
    let label1 = "Nombre",
        label2 = "Password",
        label3 = "Email",
        label4 = "Apellidos",
        label5 = "Numero de telefono";
    const [client, setclient] = useState({
        email: "",
        last_name: "",
        name: "",
        password: "",
        phone: ""
    })
    const handleChange = (name,vaule) => {
        setclient({[e.target.name]: e.target.value})
        console.log(client)
    }
    return (
        <>
            <FormBox>
                <div className="box-img-form"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Registro</h2></div>
                        <div><form>
                            <InputBox1 handleChange={handleChange} label={label1} name="nombre" type="text" id="name" htmlFor="name"></InputBox1>
                            <InputBox1 label={label4} name="last_name" type="text" id="password" htmlFor="password"></InputBox1>
                            <InputBox1 label={label3} name="email" type="email" id="email" htmlFor="email"></InputBox1>
                            <InputBox1 label={label2} name="password" type="password" id="password" htmlFor="password"></InputBox1>
                            <InputBox1 label={label5} name="phone" type="number" id="password" htmlFor="password"></InputBox1>
                            <input  className="submit" type="submit" value="Register" id="btn-form-register"  />
                            <div><Link to={"/LogIn"}>¿Ya tienes una cuenta? Entra Aqui</Link></div>
                        </form></div>
                    </div>
                </FormContainer>
            </FormBox>

        </>
    )
}