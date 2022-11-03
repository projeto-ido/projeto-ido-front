import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconEditar from "../../../assets/images/icon-editar-etiqueta.png";

function Etiqueta({ titulo, cor }) {
  return (
    <>
      <div className={style.container_etiqueta}>
        <div className={style.etiqueta} style={{ backgroundColor: `${cor}` }}>
          <span>{titulo}</span>
        </div>
      </div>
    </>
  );
}

export default Etiqueta;
