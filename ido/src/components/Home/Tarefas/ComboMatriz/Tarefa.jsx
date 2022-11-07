import React, { useState, useEffect } from "react";
import style from "../../Home.module.css"
import { useSessionStorageNumber, useSessionStorageString } from "react-use-window-sessionstorage";

export default function Tarefa(props) {
    const [id, setId] = useState(props.idTarefa);
    const [idTarefa, setIdTarefa ] = useSessionStorageNumber("idDaTarefa",  0);
    
    const [titulo, setTitulo ] = useState(props.titulo);
    const [tituloStorage, setTituloStorage] = useSessionStorageString("tituloStorage",  "");

    const [descricaoStorage, setDescricaoStorage] = useSessionStorageString("descricaoStorage",  "");
    const [descricao, setDescricao] = useState(props.descricao); 
    
    const [statusStorage, setStatusStorage] = useSessionStorageString("statusStorage",  "");
    const [status, setStatus] = useState(props.status);

    const [dataInicioStorage, setDataInicioStorage] = useSessionStorageString("dataInicioStorage",  "");
    const [dataInicio, setDataInicio ] = useState(props.dataInicio);

    const [dataFinalStorage, setDataFinalStorage] = useSessionStorageString("dataFinalStorage",  "");
    const [dataFinal, setDataFinal ] = useState(props.dataFinal);

    const [dataCriacaoStorage, setDataCriacaoStorage] = useSessionStorageString("dataCriacaoStorage",  "");
    const [dataCriacao, setDataCriacao ] = useState(props.dataCriacao);

    const [urgenciaStorage, setUrgenciaStorage] = useSessionStorageString("urgenciaStorage",  "");
    const [urgencia, setUrgencia ] = useState(props.urgencia);

    const [importanciaStorage, setImportanciaStorage] = useSessionStorageString("importanciaStorage",  "");
    const [importancia, setImportancia ] = useState(props.importancia);

    const [subTarefasStorage, setSubTarefasStorage] = useSessionStorageString("subTarefasStorage",  "");
    const [subTarefas, setSubTarefas ] = useState(props.subTarefas);

    const [fkUsuarioStorage, setFkUsuarioStorage] = useSessionStorageString("setFkUsuarioStorage",  "");
    const [fkUsuario, setFkUsuario ] = useState(props.fkUsuario);

    function plotarTarefa(){
        if(id !== undefined ){
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
        }
        
    }

    return (
        <>  <div onClick={plotarTarefa}>
            <div onClick={(() => props.setOpenModalVerTarefa(true)) } 
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

