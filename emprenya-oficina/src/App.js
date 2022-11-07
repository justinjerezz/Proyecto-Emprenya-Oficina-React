import React from 'react';
import './App.css';
import Cabecera from './components/Cabecera';
import Idiomas from './components/Idiomas';
import Formulario from './components/formLogin';
import Footer from './components/Footer';
import FormRecoverPassword from './components/formRecoverPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Importar estilos */
import "./assets/css/General/style.css"
import "./assets/css/General/normalize.css"
import Dashboard from './components/Dashboard';
import "./assets/css/FormularioRecoverPassword/estilosFormularioRecuperarPass.css";



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/'
            element={
              <>
                <Cabecera></Cabecera>
                <Idiomas></Idiomas>
                <Formulario></Formulario>
                <Footer></Footer>
              </>
            }>
          </Route>

          <Route path='/recuperar'
            element={
              <>
                <Cabecera></Cabecera>
                <Idiomas></Idiomas>
                <FormRecoverPassword></FormRecoverPassword>
                <modalValidacionlLogin></modalValidacionlLogin>
                <Footer></Footer>
              </>
            }>
          </Route>

          <Route path='/dashboard/*' element={<Dashboard></Dashboard>}></Route>

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
