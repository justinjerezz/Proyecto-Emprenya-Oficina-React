import React from "react";
import { Link } from "react-router-dom";

class MenuOficina extends React.Component {
    render() {
        return (
            <>
                <ul className="listaOpcionesOficina">
                    <Link className="opcionPanel" to="estadisticas">
                        <li><img src={require(`../../assets/imagenes/oficina/line-graph.png`)} alt="line-graph" className="img-general img-grafico-perfil" /></li>
                    </Link>

                    <Link className="opcionPanel opcionImpulsaYa" to="ifanel/mensual">
                        <li><img src={require(`../../assets/imagenes/oficina/impulsaya_blanco.png`)} alt="ImpulsaYA" className="img-general img-impulsaya" />
                        </li>

                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/aprenya_blanco.png`)} alt="AprenYa" className="img-general img-aprenya" /></li>
                    </Link>

                    <Link className="opcionPanel" to="blockchainya">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlockChainYA" className="img-general img-blockchainya" /></li>
                    </Link>

                    <Link className="opcionPanel" to="lanzaya">
                        <li> <img src={require(`../../assets/imagenes/oficina/lanzaya_blanco.png`)} alt="LanzaYA" className="img-general img-lanzaya" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/promociones-especiales.png`)} alt="Promociones Especiales" className="img-general img-promociones-especiales" />
                            <p>Promociones<br />Especiales</p>
                        </li>
                    </Link>

                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/estructura.png`)} alt="Estructura" className="img-general img-estructura" />
                            <p>Estructura</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/cuentas.png`)} alt="Cuentas" className="img-general img-cuentas" />
                            <p>Cuentas</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/compras.png`)} alt="Compras" className="img-general img-compras" />
                            <p>Compras</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/comisiones.png`)} alt="Comisiones" className="img-general img-comisiones" />
                            <p>Comisiones</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/herramientas.png`)} alt="Herramientas" className="img-general img-herramientas" />
                            <p>Herramientas</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/iso_blanco_ninjadeventas.png`)} alt="Ninja Ventas" className="img-general img-ninja-ventas" />
                            <p>Ninja De Ventas</p>
                        </li>
                    </Link>
                    <Link className="opcionPanel">
                        <li>
                            <img src={require(`../../assets/imagenes/oficina/iso_bn_crececrypto.png`)} alt="Crece Crypto" className="img-general img-crece-crypto" />
                            <p>CreceCrypto</p>
                        </li>
                    </Link>
                </ul>
            </>
        );
    }
}

export default MenuOficina;