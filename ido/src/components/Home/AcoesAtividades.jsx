import React, { useState, useEffect } from "react";
import iconfiltro from '../../assets/images/icon-filtro.png';
import iconSoma from '../../assets/images/icon-soma.png';
import style from './Home.module.css';
import { useSessionStorageNumber } from "react-use-window-sessionstorage";
import Etiquetas from '../Home/Tarefas/Etiquetas/EtiquetasFiltro';

export default function AcoesAtividades({ openModal, setOpenModal, tipoTarefa, setTipoTarefa, openModalVerTarefa, openGerenciadorEtiquetas }) {
    const [etiqueta1, setEtiqueta1] = useSessionStorageNumber("etiqueta1");
    const [etiqueta2, setEtiqueta2] = useSessionStorageNumber("etiqueta2");
    const [etiquetaFiltro, setEtiquetaFiltro] = useSessionStorageNumber("etiquetaFiltro");

    function handleChecked(tipo) {
        if (tipoTarefa === "matriz" && tipo === "matriz") {
            return style.menu_tarefa_check
        }
        if (tipoTarefa === "grupo" && tipo === "grupo") {
            return style.menu_tarefa_check
        }
        if (tipoTarefa === "lista" && tipo === "lista") {
            return style.menu_tarefa_check
        }
        return style.menu_tarefa_off
    }

    function limparEtiquetas() {
        setEtiqueta1("")
        setEtiqueta2("")
    }

    return (
        <div className={style.acoes_atividades}>
            <div className={style.container_options_filtros}>
                <img className={style.icon_filtro} src={iconfiltro}
                    alt="imagem de filtro de pesquisa" />
                <div className={style.filtro_etiquetas}>
                    <Etiquetas />
                </div>
            </div>

            <div className={style.opcoes_visualizacao}>
                <div>
                    <button onClick={() => setTipoTarefa("matriz")}
                        className={`${style.matriz} ${handleChecked("matriz")} ${style.menu_tarefa_default}`}>
                        Matriz
                    </button>
                    <button onClick={() => setTipoTarefa("grupo")}
                        className={`${style.grupo} ${handleChecked("grupo")} ${style.menu_tarefa_default}`}>
                        Grupo
                    </button>
                    <button onClick={() => setTipoTarefa("lista")}
                        className={`${style.lista} ${handleChecked("lista")} ${style.menu_tarefa_default}`}>
                        Lista
                    </button>
                </div>
            </div>

            <div onClick={() => setOpenModal(true)} className={style.botao_adicionar_tarefa}>
                <div className={style.icon_soma} onClick={limparEtiquetas}>
                    <img src={iconSoma} alt="" />
                </div>
                <div style={{ display: "table" }}>
                    <div onClick={limparEtiquetas} className={style.texto_criacao_atividade}>Criar Atividade</div>
                </div>
            </div>
        </div>
    );
}