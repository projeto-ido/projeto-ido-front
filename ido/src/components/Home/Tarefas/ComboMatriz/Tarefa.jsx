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

    const [statusStorage, setStatusStorage] = useSessionStorageString("statusStorage", "");
    const [status, setStatus] = useState(props.status);

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
    const [sub1, setSub1] = useState("")

    const [sub2Storage, setSub2Storage] = useSessionStorageString("subTarefa2")
    const [sub2, setSub2] = useState("")

    const [sub3Storage, setSub3Storage] = useSessionStorageString("subTarefa3")
    const [sub3, setSub3] = useState("")
    
    const [sub4Storage, setSub4Storage] = useSessionStorageString("subTarefa4")
    const [sub4, setSub4] = useState("")

    const [plotarSubTarefas, setPlotarSubTarefas] = useSessionStorageBoolean("isAtualizarSubs");

    function plotarTarefa() {
        if (id !== undefined) {
            console.log(importancia)
            setIdTarefa(id);
            setTituloStorage(titulo);
            setDescricaoStorage(descricao);
            setStatusStorage(status);
            setDataInicioStorage(dataInicio);
            setDataFinalStorage(dataFinal);
            setDataCriacaoStorage(dataCriacao);
            setUrgenciaStorage(urgencia);
            setImportanciaStorage(importancia);
            setSubTarefasStorage(subTarefas);
            setFkUsuarioStorage(fkUsuario);
            
            if(props.subTarefas[0] !== undefined){
                setSub1Storage(props.subTarefas[0].titulo);       
            }
            if(props.subTarefas[1] !== undefined){
                setSub2Storage(props.subTarefas[1].titulo);        
            }
            if(props.subTarefas[2] !== undefined){
                setSub3Storage(props.subTarefas[2].titulo);        
            }
            if(props.subTarefas[3] !== undefined){
                setSub4Storage(props.subTarefas[3].titulo);        
            }

            setPlotarSubTarefas(true);
        }

    }
    
    

    return (
        <>  <div onClick={plotarTarefa}>
            <div onClick={(() => props.setOpenModalVerTarefa(true))}
                className={style.tarefa_combo}>
                <span className={style.tarefa}>{titulo}</span>
                <div className={style.container_etiquetas_matriz}>
                    <div className={style.etiqueta}>Etiqueta</div>
                    <div className={style.etiqueta} style={{ backgroundColor: "#51BDAB" }} >Etiqueta</div>
                </div>
            </div>
        </div>

        </>
    );
}

