import React from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconAdicionar from "../../../assets/images/icon-adicionar.png"
import iconLixeira from "../../../assets/images/icon-lixeira.png"
import Etiqueta from "./Etiqueta";

function GerenciadorEtiquetas(){
    
    return(
        <>
           <div className={style.fundo_escuro} >
               <div className={style.modal_lateral}>
                   <div className={style.container_texto_destaque}>
                        <span className={style.texto_destaque}>GERENCIADOR DE ETIQUETAS</span>
                   </div>

                    <div className={style.container_acoes}>
                        <h2>Lista de etiquetas</h2>
                        <div className={style.container_acoes_icons}>
                            <img src={iconLixeira} className={style.acoes} alt="icone lixeira" />
                            <img src={iconAdicionar} className={style.acoes} alt="icone adicionar" />
                        </div>
                    </div>

                    <div className={style.listagem_etiquetas}>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                        <Etiqueta titulo="Facul" cor="#7463C7"/>
                    </div>
               </div>
           </div>
        </>
    );
}

export default GerenciadorEtiquetas