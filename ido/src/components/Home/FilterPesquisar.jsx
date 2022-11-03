import React from "react";
import iconLupa from '../../assets/images/icon-lupa.png';
import style from './Home.module.css';

export default function FilterPesquisar({openModal, openModalVerTarefa, openGerenciadorEtiquetas}){

    const opacidade = (openModal || openModalVerTarefa || openGerenciadorEtiquetas) ? style.opacidade_model : "";

    return(
        <div className={style.pesquisar_container}>
            <div id="elementoPesquisar" className={style.elemento_pesquisar}>
                <input id="inputPesquisar" className={style.input_pesquisar} type="text" placeholder="Pesquisar"/>
                <img id="iconLupa"  className={`${style.icon_lupa} ${opacidade}`} src={iconLupa} alt="barra de pesquisa"/>
            </div>
        </div>
    );
}
