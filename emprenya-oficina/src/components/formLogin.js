// Render Prop
import React from 'react';

/*Estilos de componente*/


import "../assets/css/FormularioLogin/formularioLogin.css";

export default function Formulario() {

    return (
        <div className='containerGeneral'>
            <div className='cajaFormulario'>
                <div className='containerFormulario'>
                    <div>
                        <img src={require(`../assets/imagenes/emprenya.png`)} alt="Logo-Empren-Ya" className='img-empren-ya' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email o usuario' className='input-usuario' />
                    </div>
                    <div>
                        <input type="text" placeholder='Contraseña'  className='input-pass'/>
                    </div>
                    <div>
                        <div>
                            <button className='boton-inicio-sesion'></button>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <button>INICIAR SESIÓN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
