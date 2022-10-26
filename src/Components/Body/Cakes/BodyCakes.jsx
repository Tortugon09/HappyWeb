import {CakeBox} from "./CakeBox";
import ImgTry from "../../../assets/Img/ImgCake.png"
import {BodyCakeStyled, CakeBodyContainer, NavCakes} from "./CakesStyles";
import Img1 from "../../../assets/Img/Body/Cakes/Img1.svg"
import Img2 from "../../../assets/Img/Body/Cakes/Img2.png"
import Img3 from "../../../assets/Img/Body/Cakes/Img3.png"

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
                    <CakeBox nameCake={"Nombre del Pastel"} imgs={ImgTry} texts={"Lorem Ipsum is simply " +
                        "dummy text of " +
                        "the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " +
                        "text " +
                        "ever since the 1500s, when an unknown printer took a galle"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawddwad awddwadawddwadawd" +
                        "dwadawddwadaw ddw adawddwada wddwad awdd wadaw d" +
                        "dwad awddw da wddwa dawdd wada wddwadawdd wa dawdwddwadawdd wa dawdwddwadawdd wa dawd" +
                        "wddwadawdd wa dawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                    <CakeBox nameCake={"dwdwdw"} imgs={ImgTry} texts={"dwadawd"} price={"dwdw"}>
                    </CakeBox>
                </CakeBodyContainer>
            </BodyCakeStyled>
        </>
    )
}