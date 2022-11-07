import React, { useState, useEffect } from "react";
import Tarefa from "./Tarefa";
import style from "../../Home.module.css";
import apiTarefa from "../../../../api/apiTarefa";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";

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



        </div>
    );
}