import React from "react";

import style from "../../Home.module.css";

export default function ContainerAgendar(){
    return(
        <div id="grupoAgendar" className={style.grupo_agendar}>
                <div className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>

                    </div>
                </div>
                <div className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>

                    </div>
                </div>
                <div className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>

                    </div>
                </div>
                <div className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>

                    </div>
                </div>

            </div>
    );
}