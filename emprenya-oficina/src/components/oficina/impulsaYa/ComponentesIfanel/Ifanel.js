import React from "react";
import "../../../../assets/css/Oficina/EstilosImpulsaYa/EstilosIfanel/estilosIfanel.css";
import { Button } from "reactstrap";
import { Routes, Route, Link } from "react-router-dom";

/*Importamos componentes Anual y Mensual */
import IfanelAnual from "./IfanelAnual";
import IfanelMensual from "./IfanelMensual";

class Ifanel extends React.Component {
    render() {
        return (
            <>
                <div className="containerIfanel">
                    <div className="contenedorImagenIfanel">
                        <img src={require(`../../../../assets/imagenes/oficina/ifanel.png`)} alt="" className="img-general img-impulsaya" />
                    </div>
                    <div className="contenedorOpciones">
                        <Button className="botonMensual"><Link to="mensual">Mensual</Link></Button>
                        <Button className="botonAnual"><Link to="anual">Anual</Link></Button>
                    </div>
                    <div className="contenedorOpcionesIfanel">
                        <Routes>
                            <Route path="mensual" element={<IfanelMensual></IfanelMensual>}></Route>
                            <Route path="anual" element={<IfanelAnual></IfanelAnual>}></Route>
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}

export default Ifanel;