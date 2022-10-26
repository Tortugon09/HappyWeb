import {FooterContainer} from "./FooterStyles";
import { FaRegRegistered } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <FooterContainer>
                <div className="box-footer">
                    <div className="box1">
                        <h2>Happy</h2>
                        <div className="text">Nosotros creamos los pasteles de tus sueños, si puedes soñarlo puede
                            hornearse</div>
                        <div className="derechos"><FaRegRegistered/> 2022 Urban.Todos los derechos reservados</div>
                    </div>
                    <div className="box2">
                        <h3>Explorar</h3>
                        <div className='list-footer'>
                            <a>Home</a>
                            <a>Pasteles</a>
                            <a>Contact Us</a>
                            <a>About Us</a>
                        </div>
                    </div>
                    <div className="box3">
                        <h3>Ubicacion y Telefono</h3>
                        <div className='list-footer'>
                            <a>Urban So. Av samaria Mz 6 Lote 15 Col.Nuevo Eden, Tuxtla Gutierrez Chiapas,
                                Mexico, 961 334 2750</a>
                        </div>
                    </div>
                    <div className="box4">
                        <h3>Siguenos</h3>
                        <div className='list-footer'>
                            <a>Instagram</a>
                            <a>Twitter</a>
                            <a>Facebook</a>
                        </div>
                    </div>
                    <div className="box5">
                        <h3>Legal</h3>
                        <div className='list-footer'>
                            <a>Terms</a>
                            <a>Privacy</a>
                        </div>
                    </div>
                </div>
            </FooterContainer>


        </>
    )
}