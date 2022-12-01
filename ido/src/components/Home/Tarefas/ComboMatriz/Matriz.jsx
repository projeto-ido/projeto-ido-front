import React, { useState, useEffect } from "react";
import Tarefa from "./TarefaGrupo";
import style from "../../Home.module.css";
import apiTarefa from "../../../../api/apiTarefa";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";
import { useSessionStorageString } from "react-use-window-sessionstorage";
// import Spotify from "../../../Spotify/Spotify";

export default function TelaMatriz({ setOpenModalVerTarefa }) {
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
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado", "");
    const defaultId = 0;
    const [sub1Storage, setSub1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSub2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSub3Storage] = useSessionStorageString("subTarefa3")
    const [sub4Storage, setSub4Storage] = useSessionStorageString("subTarefa4")


    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");
            setSub1Storage("");       
            setSub2Storage("");        
            setSub3Storage("");        
            setSub4Storage("");        
        
        apiTarefa.get(`/usuarios/${idUsuario}/tarefas`).then(res => {
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


    return (
        <div id="tarefas-geral-matriz" className={style.tarefas_geral_matriz}>


            <div className={style.tarefas_superior}>

                <div className={style.faca_agora}>
                    <h4 className={style.titulo_prioridade}>Fazer agora</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == true && tarefa.urgencia == true).map(tarefaAtual => (

                                <React.Fragment key={tarefaAtual.idTarefa}>
                                    <Tarefa
                                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                                        titulo={tarefaAtual.titulo}
                                        descricao={tarefaAtual.descricao}
                                        status={tarefaAtual.status}
                                        dataInicio={tarefaAtual.dataInicio}
                                        dataFinal={tarefaAtual.dataFinal}
                                        dataCriacao={tarefaAtual.dataCriacao}
                                        urgencia={tarefaAtual.urgencia}
                                        importancia={tarefaAtual.importancia}
                                        subTarefas={tarefaAtual.subTarefas}
                                        fkUsuario={tarefaAtual.FkUsuario}
                                        etiquetasTarefa={tarefaAtual.etiquetasTarefa}
                                        idTarefa={tarefaAtual.idTarefa}
                                        key={tarefaAtual.idTarefa}
                                    />
                                </React.Fragment>


                            ))
                        }
                    </div>
                </div>
                <div className={style.agendar}>
                    <h4 className={style.titulo_prioridade}>Agendar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == true && tarefa.urgencia == false).map(tarefaAtual => (

                                <React.Fragment key={tarefaAtual.idTarefa}>
                                    <Tarefa
                                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                                        titulo={tarefaAtual.titulo}
                                        descricao={tarefaAtual.descricao}
                                        status={tarefaAtual.status}
                                        dataInicio={tarefaAtual.dataInicio}
                                        dataFinal={tarefaAtual.dataFinal}
                                        dataCriacao={tarefaAtual.dataCriacao}
                                        urgencia={tarefaAtual.urgencia}
                                        importancia={tarefaAtual.importancia}
                                        subTarefas={tarefaAtual.subTarefas}
                                        fkUsuario={tarefaAtual.FkUsuario}
                                        etiquetasTarefa={tarefaAtual.etiquetasTarefa}
                                        idTarefa={tarefaAtual.idTarefa}
                                        key={tarefaAtual.idTarefa}
                                    />
                                </React.Fragment>


                            ))
                        }
                    </div>
                </div>

            </div>

            <div className={style.tarefas_inferior}>

                <div className={style.delegar}>
                    <h4 className={style.titulo_prioridade}>Delegar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == true).map(tarefaAtual => (

                                <React.Fragment key={tarefaAtual.idTarefa}>
                                    <Tarefa
                                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                                        titulo={tarefaAtual.titulo}
                                        descricao={tarefaAtual.descricao}
                                        status={tarefaAtual.status}
                                        dataInicio={tarefaAtual.dataInicio}
                                        dataFinal={tarefaAtual.dataFinal}
                                        dataCriacao={tarefaAtual.dataCriacao}
                                        urgencia={tarefaAtual.urgencia}
                                        importancia={tarefaAtual.importancia}
                                        subTarefas={tarefaAtual.subTarefas}
                                        fkUsuario={tarefaAtual.FkUsuario}
                                        etiquetasTarefa={tarefaAtual.etiquetasTarefa}
                                        idTarefa={tarefaAtual.idTarefa}
                                        key={tarefaAtual.idTarefa}
                                    />
                                </React.Fragment>


                            ))
                        }
                    </div>
                </div>
                <div className={style.nao_priorizar}>
                    <h4 className={style.titulo_prioridade}>Não Priorizar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {

                            listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == false).map(tarefaAtual => (

                                <React.Fragment key={tarefaAtual.idTarefa}>
                                    <Tarefa
                                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                                        titulo={tarefaAtual.titulo}
                                        descricao={tarefaAtual.descricao}
                                        status={tarefaAtual.status}
                                        dataInicio={tarefaAtual.dataInicio}
                                        dataFinal={tarefaAtual.dataFinal}
                                        dataCriacao={tarefaAtual.dataCriacao}
                                        urgencia={tarefaAtual.urgencia}
                                        importancia={tarefaAtual.importancia}
                                        subTarefas={tarefaAtual.subTarefas}
                                        fkUsuario={tarefaAtual.FkUsuario}
                                        etiquetasTarefa={tarefaAtual.etiquetasTarefa}
                                        idTarefa={tarefaAtual.idTarefa}
                                        key={tarefaAtual.idTarefa}
                                    />
                                </React.Fragment>


                            ))
                        }
                    </div>
                </div>
            </div>

        {/* <Spotify/> */}

        </div>
    );
}