import React, { useState, useEffect } from "react";
import TarefaLista from "./TarefaLista";
import style from "../../Home.module.css";
import apiTarefa from "../../../../api/apiTarefa";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";

export default function Lista({ setOpenModalVerTarefa }) {
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
        <div id="tarefas-geral-lista" className={style.tarefas_geral_lista}>
            <div className={style.container_tipo_tarefa_topo}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Lista de Tarefas</span>
                </div>
            </div>
            <div id="grupoFazerAgoraLista" className={style.grupo_fazer_agora_lista}>
                <div className={style.tarefas_listadas}>
                    {
                        listaTarefas.map(tarefaAtual => (

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
                    }
                </div>

            </div>




        </div>
    );
}