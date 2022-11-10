import React from "react";

import style from "./Home.module.css"

import lixeira from '../../assets/images/logo.png';

export default function ModalCriarTarefa({openModal, setOpenModal}) {
    
    if(!openModal){
        return null;
    }

    return (
        <div id="modalCriarTarefa" className={style.modal_criar_tarefa}>
            <div className={style.topo_modal_tarefa}>
                <div onClick={() => setOpenModal(false)} className={style.botao_sair_tarefa}>
                    <div>X</div>
                </div>
            </div>
            <div className={style.titulo_modal_tarefa}>
                CRIAÇÃO DE TAREFA
            </div>
            <h3 className={style.titulo_tarefa_modal}>Titulo da tarefa</h3>
            <input maxLength="40" className={style.input_titulo_tarefa} type="text" />
            <div className={style.classificacao}>
                <div className={style.importancia}>
                    <h3 className={style.titulo_importancia}>Importância</h3>

                    <select id="selectImportancia" className={style.select_importancia} name="select-Importancia" 
                        //onChange="atualizarPrioridade()"
                        >
                        <option value="-1"></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>

                </div>
                <div className={style.urgencia}>
                    <h3 className={style.titulo_importancia}>Urgência</h3>

                    <select className={style.select_importancia} name="selectUrgencia" id="selectUrgencia"
                        // onChange="atualizarPrioridade()"
                        >
                        <option value=""></option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>


                </div>
                <div className={style.prioridade}>
                    <h3 className={style.titulo_importancia}>Prioridade</h3>
                    <div className={style.resultado_prioridade}>
                        <div id="textoPrioridade" className={style.texto_prioridade}>
                            AGENDE
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.datas_modal}>
                <div className={style.data_inicio}>
                    <h3 className={style.titulo_importancia}>Data de Início</h3>
                    <input type="datetime-local" className={style.input_data_inicio} />
                </div>
                <div className={style.data_final}>
                    <h3 className={style.titulo_importancia}>Data Final</h3>
                    <input type="datetime-local" className={style.input_data_final} />
                </div>
            </div>
            <div className={style.container_descricao}>
                <h3 className={style.titulo_importancia}>Descrição</h3>
                <textarea maxLength="200" spellCheck="false" className={style.input_descricao} type="text"></textarea>
            </div>

            <div className={style.complemento_tarefa_modal}>
                <div className={style.subtarefa_tarefa_modal}>
                    <h3 className={style.titulo_subtarefa}>Subtarefa</h3>
                    <div className={style.container_criacao_subtarefa}>
                        <input maxLength="20" id="primeiraSubtarefa" className={style.input_subtarefa} type="text" />
                        <div className={style.botao_criar_subtarefa}>
                            <div //onClick="botaCriarSubtarefa()"
                             className={style.texto_acao_subtarefa}>
                                +
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa2" className={style.container_criacao_subtarefa2}>
                        <input maxLength="20" id="input-subtarefa2" className={style.input_subtarefa} typess="text" />
                        <div className={style.botao_apagar_subtarefa}>
                            <div //onclick="apagarsubtarefa2()" 
                            className={style.texto_acao_subtarefa_lixo}>
                                <img className={style.icon_lixeira} src={lixeira} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa3" className={style.container_criacao_subtarefa3}>
                        <input maxLength="20" id="input-subtarefa3" className={style.input_subtarefa} type="text" />
                        <div className={style.botao_apagar_subtarefa}>
                            <div //onClick="apagarsubtarefa3()" 
                            className={style.texto_acao_subtarefa_lixo}>
                                <img className={style.icon_lixeira} src={lixeira} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="containerSubtarefa4" className={style.container_criacao_subtarefa4}>
                        <input maxLength="20" id="input-subtarefa4" className={style.input_subtarefa} type="text" />
                        <div className={style.botao_apagar_subtarefa}>
                            <div //onclick="apagarsubtarefa4()" 
                            className={style.texto_acao_subtarefa_lixo}>
                                <img className={style.icon_lixeira} src={lixeira} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className={style.subtarefa_tarefa_modal}>
                    <div className={style.container_titulo_etiquetas}>
                        <div id="" className={style.container_select_etiqueta}>
                            <h3 className={style.titulo_etiqueta_modal}>Etiqueta</h3>
                        </div>
                        <div id="" className={style.container_select_etiqueta}>
                            <h3 className={style.titulo_etiqueta_modal2}>Etiqueta</h3>
                        </div>
                    </div>

                    <div className={style.continer_combo_etiquetas}>
                        <div id="" className={style.container_select_etiqueta}>
                            <select className={style.select_etiquetas} name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                        <div id="" className={style.container_select_etiqueta}>
                            <select className={style.select_etiquetas} name="" id="">
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

            <div id="footerModal" className={style.footer_modal}>
                <div className={style.botao_salvar_tarefa}>
                    <div className={style.texto_salvar_tarefa}>
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}