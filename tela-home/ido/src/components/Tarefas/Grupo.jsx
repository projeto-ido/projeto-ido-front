import React, { useState, useEffect } from "react";

export default function Grupo() {
    return (
        <div id="tarefas-geral-grupo" className="tarefas-geral-grupo">

            <div onclick="booleanFazerAgora()" className="container-tipo-tarefa-topo">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Fazer Agora</span>
                    <span id="iconFechadoFazerAgora" className="icon-fechado-fazer-agora">&#9668</span>
                    <span id="iconAbertoFazerAgora" className="icon-aberto-fazer-agora">&#9660</span>
                </div>

            </div>
            <div>

            </div>
            <div id="grupoFazerAgora" className="grupo-fazer-agora">
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

            <div onclick="booleanAgendar()" className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Agendar</span>
                    <span id="iconFechadoAgendar" className="icon-fechado-agendar">&#9668</span>
                    <span id="iconAbertoAgendar" className="icon-aberto-agendar">&#9660</span>
                </div>


            </div>
            <div id="grupoAgendar" className="grupo-agendar">
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

            <div onclick="booleanDelegar()" className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Delegar</span>
                    <span id="iconFechadoDelegar" className="icon-fechado-delegar">&#9668</span>
                    <span id="iconAbertoDelegar" className="icon-aberto-delegar">&#9660</span>
                </div>

            </div>
            <div id="grupoDelegar" className="grupo-delegar">
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

            <div onclick="booleanNaoPriorizar()" className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Não priorizar</span>
                    <span id="iconFechadoNaoPriorizar" className="icon-fechado-nao-priorizar">&#9668</span>
                    <span id="iconAbertoNaoPriorizar" className="icon-aberto-nao-priorizar">&#9660</span>
                </div>

            </div>
            <div id="grupoNaoPriorizar" className="grupo-nao-priorizar">
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
    );
}