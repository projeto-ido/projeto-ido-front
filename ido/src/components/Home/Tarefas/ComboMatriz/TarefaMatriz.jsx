import React, { useState, useEffect } from "react";
import style from "../../Home.module.css";
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";

export default function Tarefa(props) {
    const [id, setId] = useState(props.idTarefa);
    const [idTarefa, setIdTarefa] = useSessionStorageNumber("idDaTarefa", 0);

    const [titulo, setTitulo] = useState(props.titulo);
    const [tituloStorage, setTituloStorage] = useSessionStorageString("tituloStorage", "");

    const [descricaoStorage, setDescricaoStorage] = useSessionStorageString("descricaoStorage", "");
    const [descricao, setDescricao] = useState(props.descricao);

    const [dataInicioStorage, setDataInicioStorage] = useSessionStorageString("dataInicioStorage", "");
    const [dataInicio, setDataInicio] = useState(props.dataInicio);

    const [dataFinalStorage, setDataFinalStorage] = useSessionStorageString("dataFinalStorage", "");
    const [dataFinal, setDataFinal] = useState(props.dataFinal);

    const [dataCriacaoStorage, setDataCriacaoStorage] = useSessionStorageString("dataCriacaoStorage", "");
    const [dataCriacao, setDataCriacao] = useState(props.dataCriacao);

    const [urgenciaStorage, setUrgenciaStorage] = useSessionStorageString("urgenciaStorage", "");
    const [urgencia, setUrgencia] = useState(props.urgencia);

    const [importanciaStorage, setImportanciaStorage] = useSessionStorageString("importanciaStorage", "");
    const [importancia, setImportancia] = useState(props.importancia);

    const [subTarefasStorage, setSubTarefasStorage] = useSessionStorageString("subTarefasStorage", []);
    const [subTarefas, setSubTarefas] = useState(props.subTarefas);

    const [fkUsuarioStorage, setFkUsuarioStorage] = useSessionStorageString("setFkUsuarioStorage", "");
    const [fkUsuario, setFkUsuario] = useState(props.fkUsuario);

    const [sub1Storage, setSub1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSub2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSub3Storage] = useSessionStorageString("subTarefa3")    
    const [sub4Storage, setSub4Storage] = useSessionStorageString("subTarefa4")

    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");

    const [idSub1, setIdSub1] = useSessionStorageNumber("idSub1");
    const [idSub2, setIdSub2] = useSessionStorageNumber("idSub2");
    const [idSub3, setIdSub3] = useSessionStorageNumber("idSub3");
    const [idSub4, setIdSub4] = useSessionStorageNumber("idSub4");

    const [etiqueta1, setEtiqueta1] = useSessionStorageNumber("etiqueta1");
    const [etiqueta2, setEtiqueta2] = useSessionStorageNumber("etiqueta2");

    const [etiquetas, setEtiquetas] = useState([]);
    var forPlotar = true;

    const [statusTarefa, setStatusTarefa] = useSessionStorageBoolean("statusTarefa")

    
    useEffect(() => {
        if(forPlotar){
            plotarEtiquetaVisaoGeral()
        }           
    }, [])
    
    function plotarTarefa() {
        if (id !== undefined) {
            setIdTarefa(id);
            setTituloStorage(titulo);
            setDescricaoStorage(descricao);
            setDataInicioStorage(dataInicio);
            setDataFinalStorage(dataFinal);
            setDataCriacaoStorage(dataCriacao);
            setUrgenciaStorage(urgencia);
            setImportanciaStorage(importancia);
            setSubTarefasStorage(subTarefas);
            setFkUsuarioStorage(fkUsuario);
            setStatusTarefa(props.status);
            
            if(props.subTarefas[0] !== undefined){
                setSub1Storage(props.subTarefas[0].titulo); 
                setIdSub1(props.subTarefas[0].idSubTarefa)     
            } else {
                setSub1Storage("")
                setIdSub1("")
            }
            if(props.subTarefas[1] !== undefined){
                setSub2Storage(props.subTarefas[1].titulo);
                setIdSub2(props.subTarefas[1].idSubTarefa)         
            } else {
                setSub2Storage("")
                setIdSub2("")
            }
            if(props.subTarefas[2] !== undefined){
                setSub3Storage(props.subTarefas[2].titulo); 
                setIdSub3(props.subTarefas[2].idSubTarefa)        
            } else {
                setSub3Storage("")
                setIdSub3("")
            }
            if(props.subTarefas[3] !== undefined){
                setSub4Storage(props.subTarefas[3].titulo);
                setIdSub4(props.subTarefas[3].idSubTarefa)         
            } else {
                setSub4Storage("")
                setIdSub4("")
            }
            
            if(props.etiquetasTarefa[0] !== undefined){
                setEtiqueta1(props.etiquetasTarefa[0])
            } else {
                setEtiqueta1("")
            }
            if(props.etiquetasTarefa[1] !== undefined){
                setEtiqueta2(props.etiquetasTarefa[1])
            } else {
                setEtiqueta2("")
            }
            
            console.log("etiqueta 1: " + JSON.parse(sessionStorage.getItem("etiquetaFiltro")) + " / " + 
                ( props.etiquetasTarefa ) )

            setPlotarSubTarefas(true);
        }
    }
    

    function plotarEtiquetaVisaoGeral(){
        if(props.etiquetasTarefa[0] !== undefined){
            etiquetas.push(props.etiquetasTarefa[0])
        } 
        if(props.etiquetasTarefa[1] !== undefined){
            etiquetas.push(props.etiquetasTarefa[1])
        } 
        forPlotar = false;
    }    

    // const statusLine = statusTarefa ? {textDecoration: "line-through"} : {textDecoration: "none"};
    // style={statusLine}

    return (
        <>  
            <div onClick={plotarTarefa}>
                <div onClick={(() => props.setOpenModalVerTarefa(true))}
                    className={style.tarefa_combo}>

                    <span className={style.tarefa}>{titulo}</span>
                    <div className={style.container_etiquetas_matriz}>
                        {etiquetas.map((item) => (
                            <div className={style.etiqueta} style={{ backgroundColor: item.cor }} >{item.titulo}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

