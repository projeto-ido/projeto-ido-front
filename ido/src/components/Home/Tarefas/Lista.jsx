import React, { useState, useEffect } from "react";
import Tarefa from "./ComboMatriz/Tarefa";
import style from "../Home.module.css";
import apiTarefa from "../../../api/apiTarefa";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";

export default function Lista({setOpenModalVerTarefa}){
    const [listaTarefas, setListaTarefas] = useState([]);
    const [idTarefa, setIdTarefa] = useSessionStorageNumber("idDaTarefa", 0);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [urgencia, setUrgencia] = useState("");
    const [importancia, setImportancia] = useState("");
    const [subTarefas, setSubTarefas] = useState("");
    const [fkUsuario, setFkUsuario] = useState("");
    const defaultId = 0;

    useEffect(() => {
        apiTarefa.get().then(res => {
            console.log("dados", res.data);
            console.log("status code", res.status);
            setListaTarefas(res.data);
            if (res.data === "") {
                setListaTarefas([""])
            }

        }).catch(erro => {
            console.log(erro)
        })

    }, [])

    return(
        <div id="tarefas-geral-lista" className={style.tarefas_geral_lista}>
        <div className={style.container_tipo_tarefa_topo}>
            <div className={style.container_tipo_tarefa_espaco}>
                <span className={style.titulo_prioridade_grupo}>Lista de Tarefas</span>
            </div>
        </div>
        <div id="grupoFazerAgoraLista" className={style.grupo_fazer_agora_lista}>
            <div onClick={() => setOpenModalVerTarefa(true)} className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                    <div className={style.etiqueta_lista} style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                    <div className={style.etiqueta_lista} style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <Tarefa/>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>

            <div className={style.respiro_lista}>

            </div>

        </div>




    </div> 
    );
}