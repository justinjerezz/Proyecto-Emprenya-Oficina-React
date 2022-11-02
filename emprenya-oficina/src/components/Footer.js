import React from "react";

import "../assets/css/General/normalize.css"
import "../assets/css/General/style.css"

class Footer extends React.Component
{
    render(){
        return(
            <footer className='footer bg-blue'>
                <div className='container'>
                    <div className='text-center'>
                        <img src={require("../assets/imagenes/b_logo-02.png")} className="footer__logo" alt="logo blanco" loading="lazy"></img>
                        <h2 className="c-blue-light">
                            <span className="text-transform-uppercase">La suite del emprendedor</span>
                            | Nuestro Whatsapp +34 600000
                        </h2>

                    </div>
                    <div className="mT-5 footer__container d-flex justify-content-between">
                        <div className="footer__box footer__box--1">
                            <h2 className="text-center fs-3 c-white">Menú</h2>
                            <ul className="footer__menu d-flex list-style-none mT-2">
                                <li className="text-center">
                                    <a href="https://emprenya.com/aprenya">
                                        <img src={require("../assets/imagenes/aprenya.png")} alt="emprenya link"></img>
                                    </a>
                                    <a href="https://blockainya.com"  className="mT-2">
                                        <img src={require("../assets/imagenes/blockchain.png")} alt="blockchain 1 ing"></img>
                                    </a>
                                </li>
                                <li className="text-center">
                                <a href="https://emprenya.com/impulsaya">
                                        <img src={require("../assets/imagenes/impulsaya.png")} alt="impulsaya link"></img>
                                    </a>
                                    <a href="https://lanzaya.com"  className="mT-2">
                                        <img src={require("../assets/imagenes/lanzaya.png")} alt="lanzaya link"></img>
                                    </a>
                                </li>
                            </ul>
                            <a href="https://emprenya.com/unete" className="text-transform-uppercase c-blue-light fs-2 text-decoration-none d-block text-center mT-3 fw-600">
                                ¡hazte afiliado
                            </a>
                        </div> 
                        <div className="text-center">
                                <h2 className="fs-3 c-white"> Aviso Legal</h2>
                                <ul className="list-style-none mT-2">
                                    <li className="mT-1">
                                        <a href="https://emprenya.com/terminos-legales"  className="text-decoration-none c-white fs-2 fw-300 font-jost">
                                            Terminos y Condiciones
                                        </a>
                                    </li>
                                    <li className="mT-1">
                                    <a href="https://emprenya.com/politica-de-privacidad"   className="text-decoration-none c-white fs-2 fw-300 font-jost">
                                            Politica de privacidad
                                        </a>
                                    </li>
                                    <li className="mT-1">
                                    <a href="https://emprenya.com/politica-de-cookies"   className="text-decoration-none c-white fs-2 fw-300 font-jost">
                                            Política de cookies
                                        </a>
                                    </li>
                                </ul>
                        </div> 
                        <div>
                            <h2 className="text-center fs-3 c-white">Ayuda</h2>
                            <ul className="text-center list-style-none mT-2 c-white fs-2">
                                <li>
                                    <h3>Contacto</h3> 
                                </li>
                                <li className="mT-1">
                                    <p>Escríbenos a:</p>
                                </li>
                                <li className="mT-1">
                                    <a href="mailto:consultas@emprenya.com" className="c-white text-decoration-none">consultas@emprenya.com</a>
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                    <div className="text-center pY-5 c-white">
                            <p className="fs-2">
                                2022 Todos los derechos reservados por emprenYa
                            </p>
                        </div>
                </div>
            </footer>
        )
    }
    
}
export default  Footer;