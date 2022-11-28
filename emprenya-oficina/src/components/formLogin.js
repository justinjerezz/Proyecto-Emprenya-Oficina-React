// Render Prop
import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

import { validarLogin } from '../servicios/validarLogin'


/*Estilos de componente*/


import "../assets/css/FormularioLogin/formularioLogin.css";
import { Link } from 'react-router-dom';

export default function Formulario() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        validarLogin();
    }

    return (
        <div className='containerGeneral' id='containerGeneralForm'>
            <Form className='cajaFormulario ' onSubmit={handleSubmit}>
                <FormGroup className='containerFormulario animate__animated animate__flipInX'>
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
                        <div class="row m-login__form-sub container-recuerdame">
                            <div class="col m--align-left m-login__form-left">
                                <Label class="m-checkbox  m-checkbox--focus label-form" >
                                    <Input type="checkbox" name="remember" id="remember" className='remember'/><span className='word-Recuerdame'>Recuérdame</span>
                                </Label>
                            </div>
                            <div className="col m--align-right m-login__form-right">
                                <Link to={"/recuperar"} id="m_login_forget_password" class="m-link link-olvido-password" >Olvidó el password?</Link>
                            </div>
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
