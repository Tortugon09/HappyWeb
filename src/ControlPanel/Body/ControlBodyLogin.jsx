import {InputBox1} from "../../Components/Body/Login/InputBox1.jsx";
import {Link} from "react-router-dom";
import {FormBox, FormContainer} from "./LoginStyles.jsx";

export function ControlBodyLogin() {
    let label1 = "Username Admin";
    let label2 = "Passoword Admin";
    return (
        <>
            <FormBox>
                <div className="box-img-form-controlpanel"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Administracion</h2></div>
                        <div><form>
                            <InputBox1 label={label1} type="text" id="name" htmlFor="name">
                            </InputBox1>
                            <InputBox1 label={label2} type="password" id="password" htmlFor="password"></InputBox1>
                            <input  className="submit" type="submit" value="LogIn" id="btn-form-LogIn"  />
                            <div><Link to={"/HappyWeb/PanelHome"}>¿No tienes una cuenta? Registrate Aqui</Link></div>
                        </form></div>
                    </div>
                </FormContainer>
            </FormBox>
        </>
    )
}