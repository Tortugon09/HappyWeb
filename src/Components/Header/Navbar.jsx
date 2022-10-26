import {EffectM, NavContainer} from "./NavStyles";
import IconNav from "../../assets/Img/Header/IconHappy.svg"
import SHPCart from "../../assets/Img/Header/SHPCart.svg"
import {FaSistrix,FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom";

export function Navbar() {

    return (
        <>
            <NavContainer>
                <div className="box-nav">
                    <div className="box1">
                        <img src={IconNav}/>
                        <div className="menu">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/Pasteles"}>Pasteles</Link></li>
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
                        <FaShoppingCart/>
                        <h3><Link to={"/Login"}>Login</Link> </h3>

                    </div>
                </div>

            </NavContainer>
            <EffectM></EffectM>


        </>
    )
}