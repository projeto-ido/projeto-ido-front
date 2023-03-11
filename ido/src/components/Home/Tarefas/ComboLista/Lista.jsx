import React, { useState, useEffect } from "react";
import TarefaLista from "./TarefaLista";
import style from "../../Home.module.css";
import apiTarefa from "../../../../api/apiTarefa";
import { useSessionStorageNumber, useSessionStorageString, useSessionStorageBoolean } from "react-use-window-sessionstorage";

export default function Lista({ setOpenModalVerTarefa, tarefasAtualizadas, setTarefasAtualizadas }) {
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
    const [sub1Storage, setSub1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSub2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSub3Storage] = useSessionStorageString("subTarefa3")
    const [sub4Storage, setSub4Storage] = useSessionStorageString("subTarefa4")
    const [atualizarFiltro, setAtualizarFiltro] = useSessionStorageBoolean("atualizarFiltro");
    const [atualizarFiltroEtiqueta, setAtualizarFiltroEtiqueta] = useSessionStorageBoolean("atualizarFiltroEtiqueta", false);
    
    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");
        setSub1Storage("");
        setSub2Storage("");
        setSub3Storage("");
        setListaTarefas([])

        apiTarefa.get(`/usuarios/${idUsuario}/tarefas`).then(res => {
            if(res.status === 200){
                setListaTarefas(res.data);
                setTarefasAtualizadas(true)
            }
            console.log(res.data)
            if (res.data === "") {
                setListaTarefas([""])
            }
        }).catch(erro => {
            console.log(erro)

        })

    }, [tarefasAtualizadas])

    const isBlackFiltro = sessionStorage.getItem("palavraPesquisa") !== "";

    function tarefasFiltradas() {
        return (
            isBlackFiltro ? listaTarefas.filter(tarefa => tarefa.titulo.includes(sessionStorage.getItem("palavraPesquisa"))
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
                    <TarefaLista
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
            )) : listaTarefas.map(tarefaAtual => (

                <React.Fragment key={tarefaAtual.idTarefa}>
                    <TarefaLista
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
        );

    }

    return (
        <div id="tarefas-geral-lista" className={style.tarefas_geral_lista}>
            <div className={style.container_tipo_tarefa_topo}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Lista de Tarefas</span>
                </div>
            </div>
            <div id="grupoFazerAgoraLista" className={style.grupo_fazer_agora_lista}>
                <div className={style.tarefas_listadas}>
                    {tarefasFiltradas()}
                </div>
            </div>
            <div className={style.div_espacamento_baixo}></div>
        </div>
    );
}