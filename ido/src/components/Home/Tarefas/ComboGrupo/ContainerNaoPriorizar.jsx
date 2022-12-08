import React, { useState, useEffect } from "react";
import apiTarefa from "../../../../api/apiTarefa";
import style from "../../Home.module.css";
import TarefaGrupo from "./TarefaGrupo";
import { useSessionStorageString } from "react-use-window-sessionstorage";

export default function ContainerNaoPriorizar({ setOpenModalVerTarefa,  tarefasAtualizadas, setTarefasAtualizadas }) {
    const [listaTarefas, setListaTarefas] = useState([]);
    const [sub1Storage, setSub1Storage] = useSessionStorageString("subTarefa1")
    const [sub2Storage, setSub2Storage] = useSessionStorageString("subTarefa2")
    const [sub3Storage, setSub3Storage] = useSessionStorageString("subTarefa3")

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

    return (
        <div id="grupoNaoPriorizar" className={style.div_grupo}>
            <div className={style.grupoTarefas}>
                {  
                    listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == false
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
                            <TarefaGrupo
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
    );
}