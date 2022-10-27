// Render Prop
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {validarLogin} from '../servicios/validarLogin'
export default function Formulario(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        validarLogin();
    }

return(
    <Form className='bg-login login' onSubmit={handleSubmit}>
        <div className='imagenEmprenya'>
        <img src={require('../assets/imagenes/emprenya.png')} alt="" />
        </div>
        <FormGroup>
            <Label
                for="exampleEmail"
                className='labelLogin'
            >
                Email
            </Label>
            <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="text"
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                className='form-control'
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="examplePassword"
                className='labelLogin'
            >
                Password
            </Label>
            <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                className='form-control'
            />
        </FormGroup>
        {' '}
        <Button className='botonIniciar'>
            Iniciar
        </Button>
    </Form>
);
}
