import React, { useState, useEffect } from "react";

export default function ContainerAgendar(){
    return(
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
    );
}