import React, { useState, useEffect } from "react";
import iconLixeira from '../../assets/images/lixeira.png';
import api from "../../api/api.jsx"
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";

export default function ModalVerTarefa({ openModalVerTarefa, setOpenModalVerTarefa }) {
    const [qtdSubtarefa, setQtdsubtarefa] = useState(1);
    const alturaModal = buscarAlturaModal();
    const alturaFooterModal = buscarAlturaFooter();
    const [subTarefa2, setSubtarefa2] = useState(false);
    const [subTarefa3, setSubtarefa3] = useState(false);
    const [subTarefa4, setSubtarefa4] = useState(false);
    const [inputTitulo, setInputTitulo] = useSessionStorageString("tituloStorage",  "");
    const [selectImportancia, setSelectImportancia] = useSessionStorageString("importanciaStorage",  "");
    const [selectUrgencia, setSelectUrgencia] = useSessionStorageString("urgenciaStorage",  "");
    const [inputDataInicio, setInputDataInicio] = useSessionStorageString("dataInicioStorage",  "");
    const [inputDataFinal, setInputDataFinal] = useSessionStorageString("dataFinalStorage",  "");
    const [inputDescricao, setInputDescricao] = useSessionStorageString("descricaoStorage",  "");
    const [inputSubtarefa1, setInputSubtarefa1] = useState("");
    const [inputSubtarefa2, setInputSubtarefa2] = useState("");
    const [inputSubtarefa3, setInputSubtarefa3] = useState("");
    const [inputSubtarefa4, setInputSubtarefa4] = useState("");
    const [etiqueta1, setEtiqueta1] = useState("");
    const [etiqueta2, setEtiqueta2] = useState("");
    //const [arrayTarefas, setArrayTarefas] = Array([]);
    const [prioridade, setPrioridade] = useState("");
    const listaSubtarefas = [];
    const [idTarefa, setIdTarefa ] = useSessionStorageNumber("idDaTarefa",  0);
    const [fkUsuarioStorage, setFkUsuarioStorage] = useSessionStorageString("setFkUsuarioStorage",  "");
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado",  "");
    const [sub1Storage, setSubt1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSubt2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSubt3Storage] = useSessionStorageString("subTarefa3")
    const [sub4Storage, setSubt4Storage] = useSessionStorageString("subTarefa4")
    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");

    if(plotarSubTarefas){
        plotarSubTarefasFunction();
        setPlotarSubTarefas(false);
    }   

    function plotarSubTarefasFunction(){

            if (sub2Storage !== "") {
                console.log("cai aquiii " + sub2Storage)
                setSubtarefa2(true);
                setQtdsubtarefa(qtdSubtarefa + 1)
            }
            
            if(sub3Storage !== ""){
                setSubtarefa3(true);
                setQtdsubtarefa(qtdSubtarefa + 1)
            }
    
            if(sub4Storage !== ""){
                setSubtarefa4(true);
                setQtdsubtarefa(qtdSubtarefa + 1)
                
            }   
            console.log("qtd subtarefas " + qtdSubtarefa)  
        
    }

    function fecharModal(){
        console.log("fechando modal")
        setQtdsubtarefa(1);
        setSubtarefa2(false);
        setSubtarefa3(false);
        setSubtarefa4(false);
    }

    function criar() {
        if(selectImportancia === '-1'){
        alert("Necessário informar a importância da atividade");

        } else if(selectImportancia === '1'){
            setSelectImportancia(true);
        } else if('0'){
            setSelectImportancia(false);
        }

        if(selectUrgencia === '-1'){
            alert("Necessário informar a urgência da atividade");
            } else if(selectImportancia === '1'){
                setSelectUrgencia(true);
            } else if('0'){
                setSelectUrgencia(false);
            }        
        

        //listaSubtarefas = {inputSubtarefa1,inputSubtarefa2,inputSubtarefa3,inputSubtarefa4}     
        const tarefaAtualizada = {
            idTarefa: idTarefa,
            titulo: inputTitulo,
            descricao: inputDescricao,
            dataInicio: inputDataInicio,
            dataFinal: inputDataFinal,
            urgencia: selectUrgencia,
            importancia: selectImportancia,
            subTarefas: [
                // {inputSubtarefa1,inputSubtarefa2,inputSubtarefa3,inputSubtarefa4}
            ],
            status: false   
        }

        api.put(`/usuarios/${idUsuarioStorage}/tarefas/${idTarefa}`, tarefaAtualizada).then(res => {
            alert("tarefa atualizada"); 
            window.location.reload(false);           
        }).catch(erro => {
            console.log("erro: " + erro + " certifique-se de estar logado. ");
            alert(erro);
        })

        
    }

    function buscarAlturaModal() {
        switch (qtdSubtarefa) {
            case 1:
                return "modal-1-subtarefas";
            case 2:
                return "modal-2-subtarefas";
            case 3:
                return "modal-3-subtarefas";
            case 4:
                return "modal-4-subtarefas";
            default:
                break;
        }
    };

    function buscarAlturaFooter() {
        switch (qtdSubtarefa) {
            case 1:
                return "footer-modal-1-subtarefas";
            case 2:
                return "footer-modal-2-subtarefas";
            case 3:
                return "footer-modal-3-subtarefas";
            case 4:
                return "footer-modal-4-subtarefas";
            default:
                break;
        }
    };

    function subtarefa2() {
        if (subTarefa2) {
            return (
                <div id="containerSubtarefa2" className="container-criacao-subtarefa2">
                    <input value={sub2Storage} onChange={(e) => setInputSubtarefa2(e.target.value)} maxLength="20" id="input-subtarefa2" className="input-subtarefa" type="text" />
                    <div className="botao-apagar-subtarefa">
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa2(false);
                            setInputSubtarefa2("");
                        }}
                            className="texto-acao-subtarefa-lixo">
                            <img className="icon-lixeira" src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>
            );
        }

    }

    function subtarefa3() {
        if (subTarefa3) {
            return (

                <div id="containerSubtarefa3" className="container-criacao-subtarefa3">
                    <input value={sub3Storage} onChange={(e) => setInputSubtarefa3(e.target.value)} maxLength="20" id="input-subtarefa3" className="input-subtarefa" type="text" />
                    <div className="botao-apagar-subtarefa">
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa3(false);
                            setInputSubtarefa3("");
                        }}
                            className="texto-acao-subtarefa-lixo">
                            <img className="icon-lixeira" src={iconLixeira} alt="" />
                        </div>
                    </div>
                </div>

            );
        }



    }

    function subtarefa4() {

        if (subTarefa4) {
            return (

                <div id="containerSubtarefa4" className="container-criacao-subtarefa4">
                    <input value={sub4Storage} onChange={(e) => setInputSubtarefa4(e.target.value)} maxLength="20" id="input-subtarefa4" className="input-subtarefa" type="text" />
                    <div className="botao-apagar-subtarefa">
                        <div onClick={() => {
                            setQtdsubtarefa(qtdSubtarefa - 1)
                            setSubtarefa4(false);
                            setInputSubtarefa4("");
                        }}
                            className="texto-acao-subtarefa-lixo">
                            <img className="icon-lixeira" src={iconLixeira} alt="" />
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

    function handlePrioridade(){
            if(selectUrgencia == 0 || selectImportancia == 0){
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
        <div id="modalCriarTarefa" className={`modal-criar-tarefa ${buscarAlturaModal()}`}>
            <div className="topo-modal-tarefa">
                <div onClick={fecharModal}>
                <div onClick={() => setOpenModalVerTarefa(false)} className="botao-sair-tarefa">
                    <div>X</div>
                </div>
                </div>
            </div>
            <div className="titulo-modal-tarefa">
                    VISUALIZAÇÃO DE TAREFA
            </div>
            <h3 className="titulo-tarefa-modal">Titulo</h3>
            <input maxLength="40" value={inputTitulo} onChange={(e) => setInputTitulo(e.target.value)} className="input-titulo-tarefa" type="text" />
            <div className="classificacao">
                <div className="importancia">
                    <h3 className="titulo-importancia">Importante </h3>

                    

                    <select value={selectImportancia} className="select-importancia" name="select-Importancia"
                        onChange={ 
                        ((e) => setSelectImportancia(e.target.value))
                        } onSelect={handlePrioridade}
                    >
                        <option value={0}></option>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>

                </div>
                <div className="urgencia">
                    <h3 className="titulo-importancia">Urgente</h3>

                    <select className="select-importancia" value={selectUrgencia} name="selectUrgencia"
                        onChange={(e) => setSelectUrgencia(e.target.value)} onSelect={handlePrioridade}
                    >
                        <option value={0}></option>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>


                </div>
                <div className="prioridade">
                    <h3 className="titulo-importancia">Prioridade</h3>
                    <div className="resultado-prioridade">
                        <div className="texto-prioridade">
                            {handlePrioridade()}
                        </div>
                    </div>
                </div>

            </div>
            <div className="datas-modal">
                <div className="data-inicio">
                    <h3 className="titulo-importancia">Data de Início</h3>
                    <input type="datetime-local" value={inputDataInicio} onChange={(e) => setInputDataInicio(e.target.value)} className="input-data-inicio" />
                </div>
                <div className="data-final">
                    <h3 className="titulo-importancia">Data Final</h3>
                    <input type="datetime-local" value={inputDataFinal} onChange={(e) => setInputDataFinal(e.target.value)} className="input-data-final" />
                </div>
            </div>
            <div className="container-descricao">
                <h3 className="titulo-importancia">Descrição</h3>
                <textarea  maxLength="200" spellCheck="false" value={inputDescricao} onChange={(e) => setInputDescricao(e.target.value)} className="input-descricao" type="text"></textarea>
            </div>

            <div className="complemento-tarefa-modal">
                <div className="subtarefa-tarefa-modal">
                    <h3 className="titulo-subtarefa">Subtarefa</h3>
                    <div className="container-criacao-subtarefa">
                        <input maxLength="20" value={sub1Storage} onChange={(e) => setInputSubtarefa1(e.target.value)} id="primeiraSubtarefa" className="input-subtarefa" type="text" />
                        <div className="botao-criar-subtarefa">
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

                                        setQtdsubtarefa(qtdSubtarefa + 1)
                                    }
                                }
                            }}
                                className="texto-acao-subtarefa">
                                +
                            </div>
                        </div>
                    </div>
                    {handleSubtarefa()}
                    



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
                            <select value={etiqueta1} onChange={(e) => setEtiqueta1(e.target.value)} className="select-etiquetas" name="" id="">
                                <option value=""></option>
                                <option value="">Casa</option>
                                <option value="">Facul</option>
                                <option value="">Lazer</option>
                                <option value="">Estágio</option>
                            </select>
                        </div>
                        <div id="" className="container-select-etiqueta">
                            <select value={etiqueta2} onChange={(e) => setEtiqueta2(e.target.value)} className="select-etiquetas" name="" id="">
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

            <div id="ToterModal" className={`footer-modal ${buscarAlturaFooter()}`}>
                <div onClick={criar}
                    className="botao-salvar-tarefa">
                    <div className="texto-salvar-tarefa">
                        Salvar Tarefa
                    </div>
                </div>
            </div>

        </div>
    );
}