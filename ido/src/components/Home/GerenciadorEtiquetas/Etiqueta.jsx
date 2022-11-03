import React from "react";
import style from "./GerenciadorEtiquetas.module.css"
import iconEditar from "../../../assets/images/icon-editar-etiqueta.png"

function Etiqueta({titulo, cor}){
    return(
        <>
            <div className={style.container_etiqueta}>
                <div className={style.etiqueta} style={{backgroundColor: `${cor}`}}>
                    <span>{titulo}</span>
                </div>
                <div className={style.container_acoes}>
                    <img className={style.acoes} src={iconEditar} alt="icone lapis" />
                    <input className={style.checkbox_etiqueta} type="checkbox" />
                </div>
            </div>
        </>
    );
}

export default Etiqueta