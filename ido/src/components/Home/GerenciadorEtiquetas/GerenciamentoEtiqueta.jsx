import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconEditar from "../../../assets/images/icon-editar-etiqueta.png";
import iconLixeira from "../../../assets/images/icon-lixeira.png";
import Etiqueta from "./Etiqueta";

function GerenciamentoEtiqueta({ 
  id,
  titulo,
  cor,
  setOpenModalEtiqueta,
  setTextoInput,
  setCorEtiqueta,
  setTextoBotao,
  funcaoDeletar,
  setIdEtiquetaSelecionada
}) {

  function setOpenModalAndTexto(){
    setOpenModalEtiqueta(true)
    setTextoInput(titulo)
    setCorEtiqueta(cor)
    setTextoBotao("Salvar")
    setIdEtiquetaSelecionada(id)
  }
  
  return (
    <>
      <div className={style.container_etiqueta_acoes}>
        <Etiqueta titulo={titulo} cor={cor} classe={style.container_etiqueta}/>
        <div className={style.container_acoes}>
          <img className={style.acoes} src={iconEditar} alt="icone lapis" onClick={() => setOpenModalAndTexto()} />
          <img src={iconLixeira} className={style.acoes} onClick={() => funcaoDeletar(id)} alt="icone lixeira" />
        </div>
      </div>
    </>
  );
}

export default GerenciamentoEtiqueta;
