import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import Etiqueta from "../GerenciadorEtiquetas/Etiqueta";
import { useState } from "react";

function ModalCriarEtiqueta({ openModalEtiqueta, setOpenModalEtiqueta, textoInput, setTextoInput }) {
  const [corEtiqueta, setCorEtiqueta] = useState("");
  
  return (
    <>
      <div className={style.modal_etiqueta}>
        <span className={style.texto_modal_etiqueta}>Titulo da Etiqueta</span>
        <input className={style.input_modal_etiqueta} maxLength="10" onChange={e => setTextoInput(e.target.value)} defaultValue={textoInput} type="text" />
        <span className={style.texto_modal_etiqueta}>Cor da Etiqueta</span>
        <select className={style.select_modal_etiqueta} onChange={e => setCorEtiqueta(e.target.value)} name="cores" id="cor">
          <option value="#51BDAB">Verde Água</option>
          <option value="#5D84C2">Azul</option>
          <option value="#7463C7">Roxo</option>
          <option value="#FFCA6D">Amarelo</option>
        </select>
        <span className={style.texto_modal_etiqueta}>Prévia:</span>
        <div className={style.container_modal_etiqueta_botao}>
          <Etiqueta titulo={textoInput} cor={corEtiqueta} classe={style.etiqueta_modal}/>
          <button className={style.botao_modal}>Criar</button>
        </div>
      </div>
    </>
  );
}

export default ModalCriarEtiqueta;
