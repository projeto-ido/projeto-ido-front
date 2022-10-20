import React from "react";

import style from "../Home.module.css"

export default function TelaMatriz({setOpenModalVerTarefa}){
    return(
        <div id="tarefas-geral-matriz" className={style.tarefas_geral_matriz}>


            <div className={style.tarefas_superior}>

                <div className={style.faca_agora}>
                    <h4 className={style.titulo_prioridade}>Fazer agora</h4>
                    <div onClick={() => setOpenModalVerTarefa(true)} className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.container_etiquetas_matriz}>
                            <div className={style.etiqueta}>Etiqueta</div>
                            <div className={style.etiqueta} style={{backgroundColor: "#51BDAB"}} >Etiqueta</div>
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
                            <div className={style.etiqueta} style={{backgroundColor: "#51BDAB"}}>Etiqueta</div>
                        </div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.container_etiquetas_matriz}>
                            <div className={style.etiqueta}>Etiqueta</div>

                        </div>
                    </div>
                </div>
                <div className={style.agendar}>
                    <h4 className={style.titulo_prioridade}>Agendar</h4>
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

            </div>

            <div className={style.tarefas_inferior}>

                <div className={style.delegar}>
                    <h4 className={style.titulo_prioridade}>Delegar</h4>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                </div>
                <div className={style.nao_priorizar}>
                    <h4 className={style.titulo_prioridade}>Não Priorizar</h4>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                    <div className={style.tarefa_combo}>
                        <span className={style.tarefa}>Nome da tarefa</span>
                        <div className={style.etiqueta}>Etiqueta</div>
                    </div>
                </div>
            </div>



        </div>
    );
}