import {AboutUsContainer, BodyContainer, HomeCakeContainer} from "./HomeStyles";
import imgHome from "../../../assets/Img/Body/Home/img-home.png"
import cake1 from "../../../assets/Img/Body/Home/cake1.png"
import cake2 from "../../../assets/Img/Body/Home/cake2.png"
import cake3 from "../../../assets/Img/Body/Home/cake3.png"
import { FaAngleDoubleRight } from "react-icons/fa";
import about1 from '../../../assets/Img/Body/Home/about01.png'
import about2 from '../../../assets/Img/Body/Home/about03.png'
import about3 from '../../../assets/Img/Body/Home/about02.png'
import {Link} from "react-router-dom";


export function BodyHome() {
    return (
        <>
            <BodyContainer>
                <div className='box-home'>
                    <div className='box1-img'>
                        <img src={imgHome}/>
                    </div>
                    <div className="text1">
                        <h1>HAPPY</h1>
                        <h2>POSTRES Y MAS</h2>
                        <h4><Link to={"/HappyWeb/Pasteles"}>ORDENAR AHORA</Link> </h4>
                    </div>
                </div>
            </BodyContainer>
            <HomeCakeContainer>
                <div className="box-cake">
                    <div className="cake1 , boxs">
                        <img src={cake1}/>
                        <Link to={"/HappyWeb/Pasteles"}><h3>Cumpleaños<FaAngleDoubleRight/></h3></Link>
                    </div>
                    <div className="cake2 , boxs">
                        <img src={cake2}/>
                        <Link to={"/HappyWeb/Pasteles"}><h3>Personalizados <FaAngleDoubleRight/></h3></Link>
                    </div>
                    <div className="cake3 , boxs">
                        <img src={cake3}/>
                        <Link to={"/HappyWeb/Pasteles"}> <h3>Dias Festivos <FaAngleDoubleRight/></h3></Link>
                    </div>
                </div>
            </HomeCakeContainer>
            <AboutUsContainer>
                <div className="box-about">
                    <h1>Sobre Nosotros</h1>
                    <div className="about-text">Esta microempresa nace con la finalidad de brindar a nuestros clientes y amigos un producto de calidad, pero sobre todo que sea accesible para todas las familias.<br/><br/>
                        Dentro de nuestra entidad contamos con un sin número de establecimientos que ofrecen los mismos productos, pero a un costo excesivo, es por ello por lo que nuestra política es simple <span>“Sabor, Atención y Buen Servicio a Bajo Costo”.</span>
                    </div>
                    <div className='img-collague'>
                        <img src={about1}/>
                        <img src={about2}/>
                        <img src={about3}/>
                    </div>
                </div>
            </AboutUsContainer>
        </>
    )
}