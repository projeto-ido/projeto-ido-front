import React, { useState, useEffect } from "react";
import iconLixeira from '../../assets/images/lixeira.png';
import api from "../../api/api.jsx";
import { useSessionStorageString, useSessionStorageNumber } from "react-use-window-sessionstorage";
import style from "../../components/Home/Home.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EtiquetaSelect from "./Tarefas/Etiquetas/EtiquetaSelect"; 
import EtiquetaSelect2 from "./Tarefas/Etiquetas/EtiquetaSelect2";
import close from "../../assets/images/close.png"

export default function ModalCriarTarefa({ openModal, setOpenModal, setTarefasAtualizadas }) {
    const [qtdSubtarefa, setQtdsubtarefa] = useState(1);
    const alturaModal = buscarAlturaModal();
    const alturaFooterModal = buscarAlturaFooter();
    const [subTarefa1, setSubtarefa1] = useState(false);
    const [subTarefa2, setSubtarefa2] = useState(false);
    const [subTarefa3, setSubtarefa3] = useState(false);
    const [inputTitulo, setInputTitulo] = useState("");
    const [selectImportancia, setSelectImportancia] = useState(0);
    const [selectUrgencia, setSelectUrgencia] = useState(0);
    const [inputDataInicio, setInputDataInicio] = useState("");
    const [inputDataFinal, setInputDataFinal] = useState("");
    const [inputDescricao, setInputDescricao] = useState("");
    const [inputSubtarefa1, setInputSubtarefa1] = useState("");
    const [inputSubtarefa2, setInputSubtarefa2] = useState("");
    const [inputSubtarefa3, setInputSubtarefa3] = useState("");
    const [inputSubtarefa4, setInputSubtarefa4] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado", "");
    const [subtarefas, setSubtarefas] = useState([]);
    const [etiquetas, setEtiquetas] = useState([]);
    const [inputSubtarefa, setInputSubtarefa] = useState("")
    const [etiqueta1, setEtiqueta1] = useSessionStorageNumber("etiqueta1");
    const [etiqueta2, setEtiqueta2] = useSessionStorageNumber("etiqueta2");

    function criar() {
        if (selectImportancia === '-1') {
            toastAlert(`Necessário informar a importância da atividade`);

        } else if (selectImportancia === '1') {
            setSelectImportancia(true);
        } else if ('0') {
            setSelectImportancia(false);
        }

        if (selectUrgencia === '-1') {
            toastAlert(`Necessário informar a urgência da atividade`);
        } else if (selectImportancia === '1') {
            setSelectUrgencia(true);
        } else if ('0') {
            setSelectUrgencia(false);
        }

        if (inputSubtarefa1 !== "") {
            subtarefas.push({
                "titulo": inputSubtarefa1,
                "status": false
            })
        }
        if (inputSubtarefa2 !== "") {
            subtarefas.push({
                "titulo": inputSubtarefa2,
                "status": false
            })
        }
        if (inputSubtarefa3 !== "") {
            subtarefas.push({
                "titulo": inputSubtarefa3,
                "status": false
            })
        }

        if(sessionStorage.getItem("etiqueta1") != undefined){
            etiquetas.push({"idEtiqueta": Number(sessionStorage.getItem("etiqueta1").replace(/["]/g, ''))})
            
        }
        if(sessionStorage.getItem("etiqueta2") != undefined){
            etiquetas.push({"idEtiqueta": Number(sessionStorage.getItem("etiqueta2").replace(/["]/g, ''))})
        }

        const tarefaAtualizada = {
            titulo: inputTitulo,
            descricao: inputDescricao,
            dataInicio: inputDataInicio,
            dataFinal: inputDataFinal,
            urgencia: selectUrgencia,
            importancia: selectImportancia,
            subTarefas: subtarefas,
            etiquetas: etiquetas,
            status: false
        }

        api.post(`/usuarios/${idUsuarioStorage}/tarefas`, tarefaAtualizada).then(res => {
            toastSucesso(`Tarefa cadastrada!`);
            setInputDataFinal("");
            setInputDataInicio("");
            setInputTitulo("");
            setInputDescricao("");
            setSelectImportancia("");
            setSelectUrgencia("");
            setInputSubtarefa1("");
            setInputSubtarefa2("");
            setInputSubtarefa3("");
            setPrioridade("");
            setOpenModal(false);
            setEtiquetas([]);
            setEtiqueta1("");
            setEtiqueta2("");
            setTarefasAtualizadas(false)
        }).catch(erro => {
            console.log("erro: " + erro + " certifique-se de estar logado. ");
            toastErro(erro);
        })
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

    function subtarefa1() {
        if (subTarefa1) {
            return (
                <div className={style.container_criacao_subtarefa}>
                    <input value={inputSubtarefa1} onChange={(e) => setInputSubtarefa1(e.target.value)} maxLength="20" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa1(false);
                            setInputSubtarefa1("");
                        }}
                            className={style.texto_acao_subtarefa_lixo}>
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
                    <input value={inputSubtarefa2} onChange={(e) => setInputSubtarefa2(e.target.value)} maxLength="20" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa2(false);
                            setInputSubtarefa2("");
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
                <div className={style.container_criacao_subtarefa}>
                    <input value={inputSubtarefa3} onChange={(e) => setInputSubtarefa3(e.target.value)} maxLength="20" 
                        className={style.input_subtarefa} type="text" />
                    <div className={style.botao_apagar_subtarefa}>
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa3(false);
                            setInputSubtarefa3("");
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
                {subtarefa1()}
                {subtarefa2()}
                {subtarefa3()}
            </>
        );
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

    function handlePrioridade() {
        if (selectUrgencia == 0 || selectImportancia == 0) {
            return "";
        } else {
            if (selectUrgencia == 'true' && selectImportancia == 'true') {
                return "Fazer Agora";
            } else if (selectUrgencia == 'false' && selectImportancia == 'true') {
                return "Agendar";
            } else if (selectUrgencia == 'false' && selectImportancia == 'false') {
                return "Não Priorizar"
            } else if (selectUrgencia) {
                return "Delegar";
            }
        }
    }

    if (!openModal) {
        return null;
    }

    return (
        <div className={`${style.modal_criar_tarefa} ${buscarAlturaModal()}`}>
            <div className={style.topo_modal_tarefa}>
                <div onClick={() => setOpenModal(false)} className={style.botao_sair_tarefa}>
                    <img src={close} alt="" />
                </div>
            </div>

            <div className={style.titulo_modal_tarefa}>CRIAÇÃO DE TAREFA</div>

            {/* TITULO, IMPORTANCIA, URGENCIA E PRIORIDADE */}
            <div className={style.classificacao}>
                <div className={style.div_titulo}>
                    <b>Titulo da Tarefa</b>
                    <input maxLength="40" value={inputTitulo} onChange={(e) => setInputTitulo(e.target.value)} 
                    className={style.input_titulo_tarefa} type="text" />
                </div>

                <div className={style.div_classificacao}>
                    <div className={style.importancia_urgencia_prioridade}>
                        <h3 className={style.titulo_importancia}>Importante</h3>
                        <select value={selectImportancia} className={style.select_importancia} name="select-Importancia"
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
                    <div className={style.data}>
                        <h3 className={style.titulo_importancia}>Data de Início</h3>
                        <input type="datetime-local" value={inputDataInicio} onChange={(e) => 
                            setInputDataInicio(e.target.value)} className={style.input_data} />
                    </div>
                    <div className={style.data}>
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
                                                        setInputSubtarefa1(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    } else if (subTarefa2 === false) {
                                                        setSubtarefa2(true);
                                                        setInputSubtarefa2(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    } else if (subTarefa3 === false) {
                                                        setSubtarefa3(true);
                                                        setInputSubtarefa3(inputSubtarefa)
                                                        setInputSubtarefa("")
                                                    }

                                                    setQtdsubtarefa(qtdSubtarefa + 1)
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
                                <EtiquetaSelect/>
                            </div>

                            <div className={style.container_select_etiqueta}>
                                <h3 className={style.titulo_etiqueta_modal}>Etiqueta</h3>
                                <EtiquetaSelect2/>
                            </div>
                        </div>

                        <div className={style.div_btn}>
                            <div onClick={criar} className={style.botao_salvar_tarefa}>
                                <span>Salvar Tarefa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
