import React from 'react';
import './App.css';
import Cabecera from './components/Cabecera';
import Idiomas from './components/Idiomas';
import Formulario from './components/formLogin';
import Footer from './components/Footer';
import Registro from './components/formResgistro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Importar estilos */
import "./assets/css/style.css"
import "./assets/css/normalize.css"
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecera></Cabecera>
        <Routes>
          <Route path='/'
            element={
              <>
                <Idiomas></Idiomas>
                <Formulario></Formulario>
              </>
            }>

          </Route>
          <Route path='/registro' element={<Registro></Registro>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>

  );
}

export default App;
