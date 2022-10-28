// Render Prop
import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { validarLogin } from '../servicios/validarLogin'

/*Estilos de componente*/


import "../assets/css/FormularioLogin/formularioLogin.css";

export default function Formulario() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        validarLogin();
    }

    return (
        <div className='containerGeneral'>
            <Form className='cajaFormulario' onSubmit={handleSubmit}>
                <FormGroup className='containerFormulario'>
                    <div>
                        <img src={require(`../assets/imagenes/emprenya.png`)} alt="Logo-Empren-Ya" className='img-empren-ya' />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder='Email o usuario'
                            className='input-form'
                            id="exampleEmail"
                            name="email"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder='Contraseña'
                            className='input-form'
                            id="examplePassword"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <Button className="btn boton-inicio-sesion">INICIAR SESIÓN</Button>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}
