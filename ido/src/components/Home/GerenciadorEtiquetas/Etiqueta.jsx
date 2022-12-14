import React from "react";
import style from "./GerenciadorEtiquetas.module.css";

function Etiqueta({ titulo, cor, classe }) {
  return (
    <>
      <div className={classe}>
        <div className={style.etiqueta} style={{ backgroundColor: `${cor}` }}>
          <span>{titulo}</span>
        </div>
      </div>
    </>
  );
}

export default Etiqueta;
