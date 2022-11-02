import React from "react";
import { Link } from "react-router-dom";

import '../assets/css/General/style.css'
class Cabecera extends React.Component {
    render() {
        return (    
            <nav>
                <div className='bg-blue'>
                    <div className="nav__top container pY-2 pX-3 d-flex justify-content-between align-items-center">
                        {/* Link que redirecciona a afiliados */}
                        <a href='https://emprenya.com/afiliados' className="mL-auto mR-2 c-white text-decoration-none">Afiliados</a>
                        <div className='registro'>
                            {/*link a registros redirecciones a la direccion de registro*/}
                            <Link to='./registro' className="mL-auto mR-1 c-white text-decoration-none">Registro</Link>
                        </div>
                        {/* Link a login, redirecciona a la direccion de login */}
                            <Link to="./" className="c-white text-decoration-none">Login</Link>
                    </div>
                </div>
                <div className="nav__center container d-flex justify-content-between align-items-center pX-2 mT-1 gap-2">
                        <div className="box--1">
                            <a href=  "/">
                                <img src= {require(`../assets/imagenes/emprenya.png`)} className='logo--1' alt="logo-Emprenya"></img>
                            </a>
                        </div>
                        <div className="className=box--2 d-flex gap-2">
                        <div>
                                <a href="/impulsaya">
                                    <img src={require(`../assets/imagenes/impulsaya.png`)} alt="logo" className="logo--2"></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://lanzaya.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require(`../assets/imagenes/lanzaya.png`)} alt="logo" className='logo--3'></img>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <img src={require(`../assets/imagenes/aprenya.png`)} alt="logo" className='logo--4'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://blockchainya.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require(`../assets/imagenes/blockchain.png`)} alt="logo" className='logo--5'></img>
                                </a>
                            </div>
                          
                        </div>
                </div>
            </nav>
        )
    }
}
export default Cabecera;