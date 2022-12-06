import React from "react";
import iconLupa from '../../assets/images/icon-lupa.png';
import style from './Home.module.css';
import pomodoro from "../../assets/images/tecnica-pomodoro.png"
import Perfil from "./Perfil";
import { useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";
import axios from "../../api/api";

export default function FilterPesquisar({openModal, openModalVerTarefa, openGerenciadorEtiquetas, tipoTarefa, setTipoTarefa, setPomodoroAtivo}){
    const [palavraPesquisa, setParalavraPesquisa] = useSessionStorageString("palavraPesquisa", "")
    const [atualizarFiltro, setAtualizarFiltro] = useSessionStorageBoolean("atualizarFiltro", false);
    const idUsuario = sessionStorage.getItem("id")
    const nomeUsuario = sessionStorage.getItem("nome")

    const downloadCsv = (data, extensao) => {

        const date = new Date;
        const bom = new Uint8Array([0xEF,0xBB,0xBF]);

        var blob = null;

        if ("csv" === extensao)
            blob = new Blob([bom, "TAREFAS;" + "DESCRIÇÃO;" + "DATA DE INICIO;" + "DATA FINAL;" + "STATUS;" + "SUBTAREFAS - STATUS;" + "ETIQUETA 1;" + "ETIQUETA 2;" + "\n" + data]);
        else
            blob = new Blob([data]);

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');

        a.setAttribute('href', url);
        a.setAttribute('download', `relatorio_tarefas_${date.toLocaleDateString()}.${extensao}`);
        document.body.appendChild(a);
        a.click();
    }

    const getArquivo = (extensao) => {
        axios.post(`/usuarios/${idUsuario}/exportacao/grava/${extensao}/relatorio_${nomeUsuario}`, null)
        .then(res => {
            console.log(extensao);
            downloadCsv(res.data, extensao)
        }).catch(erro => {
            console.log(erro);
        })
    }

    return(
        <div className={style.pesquisar_container} 
        onChange={() => setAtualizarFiltro(true)}>
            <div id="elementoPesquisar" className={style.elemento_pesquisar} onChange={() => setTipoTarefa("lista")}>
                <input onChange={(e) => setParalavraPesquisa(e.target.value)} id="inputPesquisar" className={style.input_pesquisar} type="text" placeholder="Pesquisar"/>
                <img id="iconLupa"  className={style.icon_lupa} src={iconLupa} alt="barra de pesquisa"/>
            </div>
            <img className={style.pomodoro} onClick={() => setPomodoroAtivo(true)} src={pomodoro}/>
            <button className={style.btn_exportar} onClick={() => getArquivo('csv')}> Exportar CSV</button>
            <button className={style.btn_exportar} onClick={() => getArquivo('txt')}> Exportar TXT</button>
            <Perfil />
        </div>
    );
}
