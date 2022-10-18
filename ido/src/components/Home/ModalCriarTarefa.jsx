import React from "react";


export default function ModalCriarTarefa({openModal, setOpenModal}) {
    
    if(!openModal){
        return null;
    }

    return (
        <div id="modalCriarTarefa" className="modal-criar-tarefa">
            <div className="topo-modal-tarefa">
                <div onClick={() => setOpenModal(false)} className="botao-sair-tarefa">
                    <div>X</div>
                </div>
            </div>
            <div className="titulo-modal-tarefa">
                CRIAÇÃO DE TAREFA
            </div>
            <h3 className="titulo-tarefa-modal">Titulo da tarefa</h3>
            <input maxLength="40" className="input-titulo-tarefa" type="text" />
            <div className="classificacao">
                <div className="importancia">
                    <h3 className="titulo-importancia">Importância</h3>

                    <select id="selectImportancia" className="select-importancia" name="select-Importancia" 
                        //onChange="atualizarPrioridade()"
                        >
                        <option value="-1"></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>

                </div>
                <div className="urgencia">
                    <h3 className="titulo-importancia">Urgência</h3>

                    <select className="select-importancia" name="selectUrgencia" id="selectUrgencia"
                        // onChange="atualizarPrioridade()"
                        >
                        <option value=""></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>


                </div>
                <div className="prioridade">
                    <h3 className="titulo-importancia">Prioridade</h3>
                    <div className="resultado-prioridade">
                        <div id="textoPrioridade" className="texto-prioridade">
                            AGENDE
                        </div>
                    </div>
                </div>

            </div>
            <div className="datas-modal">
                <div className="data-inicio">
                    <h3 className="titulo-importancia">Data de Início</h3>
                    <input type="datetime-local" className="input-data-inicio" />
                </div>
                <div className="data-final">
                    <h3 className="titulo-importancia">Data Final</h3>
                    <input type="datetime-local" className="input-data-final" />
                </div>
            </div>
            <div className="container-descricao">
                <h3 className="titulo-importancia">Descrição</h3>
                <textarea maxLength="200" spellCheck="false" className="input-descricao" type="text"></textarea>
            </div>

            <div className="complemento-tarefa-modal">
                <div className="subtarefa-tarefa-modal">
                    <h3 className="titulo-subtarefa">Subtarefa</h3>
                    <div className="container-criacao-subtarefa">
                        <input maxLength="20" id="primeiraSubtarefa" className="input-subtarefa" type="text" />
                        <div className="botao-criar-subtarefa">
                            <div //onClick="botaCriarSubtarefa()"
                             className="texto-acao-subtarefa">
                                +
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa2" className="container-criacao-subtarefa2">
                        <input maxLength="20" id="input-subtarefa2" className="input-subtarefa" type="text" />
                        <div className="botao-apagar-subtarefa">
                            <div //onclick="apagarsubtarefa2()" 
                            className="texto-acao-subtarefa-lixo">
                                <img className="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa3" className="container-criacao-subtarefa3">
                        <input maxLength="20" id="input-subtarefa3" className="input-subtarefa" type="text" />
                        <div className="botao-apagar-subtarefa">
                            <div //onClick="apagarsubtarefa3()" 
                            className="texto-acao-subtarefa-lixo">
                                <img className="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa4" className="container-criacao-subtarefa4">
                        <input maxLength="20" id="input-subtarefa4" className="input-subtarefa" type="text" />
                        <div className="botao-apagar-subtarefa">
                            <div //onclick="apagarsubtarefa4()" 
                            className="texto-acao-subtarefa-lixo">
                                <img className="icon-lixeira" src="../src/assets/imagens/lixeira.png" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="subtarefa-tarefa-modal">
                    <div className="container-titulo-etiquetas">
                        <div id="" className="container-select-etiqueta">
                            <h3 className="titulo-etiqueta-modal">Etiqueta</h3>
                        </div>
                        <div id="" className="container-select-etiqueta">
                            <h3 className="titulo-etiqueta-modal2">Etiqueta</h3>
                        </div>
                    </div>

                    <div className="continer-combo-etiquetas">
                        <div id="" className="container-select-etiqueta">
                            <select className="select-etiquetas" name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                        <div id="" className="container-select-etiqueta">
                            <select className="select-etiquetas" name="" id="">
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

            <div id="footerModal" className="footer-modal">
                <div className="botao-salvar-tarefa">
                    <div className="texto-salvar-tarefa">
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}