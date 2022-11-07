import {EffectM, NavContainer} from "./NavStyles";
import IconNav from "../../assets/Img/Header/IconHappy.svg"
import {FaSistrix,FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom";

export function NavbarPanel() {
    return (
        <>
            <NavContainer>
                <div className="box-nav">
                    <div className="box1">
                        <div className="menu">
                            <li><Link to={"/HappyWeb/ControlPanel/Products"}>Products</Link></li>
                        </div>
                    </div>
                    <div className="box2">
                        <h3><Link to={"/HappyWeb/LogIn"}>Admin1</Link> </h3>

                    </div>
                </div>

            </NavContainer>


        </>
    )
}