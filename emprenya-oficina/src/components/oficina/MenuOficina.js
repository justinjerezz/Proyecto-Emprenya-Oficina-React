import React from "react";
import { Link } from "react-router-dom";

class MenuOficina extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/line-graph.png`)} alt="line-graph" className="img-general img-grafico-perfil" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/impulsaya_blanco.png`)} alt="ImpulsaYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/aprenya_blanco.png`)} alt="AprenYa" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel" to="blockchainya">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel" to="lanzaya">
                        <li> <img src={require(`../../assets/imagenes/oficina/lanzaya_blanco.png`)} alt="LanzaYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                    <Link className="opcionPanel">
                        <li><img src={require(`../../assets/imagenes/oficina/blockchainya_blanco.png`)} alt="BlochChainYA" className="img-general" /></li>
                    </Link>

                </ul>
            </>
        );
    }
}

export default MenuOficina;