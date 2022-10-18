import React from "react";
import iconfiltro from '../../assets/images/icon-filtro.png';
import iconSoma from '../../assets/images/icon-soma.png';


export default function AcoesAtividades({ openModal, setOpenModal, tipoTarefa, setTipoTarefa, openModalVerTarefa}) {

    const opacidade = (openModal || openModalVerTarefa) ? "opacidade-model" : "";

    function handleChecked(tipo) {

        if (tipoTarefa === "matriz" && tipo === "matriz") {
            return "menu-tarefa-check"
        }
        if (tipoTarefa === "grupo" && tipo === "grupo") {
            return "menu-tarefa-check"
        }
        if (tipoTarefa === "lista" && tipo === "lista") {
            return "menu-tarefa-check"
        }
        return "menu-tarefa-off"


    }

    return (
        <div className="acoes-atividades">
            <div 
                id="containerOptionsFiltros" className="container-options-filtros">
                <img id="iconFiltro" className={`icon-filtro ${opacidade}`} src={iconfiltro}
                    alt="imagem de filtro de pesquisa" />
                <select id="selectFiltros" className="select-filtros">
                    <option style={{ color: "#E7E7E7" }} value="">Filtros</option>
                    <option value="">Prioridade</option>
                    <option value="">Etiqueta</option>
                    <option value="">Data</option>
                </select>
            </div>

            <div id="opcoesVisualizacao" className="opcoes-visualizacao">
                <div>

                    <button onClick={() => setTipoTarefa("matriz")}
                        id="matriz" className={`matriz ${handleChecked("matriz")} menu-tarefa-default`}>
                        Matriz
                    </button>
                    <button id="grupo" onClick={() => setTipoTarefa("grupo")}
                        className={`grupo ${handleChecked("grupo")} menu-tarefa-default` }>
                        Grupo
                    </button>
                    <button id="lista" onClick={() => setTipoTarefa("lista")}
                        className={`lista ${handleChecked("lista")} menu-tarefa-default`}>
                        Lista
                    </button>

                </div>
            </div>

            <div onClick={() => setOpenModal(true)}
                id="botaoAdicionarTarefa" className="botao-adicionar-tarefa">
                <img id="iconSoma" className={`icon-soma ${opacidade}`} src={iconSoma} alt="" />
                <div style={{ display: "table" }}>
                    <div id="textoCriacaoAtividade" className="texto-criacao-atividade">Criar Atividade</div>
                </div>
            </div>
        </div>
    );
}