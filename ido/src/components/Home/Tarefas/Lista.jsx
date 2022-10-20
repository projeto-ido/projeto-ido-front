import React from "react";

import style from "../Home.module.css"

export default function Lista({setOpenModalVerTarefa}){
    return(
        <div id="tarefas-geral-lista" className={style.tarefas_geral_lista}>
        <div className={style.container_tipo_tarefa_topo}>
            <div className={style.container_tipo_tarefa_espaco}>
                <span className={style.titulo_prioridade_grupo}>Lista de Tarefas</span>
            </div>
        </div>
        <div id="grupoFazerAgoraLista" className={style.grupo_fazer_agora_lista}>
            <div onClick={() => setOpenModalVerTarefa(true)} className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                    <div className={style.etiqueta_lista} style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                    <div className={style.etiqueta_lista} style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>
            <div className={style.tarefa_combo_lista}>
                <span className={style.tarefa}>Nome da tarefa</span>
                <div className={style.container_etiquetas}>
                    <div className={style.etiqueta_lista}>Etiqueta</div>
                </div>

            </div>

            <div className={style.respiro_lista}>

            </div>

        </div>




    </div> 
    );
}