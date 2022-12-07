import React, { useState, useEffect } from "react";
import Tarefa from "./TarefaMatriz";
import style from "../../Home.module.css";
import apiTarefa from "../../../../api/apiTarefa";
import { useSessionStorageNumber, useSessionStorageBoolean, useSessionStorageString } from "react-use-window-sessionstorage";

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
    const [atualizarFiltroEtiqueta, setAtualizarFiltroEtiqueta] = useSessionStorageBoolean("atualizarFiltroEtiqueta", false);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");
        setSub1Storage("");
        setSub2Storage("");
        setSub3Storage("");

        apiTarefa.get(`/usuarios/${idUsuario}/tarefas`).then(res => {
            setListaTarefas(res.data);
            console.log(res.data)
            if (res.data === "") {
                setListaTarefas([""])
            }

        }).catch(erro => {
            console.log(erro)

        })

    }, [])

    function isEtiqueta1() {

    }

    return (
        <div id="tarefas-geral-matriz" className={style.tarefas_geral_matriz}>


            <div className={style.tarefas_superior}>

                <div className={style.tarefas_div}>
                    <h4 className={style.titulo_prioridade}>Fazer agora</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == true && tarefa.urgencia == true
                                //filtro por etiqueta
                                && ((JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == "") ? true :
                                (((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] !== undefined) ?
                                    (JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta
                                        || JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[1].idEtiqueta) : false)
                                    || ((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] == undefined) ?
                                        JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta : false)
                                ))
                                ).map(tarefaAtual => (

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
                <div className={style.tarefas_div}>
                    <h4 className={style.titulo_prioridade}>Agendar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == true && tarefa.urgencia == false && tarefa.etiquetasTarefa //filtro por prioridade
                                //filtro por etiqueta
                                && ((JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == "") ? true :
                                (((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] !== undefined) ?
                                    (JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta
                                        || JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[1].idEtiqueta) : false)
                                    || ((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] == undefined) ?
                                        JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta : false)
                                ))
                            ).map(tarefaAtual => (

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
                <div className={style.tarefas_div}>
                    <h4 className={style.titulo_prioridade}>Delegar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {
                            listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == true
                                //filtro por etiqueta
                                && ((JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == "") ? true :
                                (((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] !== undefined) ?
                                    (JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta
                                        || JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[1].idEtiqueta) : false)
                                        || ((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] == undefined) ?
                                        JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta : false)
                                ))
                            ).map(tarefaAtual => (
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
                <div className={style.tarefas_div}>
                    <h4 className={style.titulo_prioridade}>Não Priorizar</h4>
                    <div className={style.containerTarefasMatriz}>
                        {

                            listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == false
                                //filtro por etiqueta
                                && ((JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == "") ? true :
                                (((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] !== undefined) ?
                                    (JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta
                                        || JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[1].idEtiqueta) : false)
                                    || ((tarefa.etiquetasTarefa[0] !== undefined && tarefa.etiquetasTarefa[1] == undefined) ?
                                        JSON.parse(sessionStorage.getItem("etiquetaFiltro")) == tarefa.etiquetasTarefa[0].idEtiqueta : false)
                                ))).map(tarefaAtual => (

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