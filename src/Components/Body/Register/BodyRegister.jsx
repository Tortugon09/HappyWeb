import {FormBox, FormContainer} from "../Login/LoginStyles.jsx";
import {InputBox1} from "../Login/InputBox1.jsx";
import {Link} from "react-router-dom";

export function BodyRegister() {
    let label1 = "Nombre",
        label2 = "Password",
        label3 = "Email";

    return (
        <>
            <FormBox>
                <div className="box-img-form"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Registro</h2></div>
                        <div><form>
                            <InputBox1 label={label1} type="text" id="name" htmlFor="name">
                            </InputBox1>
                            <InputBox1 label={label3} type="email" id="email" htmlFor="email"></InputBox1>
                            <InputBox1 label={label2} type="password" id="password" htmlFor="password"></InputBox1>
                            <input  className="submit" type="submit" value="Register" id="btn-form-register"  />
                            <div><Link to={"/LogIn"}>¿Ya tienes una cuenta? Entra Aqui</Link></div>
                        </form></div>
                    </div>
                </FormContainer>
            </FormBox>

        </>
    )
}