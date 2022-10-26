import {FormBox, FormContainer, InputStyled} from "./LoginStyles";
import FormImg from "../../../assets/Img/Body/Form/FormImg.jpg"
import {useState} from "react";
import {InputBox1} from "./InputBox1";
import {Link} from "react-router-dom";

export function BodyLogin() {
    let label1 = "Username";
    let label2 = "Passoword";
    return (
        <>
            <FormBox>
                <div className="box-img-form"></div>
                <FormContainer>
                    <div className="form-box">
                        <div className="form-title"><h2>Log In</h2></div>
                        <div><form>
                            <InputBox1 label={label1} type="text" id="name" htmlFor="name">
                            </InputBox1>
                            <InputBox1 label={label2} type="password" id="password" htmlFor="password"></InputBox1>
                            <input  className="submit" type="submit" value="LogIn" id="btn-form-LogIn"  />
                            <div><Link to={"/Register"}>¿No tienes una cuenta? Registrate Aqui</Link></div>
                        </form></div>
                    </div>
                </FormContainer>
            </FormBox>

        </>
    )
}