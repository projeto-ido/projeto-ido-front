import React, { useState, useEffect } from "react";
import api from "../api";
import iconLupa from '../assets/imagens/icon-lupa.png';

export default function FilterPesquisar({openModal, openModalVerTarefa}){

    const opacidade = (openModal || openModalVerTarefa) ? "opacidade-model": "";

    return(
        <div className="pesquisar-container">
            <div id="elementoPesquisar" className="elemento-pesquisar">
                <input id="inputPesquisar" className="input-pesquisar" type="text" placeholder="Pesquisar"/>
                <img id="iconLupa"  className={`icon-lupa ${opacidade}`} src={iconLupa} alt="barra de pesquisa"/>
            </div>
        </div>
    );
}
