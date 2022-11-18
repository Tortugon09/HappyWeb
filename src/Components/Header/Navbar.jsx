import {EffectM, NavContainer} from "./NavStyles";
import IconNav from "../../assets/Img/Header/IconHappy.svg"
import {FaSistrix,FaShoppingCart,FaHome,FaBirthdayCake, FaUserAlt} from "react-icons/fa"
import {IconContext} from "react-icons"
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../Context/CartContext.jsx";

export function Navbar() {
    const {cartItems} = useContext(CartContext)
    const [productsLength, setProductsLength] = useState(0)
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous +current.amount, 0)
        );
    }, [cartItems]);
    console.log(cartItems)

    return (
        <>
            <NavContainer>
                <IconContext.Provider value={{ style: { fontSize: "2.5rem",} }}>
                <div className="box-nav">
                    <div className="box1">
                        <img src={IconNav}/>
                        <div className="menu">
                            <div className="mobile-menu">
                                <li><Link to={"/HappyWeb"}><FaHome></FaHome></Link></li>
                                <li><Link to={"/HappyWeb/Pasteles"}><FaBirthdayCake></FaBirthdayCake></Link></li>
                                <li><Link to={"/HappyWeb/ShoppingCar"}><p>{productsLength}</p><FaShoppingCart/></Link></li>
                                <li><Link to={"/HappyWeb/LogIn"}><FaUserAlt></FaUserAlt></Link></li>
                            </div>
                            <div className="menu-desktop">
                                <li><Link to={"/HappyWeb"}>Home</Link></li>
                                <li><Link to={"/HappyWeb/Pasteles"}>Pasteles</Link></li>
                            </div>
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
                        <h3><Link to={"/HappyWeb/LogIn"} >Login </Link></h3>

                    </div>
                </div>
                </IconContext.Provider>
            </NavContainer>
            <EffectM className="menu-back"></EffectM>


        </>
    )
}