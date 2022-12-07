import {FormBox, FormContainer, InputStyled} from "./LoginStyles";
import FormImg from "../../../assets/Img/Body/Form/FormImg.jpg"
import {InputBox1} from "./InputBox1";
import {useContext, useImperativeHandle, useState} from "react";
import {Link, Navigate, useHref, useNavigate} from "react-router-dom";
import {CartContext} from "../../../Context/CartContext.jsx";
import axios from "axios";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";

export function BodyLogin() {
    let label1 = "Username";
    let label2 = "Passoword";
    const {login,getAddress,getPayment,token, setUserR,userR,setOpen,open} = useContext(CartContext);
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
    const handleClose = () => {
        setOpen(false);
    };

    console.log(token)
    const loginDates = async () => {
        const {email} = user
        await axios({
            method: 'get',
            url: `http://localhost:8080/client/findByEmail?email=${email}`,
            headers: {'Authorization': `${token}`}
        }).then(function (response) {
                console.log(response.data)
                setUserR(response.data);
            }).catch(function (error) {
                console.log(error);
            })

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        login(user);
        if (token === "")  {
            console.log("error")
        } else {
            console.log(userR)
            loginDates(user)

        }
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        TU EMAIL O CONTRASEÑA SON INCORRECTOS PORFAVOR VERIFICA TUS CREDENCIALES
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}