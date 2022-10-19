import React from "react";

export default function ContainerFazerAgora({setOpenModalVerTarefa}) {
    return (
        <div>
            <div id="grupoFazerAgora" className="grupo-fazer-agora">
                <div onClick={() => setOpenModalVerTarefa(true)} className="tarefa-combo">
                    <span className="tarefa">Nome da tarefa</span>
                    <div className="container-etiquetas-matriz">
                        <div className="etiqueta">Etiqueta</div>
                        <div className="etiqueta" style={{ backgroundColor: "#51BDAB" }}>Etiqueta</div>
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
                        <div className="etiqueta" style={{ backgroundColor: "#51BDAB" }}>Etiqueta</div>
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