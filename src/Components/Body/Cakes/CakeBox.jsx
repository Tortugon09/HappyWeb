import {CakeContainer} from "./CakesStyles";
import {useContext} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import Img from "../../../assets/Img/ImgCake.png"
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart} from "../../../actions/cartActions.jsx";
import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {ReactNode} from "react";
function MyApp({data}) {
    const dispatch = useDispatch();
    const state =  useSelector((state => state))
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Se agrego Correctamente al carrito!', { variant });
        dispatch(addItemToCart(data))
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickVariant('success')}>Agregar</Button>
        </React.Fragment>
    );
}


export function CakeBox({data}) {
    let {id,name,description,price,cakePicture} = data;
    return (
        <>
        <CakeContainer>
            <h2>{name}</h2>
            <img src={cakePicture} alt="Img Cake"/>
            <div className="text">{description}</div>
            <h3>{price}</h3>
            <SnackbarProvider maxSnack={3}>
                <MyApp data={data} />
            </SnackbarProvider>
        </CakeContainer>


        </>
    )
}