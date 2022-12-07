import {AddCar} from "./AddCar";
import {Navbar} from "../../Header/Navbar";
import {ShoppingBox, BuyAll, Buttom} from "./ShoppingStyles";
import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../actions/cartActions.jsx";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {CartContext} from "../../../Context/CartContext.jsx";
import { v4 as uuidv4 } from 'uuid';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";



export function ShoppingCarBody() {
    const state = useSelector((state) => state);
    const {addShipping,loginUser,address,payment} = useContext(CartContext)
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)
    const [open4,setOpen4] = useState(false)
    const [addressLength, setAddressLength] = useState(0)
    useEffect(() => {
        setAddressLength(
            address.reduce((previous, current) => previous + current, 0)
        );
    }, [addressLength]);
    const [paymentLength, setPaymentLength] = useState(0)
    useEffect(() => {
        setPaymentLength(
            payment.reduce((previous, current) => previous + current, 0)
        );
    }, [paymentLength]);
    const {db} = state.cart;
    const [productsLength, setProductsLength] = useState(0);
    console.log(payment)
    console.log(address)

    const total = db?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    const iva = total * 0.16

    //ORDER STATES
    const [shipping, setShipping] = useState({
        id:uuidv4(),
        dateExit: new Date(),
        dateReceived: new Date()
    })
    const [bill, setBill] = useState({
        amount: total,
        iva: iva,
        date: new Date()
    })
    const [statuss,setStatuss] = useState({
        status: "For Shipping",
        dateOrderReceived: new Date(),
        dateOrderEnded: new Date()

    })

    useEffect(() => {
        setProductsLength(
            db?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [db]);

    const handleclick = () =>{
            if(loginUser === false) {setOpen2(true)}
            else {
                if (paymentLength === 0) {
                    setOpen4(true)} else{
                    if(addressLength === 0) {
                            setOpen3(true)
                    } else {
                        if(productsLength === 0) {setOpen(true)}
                        else {
                            setOpen1(true)
                            addShipping(shipping,bill,statuss)
                        }
                    }
                }
            }
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };



    console.log(db)
    return (
        <>

            <Navbar></Navbar>
            <ShoppingBox>
                <div className="header">
                    <h2>Carrito</h2>
                    <Buttom onClick={() => dispatch(clearCart())}>Eliminar todo el carrito</Buttom>
                </div>
                {productsLength === 0 ? <div><h2>Tu Carrito esta vacio</h2></div> : db.map((item) => <AddCar key={item.id} data={item}></AddCar>)}
                <BuyAll>
                    <div className="dates">
                        <h2>Direrccion:</h2>
                        <h2>Fecha de entrega:</h2>
                    </div>
                    <div className="buy">
                        <div>
                            <h2>Total= {total}</h2>
                            <h2>Total con envio (+$300)= {total+300}</h2>
                        </div>
                        <button onClick={handleclick}>Pagar</button>
                    </div>
                </BuyAll>
            </ShoppingBox>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        PROFAVOR PARA REALIZAR UNA COMPRA TIENES QUE AGREGAR PRODUCTOS AL CARRITO
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        COMPRA REALIZADA CON EXITO
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        PORFAVOR INICIA SESION ANTES DE QUERER REALIZAR UNA COMPRA
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open3}
                onClose={handleClose3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        PORFAVOR AGREGA UNA DIRECCION DE ENVIO ANTES DE REALIZAR UNA COMPRA
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose3}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open4}
                onClose={handleClose4}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        PORFAVOR AGREGA UN METODO DE PAGO ANTES DE REALIZAR UNA COMPRA
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose4}>Ok Entiendo</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}