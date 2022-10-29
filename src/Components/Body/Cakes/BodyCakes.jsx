import {CakeBox} from "./CakeBox";
import ImgTry from "../../../assets/Img/ImgCake.png"
import {BodyCakeStyled, CakeBodyContainer, NavCakes} from "./CakesStyles";
import Img1 from "../../../assets/Img/Body/Cakes/Img1.svg"
import Img2 from "../../../assets/Img/Body/Cakes/Img2.png"
import Img3 from "../../../assets/Img/Body/Cakes/Img3.png"
import Data from "../../../Data/Data.jsx";

export function BodyCakes() {
    return (
        <>
            <BodyCakeStyled>
                <div className="nav-container">
                    <NavCakes>
                        <div className="head-nav">
                            <div className="nav-img">
                                <img src={Img1}/>
                                <img src={Img2}/>
                                <img src={Img3}/>
                            </div>
                            <h2>¿Quieres un Pastel?</h2>
                        </div>
                        <ul>
                            <li>Cumpleaños</li>
                            <li>Pesonalizados</li>
                            <li>Dias Festivos</li>
                        </ul>
                    </NavCakes>
                </div>
                <CakeBodyContainer>
                    {Data.products.map((product) => <CakeBox key={product.id}   data={product}/>) }
                </CakeBodyContainer>
            </BodyCakeStyled>
        </>
    )
}