import React, { useState, useEffect } from "react";
import api from "../api";
import iconfiltro from '../assets/imagens/icon-filtro.png';
import iconSoma from '../assets/imagens/icon-soma.png';


export default function AcoesAtividades({openModal, setOpenModal}){

    const opacidade = openModal ? "opacidade-model": "";
    
    return(
        <div className="acoes-atividades">
            <div //onclick="sairCriacaoTarefas()" 
            id="containerOptionsFiltros" className="container-options-filtros">
                <img id="iconFiltro" className={`icon-filtro ${opacidade}`} src={iconfiltro}
                    alt="imagem de filtro de pesquisa"/>
                <select id="selectFiltros" className="select-filtros">
                    <option style={{color: "#E7E7E7"}} value="">Filtros</option>
                    <option value="">Prioridade</option>
                    <option value="">Etiqueta</option>
                    <option value="">Data</option>
                </select>
            </div>

            <div id="opcoesVisualizacao" className="opcoes-visualizacao">
                <div style={{display: "table"}}
                >


                    <div //onclick="verMatriz()"
                     id="matriz" className="matriz">
                        Matriz
                    </div>
                    <div id="grupo" //onclick="agrupar()" 
                    className="grupo">
                        Grupo
                    </div>
                    <div id="lista" //onclick="listar()" 
                    className="lista">
                        Lista
                    </div>
                    
                </div>
            </div>

            <div onClick={() => setOpenModal(true)} 
            id="botaoAdicionarTarefa" className="botao-adicionar-tarefa">
                <img id="iconSoma" className={`icon-soma ${opacidade}`} src={iconSoma} alt=""/>
                <div style={{display: "table"}}>
                    <div id="textoCriacaoAtividade" className="texto-criacao-atividade">Criar Atividade</div>
                </div>
            </div>
        </div>
    );
}