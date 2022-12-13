import React from "react";
import '../assets/css/General/style.css'

class Idiomas extends React.Component {
    render() {
        return (
            <div className="m-login__head">
                <div className="text-right mx-4 mt-4" style={{display: "flex" ,  justifyContent: "end"}}>
                <img src={require(`../assets/imagenes/es.png`)}  alt="Banderas Pais" className="a-idioma" data="es" style={{ width: "25px", cursor: "pointer", marginRight: "5px" }} />
                <img src={require(`../assets/imagenes/en.png`)} alt="Banderas Pais" className="a-idioma" data="en" style={{ width: "25px", cursor: "pointer" }} />
            </div>
            </div >
        )
    }
}

export default Idiomas;