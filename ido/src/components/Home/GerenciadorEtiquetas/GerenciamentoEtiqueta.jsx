import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconEditar from "../../../assets/images/icon-editar-etiqueta.png";
import Etiqueta from "./Etiqueta";

function GerenciamentoEtiqueta({ titulo, cor }) {
  return (
    <>
      <div className={style.container_etiqueta_acoes}>
        <Etiqueta titulo={titulo} cor={cor} classe={style.container_etiqueta}/>
        <div className={style.container_acoes}>
          <img className={style.acoes} src={iconEditar} alt="icone lapis" />
          <input className={style.checkbox_etiqueta} type="checkbox" />
        </div>
      </div>
    </>
  );
}

export default GerenciamentoEtiqueta;
