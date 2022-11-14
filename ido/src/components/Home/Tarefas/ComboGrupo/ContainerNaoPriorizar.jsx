import React, { useState, useEffect } from "react";
import apiTarefa from "../../../../api/apiTarefa";
import style from "../../Home.module.css";
import TarefaGrupo from "./TarefaGrupo";

export default function ContainerNaoPriorizar({ setOpenModalVerTarefa }) {
    const [listaTarefas, setListaTarefas] = useState([]);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");
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
        <div id="grupoNaoPriorizar" className={style.grupo_nao_priorizar}>
            <div className={style.grupoTarefas}>
            {   
                            
                            listaTarefas.filter(tarefa => tarefa.importancia == false && tarefa.urgencia == false).map(tarefaAtual => (

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