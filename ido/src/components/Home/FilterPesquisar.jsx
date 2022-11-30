import React from "react";
import iconLupa from '../../assets/images/icon-lupa.png';
import style from './Home.module.css';
import Perfil from "./Perfil";

export default function FilterPesquisar({openModal, openModalVerTarefa, openGerenciadorEtiquetas}){

    return(
        <div className={style.pesquisar_container}>
            <div id="elementoPesquisar" className={style.elemento_pesquisar}>
                <input id="inputPesquisar" className={style.input_pesquisar} type="text" placeholder="Pesquisar"/>
                <img id="iconLupa"  className={style.icon_lupa} src={iconLupa} alt="barra de pesquisa"/>
            </div>
            <Perfil />
        </div>
    );
}
