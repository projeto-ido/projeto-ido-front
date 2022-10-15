import React, { useState, useEffect } from "react";
import api from "../api";
import iconLupa from '../assets/imagens/icon-lupa.png';

export default function ModalCriarTarefa({openModal, setOpenModal}) {
    
    if(!openModal){
        return null;
    }

    return (
        <div id="modalCriarTarefa" class="modal-criar-tarefa">
            <div class="topo-modal-tarefa">
                <div onClick={() => setOpenModal(false)} class="botao-sair-tarefa">
                    <div>X</div>
                </div>
            </div>
            <div class="titulo-modal-tarefa">
                CRIAÇÃO DE TAREFA
            </div>
            <h3 class="titulo-tarefa-modal">Titulo da tarefa</h3>
            <input maxlength="40" class="input-titulo-tarefa" type="text" />
            <div class="classificacao">
                <div class="importancia">
                    <h3 class="titulo-importancia">Importância</h3>

                    <select id="selectImportancia" class="select-importancia" name="select-Importancia" onchange="atualizarPrioridade()">
                        <option value="-1"></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>

                </div>
                <div class="urgencia">
                    <h3 class="titulo-importancia">Urgência</h3>

                    <select class="select-importancia" name="selectUrgencia" id="selectUrgencia" onchange="atualizarPrioridade()">
                        <option value=""></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>


                </div>
                <div class="prioridade">
                    <h3 class="titulo-importancia">Prioridade</h3>
                    <div class="resultado-prioridade">
                        <div id="textoPrioridade" class="texto-prioridade">
                            AGENDE
                        </div>
                    </div>
                </div>

            </div>
            <div class="datas-modal">
                <div class="data-inicio">
                    <h3 class="titulo-importancia">Data de Início</h3>
                    <input type="datetime-local" class="input-data-inicio" />
                </div>
                <div class="data-final">
                    <h3 class="titulo-importancia">Data Final</h3>
                    <input type="datetime-local" class="input-data-final" />
                </div>
            </div>
            <div class="container-descricao">
                <h3 class="titulo-importancia">Descrição</h3>
                <textarea maxlength="200" spellcheck="false" class="input-descricao" type="text"></textarea>
            </div>

            <div class="complemento-tarefa-modal">
                <div class="subtarefa-tarefa-modal">
                    <h3 class="titulo-subtarefa">Subtarefa</h3>
                    <div class="container-criacao-subtarefa">
                        <input maxlength="20" id="primeiraSubtarefa" class="input-subtarefa" type="text" />
                        <div class="botao-criar-subtarefa">
                            <div onclick="botaCriarSubtarefa()" class="texto-acao-subtarefa">
                                +
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa2" class="container-criacao-subtarefa2">
                        <input maxlength="20" id="input-subtarefa2" class="input-subtarefa" type="text" />
                        <div class="botao-apagar-subtarefa">
                            <div onclick="apagarsubtarefa2()" class="texto-acao-subtarefa-lixo">
                                <img class="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa3" class="container-criacao-subtarefa3">
                        <input maxlength="20" id="input-subtarefa3" class="input-subtarefa" type="text" />
                        <div class="botao-apagar-subtarefa">
                            <div onclick="apagarsubtarefa3()" class="texto-acao-subtarefa-lixo">
                                <img class="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa4" class="container-criacao-subtarefa4">
                        <input maxlength="20" id="input-subtarefa4" class="input-subtarefa" type="text" />
                        <div class="botao-apagar-subtarefa">
                            <div onclick="apagarsubtarefa4()" class="texto-acao-subtarefa-lixo">
                                <img class="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div class="subtarefa-tarefa-modal">
                    <div class="container-titulo-etiquetas">
                        <div id="" class="container-select-etiqueta">
                            <h3 class="titulo-etiqueta-modal">Etiqueta</h3>
                        </div>
                        <div id="" class="container-select-etiqueta">
                            <h3 class="titulo-etiqueta-modal2">Etiqueta</h3>
                        </div>
                    </div>

                    <div class="continer-combo-etiquetas">
                        <div id="" class="container-select-etiqueta">
                            <select class="select-etiquetas" name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                        <div id="" class="container-select-etiqueta">
                            <select class="select-etiquetas" name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div id="footerModal" class="footer-modal">
                <div class="botao-salvar-tarefa">
                    <div class="texto-salvar-tarefa">
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}