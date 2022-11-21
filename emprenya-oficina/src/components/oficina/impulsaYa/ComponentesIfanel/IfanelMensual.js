import React from "react";
import "../../../../assets/css/Oficina/EstilosImpulsaYa/EstilosIfanel/estilosIfanelMensual.css";

class IfanelMensual extends React.Component {
    render() {
        return (
            <>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Plan Mensual Started</h5>
                        </div>
                        <div>
                        <img src={require(`../../../../assets/imagenes/oficina/ifanel.png`)} alt="usuario" className=" header_user" id="dropdownMenuImg1"/>
                        <p className="card-text">Mensual starter</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="hola" className="card-link">Card link</a>
                            <a href="hola" className="card-link">Another link</a>
                        </div>
                </div>
            </>
        );
    }
}

export default IfanelMensual;