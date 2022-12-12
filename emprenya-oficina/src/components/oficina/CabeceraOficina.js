import React, {useState} from "react";
import "../../assets/css/Oficina/estilosCabeceraOficina.css"
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function HeaderPrincipal(){
        const [dropdown, setDropdown]=useState(false);
        const [dropdown2, setDropdown2]=useState(false);

        const abrirCerrar = () => {
            setDropdown(!dropdown);
        }

        const abrirCerrar2 = () => {
            setDropdown2(!dropdown2);
        }
        return (    
            <div className="header-contenedor">
                <div className="header-container" > 
                    <div className="header-box1  ">
                        <img src={require(`../../assets/imagenes/emprenya.png`)} alt="logo_header"/>
                    </div>
                    <div className="header-box2">
                        <div className="header-box2-1">
                            <h4 className="titulo_cabecera c-blue-dark">Bienvenid@ a Emprenya </h4>
                        </div>
                        <div className="header-box2-2">
                            <ul>
                                <li className="cabecera-listaImg">
                                    <Dropdown isOpen={dropdown} toggle={abrirCerrar}>
                                        <DropdownToggle  className="drop_header">
                                        <img src={require(`../../assets/imagenes/es.png`)} alt="bandera_españa" className="header_bandera"/>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropMenu_header"> 
                                            <DropdownItem className="dropItem_header">
                                                    <img src={require(`../../assets/imagenes/es.png`)} alt="bandera_españa"/> <label>Castellano</label>
                                            </DropdownItem>
                                            <br/>
                                            <DropdownItem className="dropItem_header">
                                                <img src={require(`../../assets/imagenes/en.png`)} alt="bandera_inglesa"/> <label>English</label>
                                            </DropdownItem>
                                        </DropdownMenu>                                        
                                    </Dropdown>
                                </li>
                                <li className="cabecera-listaImg ">  
                                    <Dropdown isOpen={dropdown2} toggle={abrirCerrar2}>
                                        <DropdownToggle className="drop_header">
                                            <img src={require(`../../assets/imagenes/oficina/user-emprenya.png`)} alt="usuario" className=" header_user" id="dropdownMenuImg1"/>
                                        </DropdownToggle>
                                        <DropdownMenu className="container-menu">
                                            <DropdownItem className="container-cabecera-card">
                                                <div className="cabecera-card">
                                                    <div className="cabecera-card-body">
                                                        <div className="cabecera-card-datos">
                                                            <div className="cabecera-card-imagen">
                                                                <img src={require(`../../assets/imagenes/oficina/user-blanco.png`)} alt="usuario" className=" header_user" id="dropdownMenuImg1"/>
                                                            </div>
                                                            <div className="cabecera-card-texto">
                                                                <span>Nombre  apellidos</span><br></br>
                                                                <a href="/">sagfyaguig@widitek.com</a>
                                                            </div>
                                                        </div>
                                                    <div className="cabecera-card-acciones">
                                                    <br/>
                                                        <div><a href='/' class="header-enlaces"><img src={require(`../../assets/imagenes/oficina/icone-utilisateur-gris.png`)} alt="usuario" className=" header_icon" id="dropdownMenuImg1"/><span>Mis datos</span></a></div><br/>
                                                        <div><a href='/' class="header-enlaces"><img src={require(`../../assets/imagenes/oficina/formulario.webp`)} alt="usuario" className=" header_icon" id="dropdownMenuImg1"/><span>subscripciones activas</span></a></div><br/>
                                                        <br/>
                                                        <a href='/' class="header-button">Salir</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>                                        
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        
    )
}
