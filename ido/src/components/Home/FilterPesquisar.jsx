import React from "react";
import iconLupa from '../../assets/images/icon-lupa.png';
import style from './Home.module.css';
import pomodoro from "../../assets/images/tecnica-pomodoro.png"
import Perfil from "./Perfil";
import { useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";

export default function FilterPesquisar({ openModal, openModalVerTarefa, openGerenciadorEtiquetas, tipoTarefa, setTipoTarefa, setPomodoroAtivo }) {
    const [palavraPesquisa, setParalavraPesquisa] = useSessionStorageString("palavraPesquisa", "")
    const [atualizarFiltro, setAtualizarFiltro] = useSessionStorageBoolean("atualizarFiltro", false);

    return (
        <div className={style.pesquisar_container}
            onChange={() => setAtualizarFiltro(true)}>
            <div className={style.teste}>
                <div id="elementoPesquisar" className={style.elemento_pesquisar} onChange={() => setTipoTarefa("lista")}>
                    <input onChange={(e) => setParalavraPesquisa(e.target.value)} id="inputPesquisar" className={style.input_pesquisar} type="text" placeholder="Pesquisar" />
                    <img id="iconLupa" className={style.icon_lupa} src={iconLupa} alt="barra de pesquisa" />
                </div>
                <img className={style.pomodoro} onClick={() => setPomodoroAtivo(true)} src={pomodoro} />
            </div>
            <Perfil />
        </div>
    );
}
