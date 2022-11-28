import React from "react";
import { Routes, Route } from "react-router-dom";
/*Importamos componentes*/
import CabeceraOficina from "./oficina/CabeceraOficina";
import IframeLanzaYa from "./iframes/IframeLanzaya";
import IframeBlockChainYa from "./iframes/IframeBlockChainYa";
import FooterOficina from "./oficina/FooterOficina";
import MenuOficina from "./oficina/MenuOficina";
import Estadisticas from "./oficina/Estadisticas";
import Ifanel from "./oficina/impulsaYa/ComponentesIfanel/Ifanel";

/*Importamos CSS */
import "../assets/css/Oficina/dashboard.css";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div>
                        <CabeceraOficina></CabeceraOficina>
                    </div>
                    <div className="contenedorPanel2">
                        <div className="contenedorOpcionesOficina">
                            <MenuOficina></MenuOficina>
                        </div>
                        <div className="contenedorRender">
                            <Routes>
                                <Route path="estadisticas" element={<Estadisticas></Estadisticas>}></Route>
                                <Route path="lanzaya" element={<IframeLanzaYa></IframeLanzaYa>}></Route>
                                <Route path="blockchainya" element={<IframeBlockChainYa></IframeBlockChainYa>}></Route>
                                <Route path="ifanel/*" element={<Ifanel></Ifanel>}></Route>
                            </Routes>

                        </div>

                    </div>
                    <div>
                        <FooterOficina></FooterOficina>
                    </div>
                </div>

            </>
        )
    }
}

export default Dashboard