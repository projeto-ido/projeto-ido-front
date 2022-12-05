import React, { useState, useEffect } from "react";
import iconLixeira from '../../assets/images/lixeira.png';
import api from "../../api/api.jsx";
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";
import style from "../../components/Home/Home.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EtiquetaSelect from "./Tarefas/Etiquetas/EtiquetaSelect";
import EtiquetaSelect2 from "./Tarefas/Etiquetas/EtiquetaSelect2";
import close from "../../assets/images/close.png"

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function ModalVerTarefa({ openModalVerTarefa, setOpenModalVerTarefa }) {
    const [qtdSubtarefa, setQtdSubtarefa] = useState(1);
    const [subTarefa1, setSubtarefa1] = useState(false);
    const [subTarefa2, setSubtarefa2] = useState(false);
    const [subTarefa3, setSubtarefa3] = useState(false);
    const [inputTitulo, setInputTitulo] = useSessionStorageString("tituloStorage", "");
    const [selectImportancia, setSelectImportancia] = useSessionStorageString("importanciaStorage", "");
    const [selectUrgencia, setSelectUrgencia] = useSessionStorageString("urgenciaStorage", "");
    const [inputDataInicio, setInputDataInicio] = useSessionStorageString("dataInicioStorage", "");
    const [inputDataFinal, setInputDataFinal] = useSessionStorageString("dataFinalStorage", "");
    const [inputDescricao, setInputDescricao] = useSessionStorageString("descricaoStorage", "");
    const [etiqueta1, setEtiqueta1] = useSessionStorageNumber("etiqueta1");
    const [etiqueta2, setEtiqueta2] = useSessionStorageNumber("etiqueta2");
    const [etiquetas, setEtiquetas] = useState([]);
    const [prioridade, setPrioridade] = useState("");
    const [idTarefa, setIdTarefa] = useSessionStorageNumber("idDaTarefa", 0);
    const [fkUsuarioStorage, setFkUsuarioStorage] = useSessionStorageString("setFkUsuarioStorage", "");
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado", "");
    const [sub1Storage, setSubt1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSubt2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSubt3Storage] = useSessionStorageString("subTarefa3")
    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");
    const [idSub1, setIdSub1] = useSessionStorageNumber("idSub1");
    const [idSub2, setIdSub2] = useSessionStorageNumber("idSub2");
    const [idSub3, setIdSub3] = useSessionStorageNumber("idSub3");
    const [subtarefas, setSubtarefas] = useState([]);
    const [inputSubtarefa, setInputSubtarefa] = useState("")
    const [sub1StorageRecebido, SetSub1StorageRecebido] = useState("");
    const [sub2StorageRecebido, SetSub2StorageRecebido] = useState("");
    const [sub3StorageRecebido, SetSub3StorageRecebido] = useState("");
    const [statusTarefa, setStatusTarefa] = useSessionStorageBoolean("statusTarefa")
    if (plotarSubTarefas) {
        plotarSubTarefasFunction();
        setPlotarSubTarefas(false);
    }

    function plotarSubTarefasFunction() {

        if (sub1Storage !== "") {
            setSubtarefa1(true);
            SetSub1StorageRecebido(sub1Storage);
        }

        if (sub2Storage !== "") {
            setSubtarefa2(true);
            SetSub2StorageRecebido(sub2Storage);
        }

        if (sub3Storage !== "") {
            setSubtarefa3(true);
            SetSub3StorageRecebido(sub3Storage);
        }

        if (sub3Storage !== "") {
            setQtdSubtarefa(4);
        } else if (sub2Storage !== ""){
            setQtdSubtarefa(3);
        } else if(sub1Storage){
            setQtdSubtarefa(2);
        }
    }

    function apagarSubtarefa(idSub) {
        if (idSub != "") {
            api.delete(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}/sub-tarefas/${idSub}`).then(res => {
            }).catch(erro => {
            })
        }

    }

    function fecharModal() {
        console.log("fechando modal")
        setQtdSubtarefa(1);
        setSubtarefa1(false);
        setSubtarefa2(false);
        setSubtarefa3(false);
        setSubt1Storage("")
        setSubt2Storage("")
        setSubt3Storage("")
        setOpenModalVerTarefa(false)
    }

    function reload() {
        window.location.reload(false);
    }

    function atualizarTarefa() {
        if (sub1Storage !== sub1StorageRecebido) {
            apagarSubtarefa(idSub1);
            criarSubtarefa(sub1Storage)
        }
        if (sub2Storage !== sub2StorageRecebido) {
            apagarSubtarefa(idSub2);
            criarSubtarefa(sub2Storage)
        }
        if (sub3Storage !== sub3StorageRecebido) {
            apagarSubtarefa(idSub3);
            criarSubtarefa(sub3Storage)
        }

        if (selectImportancia === '-1') {
            toastAlert(`Necessário informar a importância da atividade`);

        } else if (selectImportancia === '1' || selectImportancia === true) {
            setSelectImportancia(true);
        } else {
            setSelectImportancia(false);
        }

        if (selectUrgencia === '-1') {
            toastAlert(`Necessário informar a urgência da atividade`);
        } else if (selectUrgencia === '1' || selectUrgencia === true) {
            setSelectUrgencia(true);
        } else {
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

        if (sessionStorage.getItem("etiqueta1") !== undefined && sessionStorage.getItem("etiqueta1") !== `""`) {
            etiquetas.push({ "idEtiqueta": Number(sessionStorage.getItem("etiqueta1").replace(/["]/g, '')) })
        }
        if (sessionStorage.getItem("etiqueta2") !== undefined && sessionStorage.getItem("etiqueta2") !== `""`) {
            etiquetas.push({ "idEtiqueta": Number(sessionStorage.getItem("etiqueta2").replace(/["]/g, '')) })
        }

        const tarefaAtualizada = {
            idTarefa: idTarefa,
            titulo: inputTitulo,
            descricao: inputDescricao,
            dataInicio: inputDataInicio,
            dataFinal: inputDataFinal,
            urgencia: selectUrgencia,
            importancia: selectImportancia,
            etiquetas: etiquetas,
            status: statusTarefa
        }
        atualizarTarefaApi(tarefaAtualizada)
    }

    function deletarTarefa() {
        confirmAlert({
            message: `Gostaria de excluir essa tarefa?`,
            buttons: [
                {
                    label: 'Cancelar',
                },
                {
                    label: 'Deletar',

                    onClick: () => {
                        if (sub1Storage !== "") {
                            apagarSubtarefa(idSub1)
                        }
                        if (sub2Storage !== "") {
                            apagarSubtarefa(idSub2)
                        }
                        if (sub3Storage !== "") {
                            apagarSubtarefa(idSub3)
                        }

                        setTimeout(apagarTarefaApi, 100);
                    }
                }],
            overlayClassName: style.confirme_alert,
        })
    }

    function apagarTarefaApi() {
        api.delete(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}`).then(res => {
            toastSucesso("Tarefa deletada com sucesso.")
            setTimeout(reload, 2000);
        }).catch(erro => {
            console.log("erro: " + erro);
            toastErro(erro);
        })
    }

    function atualizarTarefaApi(tarefaAtualizada) {
        api.put(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}`, tarefaAtualizada).then(res => {
            toastSucesso(`Tarefa atualizada!`)
            setTimeout(reload, 2000);
        }).catch(erro => {
            console.log("erro: " + erro);
            toastErro(erro);
        })
    }

    function criarSubtarefa(nomeSub) {
        const novaSub = {
            "titulo": `${nomeSub}`,
            "status": false
        }

        api.post(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}/sub-tarefas`, novaSub).then(res => {
        }).catch(erro => {
            console.log("erro: " + erro + " certifique-se de estar logado. ");
            toastErro(erro);
        })
    }

    function toastSucesso(texto) {
        toast.success(texto, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function toastAlert(texto) {
        toast.info(texto, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function toastErro(texto) {
        toast.error(texto, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function buscarAlturaModal() {
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

    // function buscarAlturaFooter() {
    //     switch (qtdSubtarefa) {
    //         case 1:
    //             return style.footer_modal_1_subtarefas;
    //         case 2:
    //             return style.footer_modal_2_subtarefas;
    //         case 3:
    //             return style.footer_modal_3_subtarefas;
    //         case 4:
    //             return style.footer_modal_4_subtarefas;
    //         default:
    //             break;
    //     }
    // };

    function subtarefa1() {
        if (subTarefa1) {
            return (
                <div className={style.container_criacao_subtarefa}>
                    <input value={sub1Storage} onChange={(e) => setSubt1Storage(e.target.value)} maxLength="20" id="input_subtarefa2" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa1(false);
                            setSubt1Storage("");
                            apagarSubtarefa(idSub1);
                        }} className={style.texto_acao_subtarefa_lixo}>
                            <img className={style.icon_lixeira} src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>
            );
        }
    }

    function subtarefa2() {
        if (subTarefa2) {
            return (
                <div className={style.container_criacao_subtarefa}>
                    <input value={sub2Storage} onChange={(e) => setSubt2Storage(e.target.value)} maxLength="20" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa2(false);
                            setSubt2Storage("");
                            apagarSubtarefa(idSub2);
                        }} className={style.texto_acao_subtarefa_lixo}>
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
                <div className={style.container_criacao_subtarefa}>
                    <input value={sub3Storage} onChange={(e) => setSubt3Storage(e.target.value)} maxLength="20" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdSubtarefa(qtdSubtarefa - 1)
                            setSubtarefa3(false);
                            setSubt3Storage("");
                            apagarSubtarefa(idSub3);
                        }} className={style.texto_acao_subtarefa_lixo}>
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
                {subtarefa1()}
                {subtarefa2()}
                {subtarefa3()}
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
                <div onClick={fecharModal} className={style.botao_sair_tarefa}>
                    <img src={close} alt="" />
                </div>
            </div>

            <div className={style.titulo_modal_tarefa}>VISUALIZAÇÃO DE TAREFA</div>

            {/* TITULO, IMPORTANCIA, URGENCIA E PRIORIDADE */}
            <div className={style.classificacao}>
                <div className={style.div_titulo}>
                    <b>Titulo da Tarefa</b>
                    <div>
                        <input maxLength="40" value={inputTitulo} onChange={(e) => setInputTitulo(e.target.value)} 
                        className={style.input_titulo_tarefa_visualizacao} type="text" />
                        <img onClick={deletarTarefa} className={style.icon_apagar_tarefa} src={iconLixeira} alt="" />
                    </div>
                </div>

                <div className={style.div_classificacao}>
                    <div className={style.importancia_urgencia_prioridade}>
                        <h3 className={style.titulo_importancia}>Importante</h3>
                        <select value={selectImportancia} className={style.select_importancia} name="select_Importancia"
                            onChange={((e) => setSelectImportancia(e.target.value))} onSelect={handlePrioridade}>
                            <option value={0}>Selecione</option>
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>
                    </div>

                    <div className={style.importancia_urgencia_prioridade}>
                        <h3 className={style.titulo_importancia}>Urgente</h3>
                        <select className={style.select_importancia} value={selectUrgencia} name="selectUrgencia"
                            onChange={(e) => setSelectUrgencia(e.target.value)} onSelect={handlePrioridade}>
                            <option value={0}>Selecione</option>
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>
                    </div>

                    <div className={style.importancia_urgencia_prioridade}>
                        <h3 className={style.titulo_importancia}>Prioridade</h3>
                        <div className={style.resultado_prioridade}>
                            <div className={style.texto_prioridade}>
                                {handlePrioridade()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.data_desc}>
                <div className={style.datas_modal}>
                    <div className={style.data_visuz}>
                        <h3 className={style.titulo_importancia}>Progresso</h3>
                        <div className={style.progresso}>
                            <input checked={Boolean(statusTarefa)} onClick={(e) => setStatusTarefa(e.target.checked)} className={style.input_status} type="checkbox" />
                            <span className={style.texto_concluido}>Concluído</span>
                        </div>
                    </div>
                    <div className={style.data_visuz}>
                        <h3 className={style.titulo_importancia}>Data de Início</h3>
                        <input type="datetime-local" value={inputDataInicio} onChange={(e) => 
                            setInputDataInicio(e.target.value)} className={style.input_data} />
                    </div>
                    <div className={style.data_visuz}>
                        <h3 className={style.titulo_importancia}>Data Final</h3>
                        <input type="datetime-local" value={inputDataFinal} onChange={(e) => 
                            setInputDataFinal(e.target.value)} className={style.input_data} />
                    </div>
                </div>

                <div className={style.container_descricao}>
                    <h3 className={style.titulo_importancia}>Descrição</h3>
                    <textarea maxLength="200" spellCheck="false" value={inputDescricao} onChange={(e) => 
                        setInputDescricao(e.target.value)} className={style.input_descricao} 
                        type="text" />
                </div>
            </div>

            <div className={style.subtarefa_btn_salvar}>
                <div className={style.complemento_tarefa_modal}>
                    <div className={style.subtarefa_tarefa_modal}>
                        <h3 className={style.titulo_subtarefa}>Subtarefa</h3>
                        <div className={style.container_criacao_subtarefa}>
                            <input maxLength="20" value={inputSubtarefa} onChange={(e) => 
                                setInputSubtarefa(e.target.value)} id="primeiraSubtarefa" 
                                className={style.input_subtarefa} type="text" />

                            <div className={style.botao_criar_subtarefa}>
                                <div className={style.texto_acao_subtarefa}>
                                    <div onClick={() => {
                                        if (qtdSubtarefa === 4) {
                                            toastErro(`Quantidade de subtarefas excedida, se necessário cadastre uma nova tarefa.`)
                                            setInputSubtarefa("")
                                        } else {
                                            {
                                                if (inputSubtarefa.trim() !== "") {
                                                    if (subTarefa1 === false) {
                                                        setSubtarefa1(true);
                                                        setSubt1Storage(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    } else if (subTarefa2 === false) {
                                                        setSubtarefa2(true);
                                                        setSubt2Storage(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    } else if (subTarefa3 === false) {
                                                        setSubtarefa3(true);
                                                        setSubt3Storage(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    }
        
                                                    setQtdSubtarefa(qtdSubtarefa + 1)
                                                } else {
                                                    toastAlert("Titulo da sub tarefa não pode ser vazio")
                                                }
                                            }
                                        }
                                    }}>+</div>
                                </div>
                            </div>
                        </div>
                        {handleSubtarefa()}
                    </div>

                    <div className={style.subtarefa_tarefa_modal}>
                        <div className={style.continer_combo_etiquetas}>
                            <div className={style.container_select_etiqueta}>
                                <h3 className={style.titulo_etiqueta_modal}>Etiqueta</h3>
                                <EtiquetaSelect />
                            </div>
                            <div className={style.container_select_etiqueta}>
                                <h3 className={style.titulo_etiqueta_modal}>Etiqueta</h3>
                                <EtiquetaSelect2 />
                            </div>
                        </div>

                        <div className={style.div_btn}>
                            <div onClick={atualizarTarefa} className={style.botao_salvar_tarefa}>
                                <span>Atualizar Tarefa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
