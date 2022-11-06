import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import Etiqueta from "../GerenciadorEtiquetas/Etiqueta";

function ModalCriarEtiqueta({ 
  openModalEtiqueta,
  setOpenModalEtiqueta,
  textoInput,
  setTextoInput,
  corEtiqueta,
  setCorEtiqueta,
  textoBotao,
  verdeAgua,
  setVerdeAgua,
  azul,
  setAzul,
  amarelo,
  setAmarelo,
  roxo,
  setRoxo,
  idEtiquetaSelecionada,
  funcaoCriarAtualizar
}) {

  if(!openModalEtiqueta){
    return null
  }

  if(corEtiqueta === "#51BDAB"){
    setVerdeAgua(true)
    setAzul(false)
    setRoxo(false)
    setAmarelo(false)
  } else if(corEtiqueta === "#5D84C2"){
    setAzul(true)
    setVerdeAgua(false)
    setRoxo(false)
    setAmarelo(false)
  } else if(corEtiqueta === "#7463C7"){
    setRoxo(true)
    setVerdeAgua(false)
    setAzul(false)
    setAmarelo(false)
  } else if(corEtiqueta === "#FFCA6D"){
    setAmarelo(true)
    setVerdeAgua(false)
    setRoxo(false)
    setAzul(false)
  }

  return (
    <>
      <div className={style.modal_etiqueta}>
        <div className={style.container_fechar_modal}>
          <span className={style.fechar_modal} onClick={() => setOpenModalEtiqueta(false)}>X</span>
        </div>
        <span className={style.texto_modal_etiqueta}>Titulo da Etiqueta</span>
        <input className={style.input_modal_etiqueta} 
        maxLength="10" 
        onChange={e => setTextoInput(e.target.value)}
        value={textoInput} type="text" />
        <span className={style.texto_modal_etiqueta}>Cor da Etiqueta</span>
        <select defaultValue="Verde Água" className={style.select_modal_etiqueta} onChange={e => setCorEtiqueta(e.target.value)} name="cores" id="cor">
          <option selected={verdeAgua} value="#51BDAB">Verde Água</option>
          <option selected={azul} value="#5D84C2">Azul</option>
          <option selected={roxo} value="#7463C7">Roxo</option>
          <option selected={amarelo} value="#FFCA6D">Amarelo</option>
        </select>
        <span className={style.texto_modal_etiqueta}>Prévia:</span>
        <div className={style.container_modal_etiqueta_botao}>
          <Etiqueta titulo={textoInput} cor={corEtiqueta} classe={style.etiqueta_modal}/>
          <button className={style.botao_modal} onClick={() => funcaoCriarAtualizar(idEtiquetaSelecionada)}>{textoBotao}</button>
        </div>
      </div>
    </>
  );
}

export default ModalCriarEtiqueta;
