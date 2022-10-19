import React from "react";

export default function TelaMatriz({setOpenModalVerTarefa}){
    return(
        <div id="tarefas-geral-matriz" className="tarefas-geral-matriz">


            <div className="tarefas-superior">

                <div className="faca-agora">
                    <h4 className="titulo-prioridade">Fazer agora</h4>
                    <div onClick={() => setOpenModalVerTarefa(true)} className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>
                            <div className="etiqueta" style={{backgroundColor: "#51BDAB"}} >Etiqueta</div>
                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>
                            <div className="etiqueta" style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                </div>
                <div className="agendar">
                    <h4 className="titulo-prioridade">Agendar</h4>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="container-etiquetas-matriz">
                            <div className="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="tarefas-inferior">

                <div className="delegar">
                    <h4 className="titulo-prioridade">Delegar</h4>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                </div>
                <div className="nao-priorizar">
                    <h4 className="titulo-prioridade">Não Priorizar</h4>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                    <div className="tarefa-combo">
                        <span className="tarefa">Nome da tarefa</span>
                        <div className="etiqueta">Etiqueta</div>
                    </div>
                </div>
            </div>



        </div>
    );
}