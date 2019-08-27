//libreria
import React from 'react';
//estilos
import './modalBase.scss'
const ModalBase =({titulo,children,onCerrar})=>{

    return (<div className="modal-base">
        <div className="contenedor-modal animate">
            <div className="cavecera-modal">
                <u className="cerrar" onClick={onCerrar}>Cerrar</u>
                <h5>{titulo}</h5>
            </div>
            <div className="cuerpo-modal">{children}</div>
        </div>        
    </div>);
}

export default ModalBase;