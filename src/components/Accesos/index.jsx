//libreria
import React from 'react';
//componentes
import ModalBase from '../ModalBase';
//estilos
import './style.scss';
import ip from '../../conexiones/host';

const Accesos =({onCerrar})=>{
    return (<ModalBase titulo="Accesos." onCerrar={onCerrar}>
            <div className="cuerpo-modal">
                <div>
                    <a href={`${ip}globales/CodigoBarrasGrande`}><i className="fa fa-barcode"> </i>Crear Etiquetas.</a>
                    <hr />
                </div>
            </div>
    </ModalBase>);
}

export default Accesos;