import React from "react";
import style from "./GerenciadorEtiquetas.module.css"

function ModalCriarEtiqueta(){
    return(
        <>
            <div className={style.modal_etiqueta}>
                <span>Titulo da Etiqueta</span>
            </div>
        </>
    );
}

export default ModalCriarEtiqueta