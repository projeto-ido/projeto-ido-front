import React, { useState, useEffect } from "react";

export default function TelaMatriz(){
    return(
        <div id="tarefas-geral-matriz" class="tarefas-geral-matriz">


            <div class="tarefas-superior">

                <div class="faca-agora">
                    <h4 class="titulo-prioridade">Fazer agora</h4>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>
                            <div class="etiqueta" style={{backgroundColor: "#51BDAB"}} >Etiqueta</div>
                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>
                            <div class="etiqueta" style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                </div>
                <div class="agendar">
                    <h4 class="titulo-prioridade">Agendar</h4>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="container-etiquetas-matriz">
                            <div class="etiqueta">Etiqueta</div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="tarefas-inferior">

                <div class="delegar">
                    <h4 class="titulo-prioridade">Delegar</h4>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                </div>
                <div class="nao-priorizar">
                    <h4 class="titulo-prioridade">Não Priorizar</h4>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                    <div class="tarefa-combo">
                        <span class="tarefa">Nome da tarefa</span>
                        <div class="etiqueta">Etiqueta</div>
                    </div>
                </div>
            </div>



        </div>
    );
}