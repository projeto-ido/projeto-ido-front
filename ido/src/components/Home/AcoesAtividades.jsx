import React from "react";
import iconfiltro from '../../assets/images/icon-filtro.png';
import iconSoma from '../../assets/images/icon-soma.png';

import style from './Home.module.css';

export default function AcoesAtividades({ openModal, setOpenModal, tipoTarefa, setTipoTarefa, openModalVerTarefa, openGerenciadorEtiquetas}) {

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

    return (
        <div className={style.acoes_atividades}>
            <div 
                id="containerOptionsFiltros" className={style.container_options_filtros}>
                <img id="iconFiltro" className={style.icon_filtro} src={iconfiltro}
                    alt="imagem de filtro de pesquisa" />
                <select id="selectFiltros" className={style.select_filtros}>
                    <option style={{ color: "#E7E7E7" }} value="">Filtros</option>
                    <option value="">Prioridade</option>
                    <option value="">Etiqueta</option>
                    <option value="">Data</option>
                </select>
            </div>

            <div id="opcoesVisualizacao" className={style.opcoes_visualizacao}>
                <div>

                    <button onClick={() => setTipoTarefa("matriz")}
                        id="matriz" className={`${style.matriz} ${handleChecked("matriz")} ${style.menu_tarefa_default}`}>
                        Matriz
                    </button>
                    <button id="grupo" onClick={() => setTipoTarefa("grupo")}
                        className={`${style.grupo} ${handleChecked("grupo")} ${style.menu_tarefa_default}`}>
                        Grupo
                    </button>
                    <button id="lista" onClick={() => setTipoTarefa("lista")}
                        className={`${style.lista} ${handleChecked("lista")} ${style.menu_tarefa_default}`}>
                        Lista
                    </button>

                </div>
            </div>

            <div onClick={() => setOpenModal(true)} id="botaoAdicionarTarefa" className={style.botao_adicionar_tarefa}>
                <div className={style.icon_soma}>
                    <img id="iconSoma" src={iconSoma} alt="" />
                </div>
                <div style={{ display: "table" }}>
                    <div id="textoCriacaoAtividade" className={style.texto_criacao_atividade}>Criar Atividade</div>
                </div>
            </div>
        </div>
    );
}