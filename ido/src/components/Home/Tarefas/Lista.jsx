import React from "react";

export default function Lista({setOpenModalVerTarefa}){
    return(
        <div id="tarefas-geral-lista" className="tarefas-geral-lista">
        <div className="container-tipo-tarefa-topo">
            <div className="container-tipo-tarefa-espaco">
                <span className="titulo-prioridade-grupo">Lista de Tarefas</span>
            </div>
        </div>
        <div id="grupoFazerAgoraLista" className="grupo-fazer-agora-lista">
            <div onClick={() => setOpenModalVerTarefa(true)} className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                    <div className="etiqueta-lista" style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                    <div className="etiqueta-lista" style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>
            <div className="tarefa-combo-lista">
                <span className="tarefa">Nome da tarefa</span>
                <div className="container-etiquetas">
                    <div className="etiqueta-lista">Etiqueta</div>
                </div>

            </div>

            <div className="respiro-lista">

            </div>

        </div>




    </div> 
    );
}