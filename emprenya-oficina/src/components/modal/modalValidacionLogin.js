import React, { useState } from 'react';
import {Modal, ModalBody} from 'reactstrap';
import PropTypes from 'prop-types';
import "../../assets/css/ModalValidacion/modalValidacion.css";

function Example(props) {
  const { className } = props;

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody className='modal-Body'>
        <img src= {require(`../../assets/imagenes/cruzar.png`)} alt="Acceso Denegado" className='cruzAccesoDenegado'></img>
        <p>error</p>
        <p>Usuario / Password incorrecto</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

Example.propTypes = {
  className: PropTypes.string,
};

export {
  Example
}
