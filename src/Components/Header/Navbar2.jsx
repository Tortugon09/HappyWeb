import {EffectM, NavContainer} from "./NavStyles";
import IconNav from "../../assets/Img/Header/IconHappy.svg"
import SHPCart from "../../assets/Img/Header/SHPCart.svg"
import {FaSistrix,FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../Context/CartContext.jsx";

export function Navbar2() {
    const {cartItems} = useContext(CartContext)
    const [productsLength, setProductsLength] = useState(0)
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous +current.amount, 0)
        );
    }, [cartItems]);

    return (
        <>
            <NavContainer>
                <div className="box-nav">
                    <div className="box1">
                        <img src={IconNav}/>
                        <div className="menu">
                            <li><Link to={"/HappyWeb"}>Home</Link></li>
                            <li><Link to={"/HappyWeb/Pasteles"}>Pasteles</Link></li>
                            <li><Link to={""}>ContactUs</Link> </li>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="search-box">
                            <input id="search-header" type="text" placeholder="Buscar"/>
                            <div className="btn">
                                <label htmlFor="search-header"><FaSistrix/></label>
                            </div>
                        </div>
                        <Link to={"/HappyWeb/ShoppingCar"}><FaShoppingCart/><p>{productsLength}</p></Link>
                        <h3><Link to={"/HappyWeb/LogIn"}>Login</Link> </h3>

                    </div>
                </div>

            </NavContainer>


        </>
    )
}