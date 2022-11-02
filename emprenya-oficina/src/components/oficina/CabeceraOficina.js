import React from "react";
import "../../assets/css/Oficina/estilosCabeceraOficina.css"

class CabeceraOficina extends React.Component {
    render() {
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
                                <li class="cabecera-listaImg"><img src={require(`../../assets/imagenes/es.png`)} alt="bandera_españa"/></li>
                                <li class="cabecera-listaImg"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CabeceraOficina;