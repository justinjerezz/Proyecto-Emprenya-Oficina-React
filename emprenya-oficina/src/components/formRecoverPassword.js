import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

/*Importamos estilos formulario Recover Password */



export default function FormRecoverPassword() {
    return (
        <div class="formPass-contenedor">
            <div class='bg-login formPass-container d-flex align-items-center'>
                <Form className='animate__animated animate__flipInX'>
                    <div className='formPass-header'>
                        <h3 className='formPass-tittle'>Olvidó el password?</h3>
                        <p className='mT-3'>Ingrese Email y Usuario para restablecer contraseña.</p>
                    </div>
                    <FormGroup>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="E-mail"
                            type="text"
                            className='formPass-input mT-3'
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>

                        <Input
                            id="exampleUsuario"
                            name="usuario"
                            placeholder="Usuario"
                            type="text"
                            className='formPass-input mT-3'
                        />
                    </FormGroup>
                    {' '}
                    <div class="formPass-botones">
                        <Button className='formPass-boton bg-blue mT-3'>
                            Enviar
                        </Button>
                        <Link to="/">
                            <Button className='formPass-boton bg-blue mT-3'>
                                Cancelar
                            </Button>
                        </Link>

                    </div>
                </Form>
            </div>
        </div>
    )
}