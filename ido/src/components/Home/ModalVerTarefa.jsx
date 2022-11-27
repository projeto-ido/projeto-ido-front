import React, { useState, useEffect } from "react";
import iconLixeira from '../../assets/images/lixeira.png';
import api from "../../api/api.jsx";
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";
import style from "../../components/Home/Home.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EtiquetaSelect from "./Tarefas/Etiquetas/EtiquetaSelect";
import EtiquetaSelect2 from "./Tarefas/Etiquetas/EtiquetaSelect2";

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
    const [sub4Storage, setSubt4Storage] = useSessionStorageString("subTarefa4")
    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");
    const [idSub1, setIdSub1] = useSessionStorageNumber("idSub1");
    const [idSub2, setIdSub2] = useSessionStorageNumber("idSub2");
    const [idSub3, setIdSub3] = useSessionStorageNumber("idSub3");
    const [idSub4, setIdSub4] = useSessionStorageNumber("idSub4");
    const [subtarefas, setSubtarefas] = useState([]);
    const [sub1StorageRecebido, SetSub1StorageRecebido] = useState("");
    const [sub2StorageRecebido, SetSub2StorageRecebido] = useState("");
    const [sub3StorageRecebido, SetSub3StorageRecebido] = useState("");
    const [sub4StorageRecebido, SetSub4StorageRecebido] = useState("");

    if (plotarSubTarefas) {
        plotarSubTarefasFunction();
        setPlotarSubTarefas(false);
    }

    function plotarSubTarefasFunction() {

        if (sub1Storage !== "") {
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

        if (sub4Storage !== "") {
            setSubtarefa4(true);
            SetSub4StorageRecebido(sub4Storage);
        }

        if (sub4Storage !== "") {
            setQtdSubtarefa(4);
        } else if (sub3Storage !== "") {
            setQtdSubtarefa(3);
        } else if (sub2Storage) {
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
        setSubtarefa2(false);
        setSubtarefa3(false);
        setSubtarefa4(false);
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
        if (sub4Storage !== sub4StorageRecebido) {
            apagarSubtarefa(idSub4);
            criarSubtarefa(sub4Storage)
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
        if (sub4Storage !== "") {
            subtarefas.push({
                "idSubTarefa": idSub4,
                "titulo": sub4Storage,
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
            status: false
        }

        atualizarTarefaApi(tarefaAtualizada)


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
                    <input type="datetime-local" value={inputDataInicio} onChange={(e) => setInputDataInicio(e.target.value)} className={style.input_data_inicio} />
                </div>
                <div className={style.data_final}>
                    <h3 className={style.titulo_importancia}>Data Final</h3>
                    <input type="datetime-local" value={inputDataFinal} onChange={(e) => setInputDataFinal(e.target.value)} className={style.input_data_final} />
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
                                        toastErro(`Quantidade de subtarefas excedida, se necessário cadastre uma nova tarefa.`)
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
                            <EtiquetaSelect />
                        </div>
                        <div id="" className={style.container_select_etiqueta}>
                            <EtiquetaSelect2 />
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${style.footer_modal} ${buscarAlturaFooter()}`}>
                <div onClick={atualizarTarefa}
                    className={style.botao_salvar_tarefa}>
                    <div className={style.texto_salvar_tarefa}>
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}