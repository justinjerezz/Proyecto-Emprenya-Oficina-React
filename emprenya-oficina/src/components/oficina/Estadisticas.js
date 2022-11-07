import React from "react";
import "../../assets/css/Oficina/estilosEstadisticas.css";


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Estadisticas extends React.Component{
    render(){
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
                                    <a href='/'>Icono</a>
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
                                        <p>Link Referido: https://emprenya.com/luisusuario19/unete</p>
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
                        <div className="row stats-datos">
                            <div className="col-6 mr-20 datos-container">
                                <div className="datos-head w-100">
                                    <h3>Registros</h3>
                                </div>
                                <div className="datos-body w-100">

                                </div>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Estadisticas;