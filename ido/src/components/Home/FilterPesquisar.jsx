import React from "react";
import iconLupa from '../../assets/images/icon-lupa.png';

import style from './Home.module.css';

export default function FilterPesquisar({openModal, openModalVerTarefa}){

    const opacidade = (openModal || openModalVerTarefa) ? ".opacidade_model": "";

    return(
        <div className={style.pesquisar_container}>
            <div id="elementoPesquisar" className={style.elemento_pesquisar}>
                <input id="inputPesquisar" className={style.input_pesquisar} type="text" placeholder="Pesquisar"/>
                <img id="iconLupa"  className={[`${style.icon_lupa} ${style + opacidade}`]} src={iconLupa} alt="barra de pesquisa"/>
            </div>
        </div>
    );
}
