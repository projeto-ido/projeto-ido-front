import React from "react";

import style from "../../Home.module.css"

export default function ContainerFazerAgora({setOpenModalVerTarefa}) {
    return (
        <div>
            <div id="grupoFazerAgora" className={style.grupo_fazer_agora}>
                <div onClick={() => setOpenModalVerTarefa(true)} className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>
                        <div className={style.etiqueta} style={{ backgroundColor: "#51BDAB" }}>Etiqueta</div>
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
                        <div className={style.etiqueta} style={{ backgroundColor: "#51BDAB" }}>Etiqueta</div>
                    </div>
                </div>
                <div className={style.tarefa_combo}>
                    <span className={style.tarefa}>Nome da tarefa</span>
                    <div className={style.container_etiquetas_matriz}>
                        <div className={style.etiqueta}>Etiqueta</div>

                    </div>
                </div>
            </div>
        </div>
    );
}