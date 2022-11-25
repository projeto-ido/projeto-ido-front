import React, { useState, useEffect } from "react";
import iconLixeira from '../../assets/images/lixeira.png';
import api from "../../api/api.jsx";
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";
import style from "../../components/Home/Home.module.css";

export default function ModalVerTarefa({ openModalVerTarefa, setOpenModalVerTarefa }) {
    const [qtdSubtarefa, setQtdSubtarefa] = useState(1);
    const [subTarefa2, setSubtarefa2] = useState(false);
    const [subTarefa3, setSubtarefa3] = useState(false);
    const [subTarefa4, setSubtarefa4] = useState(false);
    const [inputTitulo, setInputTitulo] = useSessionStorageString("tituloStorage", "");
    const [selectImportancia, setSelectImportancia] = useSessionStorageString("importanciaStorage", "");
    const [selectUrgencia, setSelectUrgencia] = useSessionStorageString("urgenciaStorage", "");
    const [inputDataInicio, setInputDataInicio] = useSessionStorageString("dataInicioStorage", "");
    const [inputDataFinal, setInputDataFinal] = useSessionStorageString("dataFinalStorage", "");
    const [inputDescricao, setInputDescricao] = useSessionStorageString("descricaoStorage", "");
    const [etiqueta1, setEtiqueta1] = useState("");
    const [etiqueta2, setEtiqueta2] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [idTarefa, setIdTarefa] = useSessionStorageNumber("idDaTarefa", 0);
    const [fkUsuarioStorage, setFkUsuarioStorage] = useSessionStorageString("setFkUsuarioStorage", "");
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado", "");
    const [sub1Storage, setSubt1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSubt2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSubt3Storage] = useSessionStorageString("subTarefa3")
    const [sub4Storage, setSubt4Storage] = useSessionStorageString("subTarefa4")
    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");
    const [idSub1, setIdSub1] = useSessionStorageNumber("idSub1");
    const [idSub2, setIdSub2] = useSessionStorageNumber("idSub2");
    const [idSub3, setIdSub3] = useSessionStorageNumber("idSub3");
    const [idSub4, setIdSub4] = useSessionStorageNumber("idSub4");
    const [subtarefas, setSubtarefas] = useState([]);

    if (plotarSubTarefas) {
        plotarSubTarefasFunction();
        setPlotarSubTarefas(false);
    }

    function plotarSubTarefasFunction() {

        if (sub2Storage !== "") {
            setSubtarefa2(true);
        }

        if (sub3Storage !== "") {
            setSubtarefa3(true);
        }

        if (sub4Storage !== "") {
            setSubtarefa4(true);
        }

        if (sub4Storage !== "") {
            setQtdSubtarefa(4);
        } else if (sub3Storage !== ""){
            setQtdSubtarefa(3);
        } else if(sub2Storage){
            setQtdSubtarefa(2);
        }
        

    }

    function apagarSubtarefa(idSub) {
        if (idSub != "") {
            api.delete(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}/sub-tarefas/${idSub}`).then(res => {
                alert("tarefa atualizada");
                window.location.reload(false);
            }).catch(erro => {
                console.log("erro: " + erro + " certifique_se de estar logado. ");
                alert(erro);
            })
        }

    }

    function fecharModal() {
        console.log("fechando modal")
        setQtdSubtarefa(1);
        setSubtarefa2(false);
        setSubtarefa3(false);
        setSubtarefa4(false);
    }

    function criar() {
        if (selectImportancia === '-1') {
            alert("Necessário informar a importância da atividade");

        } else if (selectImportancia === '1') {
            setSelectImportancia(true);
        } else if ('0') {
            setSelectImportancia(false);
        }

        if (selectUrgencia === '-1') {
            alert("Necessário informar a urgência da atividade");
        } else if (selectImportancia === '1') {
            setSelectUrgencia(true);
        } else if ('0') {
            setSelectUrgencia(false);
        }

        if (sub1Storage !== "") {
            subtarefas.push({
                "idSubTarefa": idSub1,
                "titulo": sub1Storage,
                "status": false
            })
        }
        if (sub2Storage !== "") {
            subtarefas.push({
                "idSubTarefa": idSub2,
                "titulo": sub2Storage,
                "status": false
            })
        }

        if (sub3Storage !== "") {
            subtarefas.push({
                "idSubTarefa": idSub3,
                "titulo": sub2Storage,
                "status": false
            })
        }

        if (sub4Storage !== "") {
            subtarefas.push({
                "idSubTarefa": idSub4,
                "titulo": sub4Storage,
                "status": false
            })
        }

        const tarefaAtualizada = {
            idTarefa: idTarefa,
            titulo: inputTitulo,
            descricao: inputDescricao,
            dataInicio: inputDataInicio,
            dataFinal: inputDataFinal,
            urgencia: selectUrgencia,
            importancia: selectImportancia,
            //subTarefas: subtarefas,
            status: false
        }



        api.put(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}`, tarefaAtualizada).then(res => {
            window.location.reload(false);
            alert("Tarefa atualizada!")
        }).catch(erro => {
            console.log("erro: " + erro);
            alert(erro);
        })


    }

    function buscarAlturaModal() {
        console.log('qtddd ' + qtdSubtarefa)
        switch (qtdSubtarefa) {
            case 1:
                return style.modal_1_subtarefas;
            case 2:
                return style.modal_2_subtarefas;
            case 3:
                return style.modal_3_subtarefas;
            case 4:
                return style.modal_4_subtarefas;
            default:
                break;
        }
    };

    function buscarAlturaFooter() {
        switch (qtdSubtarefa) {
            case 1:
                return style.footer_modal_1_subtarefas;
            case 2:
                return style.footer_modal_2_subtarefas;
            case 3:
                return style.footer_modal_3_subtarefas;
            case 4:
                return style.footer_modal_4_subtarefas;
            default:
                break;
        }
    };

    function subtarefa2() {
        if (subTarefa2) {
            return (
                <div className={style.container_criacao_subtarefa2}>
                    <input value={sub2Storage} onChange={(e) => setSubt2Storage(e.target.value)} maxLength="20" id="input_subtarefa2" className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa2(false);
                            setSubt2Storage("");
                            apagarSubtarefa(idSub2);
                        }}
                            className={style.texto_acao_subtarefa_lixo}>
                            <img className={style.icon_lixeira} src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>
            );
        }

    }

    function subtarefa3() {
        if (subTarefa3) {
            return (

                <div className={style.container_criacao_subtarefa3}>
                    <input value={sub3Storage} onChange={(e) => setSubt3Storage(e.target.value)} maxLength="20" className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa3(false);
                            setSubt3Storage("");
                            apagarSubtarefa(idSub3);
                        }}
                            className={style.texto_acao_subtarefa_lixo}>
                            <img className={style.icon_lixeira} src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>

            );
        }



    }

    function subtarefa4() {

        if (subTarefa4) {
            return (

                <div className={style.container_criacao_subtarefa4}>
                    <input value={sub4Storage} onChange={(e) => setSubt4Storage(e.target.value)} maxLength="20" className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa4(false);
                            setSubt4Storage("");
                            apagarSubtarefa(idSub4);
                        }}
                            className={style.texto_acao_subtarefa_lixo}>
                            <img className={style.icon_lixeira} src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>

            );
        }

    }

    function handleSubtarefa() {

        return (
            <>
                {subtarefa2()}
                {subtarefa3()}
                {subtarefa4()}
            </>
        );


    }

    function handlePrioridade() {
        if (selectUrgencia == 0 || selectImportancia == 0) {
            return "";
        } else {
            if (selectUrgencia == 'true' && selectImportancia == 'true') {
                return "Fazer Agora";
            } else if (selectUrgencia == 'false' && selectImportancia == 'true') {
                return "Agendar";
            } else if (selectUrgencia) {
                return "Delegar";
            }
        }

    }

    if (!openModalVerTarefa) {
        return null;
    }

    return (
        <div className={`${style.modal_criar_tarefa} ${buscarAlturaModal()}`}>
            <div className={style.topo_modal_tarefa}>
                <div onClick={fecharModal}>
                    <div onClick={() => setOpenModalVerTarefa(false)} className={style.botao_sair_tarefa}>
                        <div>X</div>
                    </div>
                </div>
            </div>
            <div className={style.titulo_modal_tarefa}>
                VISUALIZAÇÃO DE TAREFA
            </div>
            <h3 className={style.titulo_tarefa_modal}>Titulo</h3>
            <input maxLength="40" value={inputTitulo} onChange={(e) => setInputTitulo(e.target.value)} className={style.input_titulo_tarefa} type="text" />
            <div className={style.classificacao}>
                <div className={style.importancia}>
                    <h3 className={style.titulo_importancia}>Importante </h3>



                    <select value={selectImportancia} className={style.select_importancia} name="select_Importancia"
                        onChange={
                            ((e) => setSelectImportancia(e.target.value))
                        } onSelect={handlePrioridade}
                    >
                        <option value={0}></option>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>

                </div>
                <div className={style.urgencia}>
                    <h3 className={style.titulo_importancia}>Urgente</h3>

                    <select className={style.select_importancia} value={selectUrgencia} name="selectUrgencia"
                        onChange={(e) => setSelectUrgencia(e.target.value)} onSelect={handlePrioridade}
                    >
                        <option value={0}></option>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>


                </div>
                <div className={style.prioridade}>
                    <h3 className={style.titulo_importancia}>Prioridade</h3>
                    <div className={style.resultado_prioridade}>
                        <div className={style.texto_prioridade}>
                            {handlePrioridade()}
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.datas_modal}>
                <div className={style.data_inicio}>
                    <h3 className={style.titulo_importancia}>Data de Início</h3>
                    <input type="datetime_local" value={inputDataInicio} onChange={(e) => setInputDataInicio(e.target.value)} className={style.input_data_inicio} />
                </div>
                <div className={style.data_final}>
                    <h3 className={style.titulo_importancia}>Data Final</h3>
                    <input type="datetime_local" value={inputDataFinal} onChange={(e) => setInputDataFinal(e.target.value)} className={style.input_data_final} />
                </div>
            </div>
            <div className={style.container_descricao}>
                <h3 className={style.titulo_importancia}>Descrição</h3>
                <textarea maxLength="200" spellCheck="false" value={inputDescricao} onChange={(e) => setInputDescricao(e.target.value)} className={style.input_descricao} type="text"></textarea>
            </div>

            <div className={style.complemento_tarefa_modal}>
                <div className={style.subtarefa_tarefa_modal}>
                    <h3 className={style.titulo_subtarefa}>Subtarefa</h3>
                    <div className={style.container_criacao_subtarefa}>
                        <input maxLength="20" value={sub1Storage} onChange={(e) => setSubt1Storage(e.target.value)} id="primeiraSubtarefa" className={style.input_subtarefa} type="text" />
                        <div className={style.botao_criar_subtarefa}>
                            <div className={style.texto_acao_subtarefa}>
                                <div onClick={() => {

                                    if (qtdSubtarefa === 4) {
                                        alert("Quantidade de subtarefas excedida, se necessário cadastre uma nova tarefa.")
                                    } else {
                                        {

                                            if (subTarefa2 === false) {
                                                setSubtarefa2(true);
                                            } else if (subTarefa3 === false) {
                                                setSubtarefa3(true);
                                            } else if (subTarefa4 === false) {
                                                setSubtarefa4(true);
                                            }

                                            setQtdSubtarefa(qtdSubtarefa + 1)
                                        }
                                    }
                                }}
                                >
                                    +
                                </div>
                            </div>

                        </div>
                    </div>
                    {handleSubtarefa()}




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
                            <select value={etiqueta1} onChange={(e) => setEtiqueta1(e.target.value)} className={style.select_etiquetas} name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                        <div id="" className={style.container_select_etiqueta}>
                            <select value={etiqueta2} onChange={(e) => setEtiqueta2(e.target.value)} className={style.select_etiquetas} name="" id="">
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

            <div className={`${style.footer_modal} ${buscarAlturaFooter()}`}>
                <div onClick={criar}
                    className={style.botao_salvar_tarefa}>
                    <div className={style.texto_salvar_tarefa}>
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}