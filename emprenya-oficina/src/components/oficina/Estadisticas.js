import React, {useState} from "react";
import "../../assets/css/Oficina/estilosEstadisticas.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { SlDrawer, SlHandbag } from "react-icons/sl";
import { BiCoinStack } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import Grafica1 from "./grafica1";
import Grafica2 from "./grafica2";

export default function Estadisticas(){
        const [dropdown3, setDropdown3]=useState(false);

        const abrirCerrar3 = () => {
            setDropdown3(!dropdown3);
        }

        return(
            <>
                <div className="m-grid__item--fluid main-stats">
                    <div className="alerta-stats">
                        <div className="row">
                            <div className="col-xl-12">
                                 
                            </div>
                        </div>
                    </div>
                    <div className="contenido-stats">
                        <div className="subheader-stats">
                            <div className="d-flex flex-row-reverse">
                                <div className="contenido-stats-subheader">
                                    <span>
                                        <span className="subheader-stats-titulo">Este mes:</span>
                                        <span className="subheader-stats-mes">01-11-22 | 30-11-22</span>
                                    </span>
                                    <Dropdown isOpen={dropdown3} toggle={abrirCerrar3} >
                                        <DropdownToggle className="drop_header">
                                            <span className="enlace-div" href='/'><MdKeyboardArrowDown className="icono-enlace" color="white" /></span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu">
                                            <DropdownItem className="dropdown-dias container-card">
                                                <div className="dropdown-menuLista">
                                                    <ul className="dropdown-lista">
                                                        <li><a href='/'>Hoy</a></li>
                                                        <li><a href='/'>Ayer</a></li>
                                                        <li><a href='/'>Últimos 7 días</a></li>
                                                        <li><a href='/'>Últimos 30 dias</a></li>
                                                        <li><a href='/'>Este mes</a></li>
                                                        <li><a href='/'>El mes pasado</a></li>
                                                        <li><a href='/'>Rango personalizado</a></li>
                                                    </ul>
                                                    <br />
                                                    <div className="dropdown-button">
                                                        <button className="dropdown-aplicar">Aplicar</button>
                                                        <button className="dropdown-cancelar">Cancelar</button>
                                                    </div>
                                                </div>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-12  col-md-6">
                                <div className="card row">
                                    <div className="col-12 card-header">
                                        <h4>LUISUSUARIO19</h4>
                                    </div>
                                    <div className="col-12 row card-body">
                                            <div className="col-6 card-body-imagen">
                                                <img src={require("../../assets/imagenes/oficina/user-gris.png")} alt="user"/>
                                            </div>
                                            <div className="col-6 card-body-texto">
                                                <p><b>Nombre:</b> nombre</p>

                                                <p><b>Apellido:</b> r b</p>

                                                <p><b>Email:</b> asdfdsfdsafsfdsf@widitek.com</p>

                                                <p><b>Teléfono:</b> 1234567</p>

                                                <p><b>Identificación:</b></p>

                                                <p><b>Estado:</b> Inactivo</p>
                                            </div>
                                    </div>
                                    <div className="col-12 card-footer">
                                        Link Referido: <a href="/" className="card-linkRef">https://emprenya.com/luisusuario19/unete</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12  col-md-6">
                                <div className="w-100 p-5 h-50">

                                </div>
                                <div className="container-button">
                                    <button>Links de referido</button>
                                </div>
                            </div>
                        </div>
                        <div className="row stats-contrata">
                            <div className="card row">
                                <div className="col-12 contrata-header">
                                        <h4>CONTRATA</h4>
                                </div>
                                <div className="col-12 row contrata-herramientas">
                                    <div className="col-3 text-center">
                                        <img src={require("../../assets/imagenes/impulsaya.png")} alt="herramientas" className="w-75" height="60"/>
                                        <p className="contrata-impulsaya">HERRAMIENTAS</p>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img src={require("../../assets/imagenes/aprenya.png")} alt="herramientas" className="w-75" height="60"/>
                                        <p className="contrata-aprenya">FORMACION</p>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img src={require("../../assets/imagenes/lanzaya.png")} alt="herramientas" className="w-75" height="60"/>
                                        <p className="contrata-lanzaya">SERVICIOS</p>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img src={require("../../assets/imagenes/blockchain.png")} alt="herramientas" className="w-75" height="60"/>
                                        <p className="contrata-blockchain">BLOCKCHAIN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-100">
                                <div className="col-md-4 contrata-divs">
                                    <div className="card-contrata row mr-20">
                                        <div className="col-3 gris-claro-contrata">
                                            <div className="panel-izq-contrata">

                                            </div>
                                            <div className="h-10 text-center gris-oscuro-contrata">
                                                <p>detalles</p>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="w-100 h-25">

                                            </div>
                                            <div className="w-100 h-25 contrata-tipo-servicios gris-oscuro-contrata">
                                                SERVICIOS ACTIVOS DIRECTO
                                            </div>
                                            <div className="w-100 h-50 contrata-numero">
                                                <h1>0</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 contrata-divs">
                                    <div className="card-contrata row mr-20">
                                        <div className="col-3 gris-claro-contrata">
                                            <div className="panel-izq-contrata">

                                            </div>
                                            <div className="h-10 text-center azul-claro-contrata">
                                                <p>detalles</p>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="w-100 h-25">

                                            </div>
                                            <div className="w-100 h-25 contrata-tipo-categoria azul-claro-contrata">
                                                CATEGORIA ACTUAL
                                            </div>
                                            <div className="w-100 h-50 contrata-numero">
                                                <h1>Sin asignar</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 contrata-divs">
                                    <div className="card-contrata row">
                                        <div className="col-3 gris-claro-contrata">
                                            <div className="panel-izq-contrata">

                                            </div>
                                            <div className="h-10 text-center azul-oscuro-contrata">
                                                <p>detalles</p>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="w-100 h-25">

                                            </div>
                                            <div className="w-100 h-25 contrata-tipo-servicios azul-oscuro-contrata">
                                                <p>BALANCE DE LA WALLET</p>
                                            </div>
                                            <div className="w-100 h-50 contrata-numero">
                                                <h1>0</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/*Compras/datos */}
                        <div className="row stats-datos">
                            <div className="col-6 datos-container">
                                <div className="datos-portlet mr-20">
                                    <div className="datos-head w-100">
                                        <h3>Registros</h3>
                                    </div>
                                    <div className="datos-body w-100">
                                        <div className="row datos-widget widget-1">
                                            <div className="col-1 icono-div">
                                                <HiOutlineUserCircle color="red" className="icono-datos"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="datos-body-titulo">Registros Clientes</span>
                                                <br/>
                                                <span className="datos-body-subtitulo">Total de clientes que no son distribuidores</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="datos-body-num">0</span>
                                            </div>
                                        </div>
                                        <div className="row datos-widget widget-2">
                                            <div className="col-1 icono-div">
                                                <CgProfile color="blue" className="icono-datos"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="datos-body-titulo">Registros Distribuidores</span>
                                                <br/>
                                                <span className="datos-body-subtitulo">Total de clientes que son distribuidores</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="datos-body-num">0</span>
                                            </div>
                                        </div>
                                        <div className="row datos-widget">
                                            <div className="col-1">
                                                <FiUsers className="icono-datos" />
                                            </div>
                                            <div className="col-9">
                                                <span className="datos-body-titulo">Registros Totales</span>
                                                <br/>
                                                <span className="datos-body-subtitulo">Total de clientes</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="datos-body-num">0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="datos-canvas" >
                                        <Grafica1  />
                                    </div>
                                </div>
                            </div>


                            <div className="col-6 compras-container">
                                <div className="compras-portlet">
                                    <div className="compras-head w-100 mr-20">
                                        <h3>Compras</h3>
                                    </div>
                                    <div className="compras-body w-100">
                                        <div className="row compras-widget widget-1">
                                            <div className="col-1">
                                                <SlDrawer color="red" className="icono-compras"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="compras-body-titulo">ImpulsaYa</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="compras-body-num">€ 147.00</span>
                                            </div>
                                        </div>
                                        <div className="row compras-widget widget-1">
                                            <div className="col-1">
                                                <SlHandbag color="red" className="icono-compras"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="compras-body-titulo">AprenYa</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="compras-body-num">€ 0.00</span>
                                            </div>
                                        </div>
                                        <div className="row compras-widget widget-3">
                                            <div className="col-1">
                                                <BiCoinStack color="red" className="icono-compras"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="compras-body-titulo">LanzaYa</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="compras-body-num">€ 0.00</span>
                                            </div>
                                        </div>
                                        <h4>Comisión</h4>
                                        <div className="row compras-widget">
                                            <div className="col-1">
                                                <BiCoinStack color="blue" className="icono-compras"/>
                                            </div>
                                            <div className="col-9">
                                                <span className="compras-body-titulo">Comisiones</span>
                                            </div>
                                            <div className="col-2">
                                                <span className="compras-body-num">€ 147.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="datos-canvas">
                                    <Grafica2  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    
}
