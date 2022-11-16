import React, { useState, useEffect } from "react";
import apiTarefa from "../../../../api/apiTarefa";
import style from "../../Home.module.css";
import TarefaGrupo from "./TarefaGrupo";
import { useSessionStorageString } from "react-use-window-sessionstorage";

export default function ContainerAgendar({ setOpenModalVerTarefa }) {
    const [listaTarefas, setListaTarefas] = useState([]);
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
        <div className={style.grupo_agendar}>
            <div className={style.grupoTarefas}>
            {
                           listaTarefas.filter(tarefa => tarefa.importancia == true && tarefa.urgencia == false).map(tarefaAtual => (

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