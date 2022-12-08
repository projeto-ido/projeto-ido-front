import React, { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import ContainerFazerAgora from "./ComboGrupo/ContainerFazerAgora";
import ContainerAgendar from "./ComboGrupo/ContainerAgendar";
import ContainerDelegar from "./ComboGrupo/ContainerDelegar";
import ContainerNaoPriorizar from "./ComboGrupo/ContainerNaoPriorizar";
import style from '../Home.module.css';

export default function Grupo({setOpenModalVerTarefa, tarefasAtualizadas, setTarefasAtualizadas}) {
    const [openFazer, setOpenFazer] = useState(true);
    const [openAgendar, setOpenAgendar] = useState(false);
    const [openDelegar, setOpenDelegar] = useState(false);
    const [openNaoPriorizar, setOpenNaoPriorizar] = useState(false);


    function handleIconFazer() {
        if (openFazer) {
            return <AiOutlineCaretDown size="3vh" />
        } else {
            return <AiFillCaretLeft size="3vh" />
        }
    }

    function handleIconAgendar(){
        if (openAgendar) {
            return <AiOutlineCaretDown size="3vh" />
        } else {
            return <AiFillCaretLeft size="3vh" />
        }
    }

    function handleIconDelegar(){
        if (openDelegar) {
            return <AiOutlineCaretDown size="3vh" />
        } else {
            return <AiFillCaretLeft size="3vh" />
        }
    }

    function handleIconNaoPriorizar(){
        if (openNaoPriorizar) {
            return <AiOutlineCaretDown size="3vh" />
        } else {
            return <AiFillCaretLeft size="3vh" />
        }
    }

    function handleContainerFazer() {
        if (openFazer) {
            return <ContainerFazerAgora setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
        }
    }

    function handleContainerAgendar(){
        if (openAgendar) {
            return <ContainerAgendar setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
        }
    }

    function handleContainerDelegar(){
        if (openDelegar) {
            return <ContainerDelegar setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
        }
    }

    function handleContainerNaoPriorizar(){
        if (openNaoPriorizar) {
            return <ContainerNaoPriorizar setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
        } 
    }

    function booleanFazerAgora(){
        if(openFazer){
            setOpenFazer(false);
        } else {
            setOpenFazer(true);
        }
    }

    function booleanAgendar(){
        if(openAgendar){
            setOpenAgendar(false);
        } else {
            setOpenAgendar(true);
        }
    }

    function booleanDelegar(){
        if(openDelegar){
            setOpenDelegar(false);
        } else {
            setOpenDelegar(true);
        }
    }

    function booleanNaoPriorizar(){
        if(openNaoPriorizar){
            setOpenNaoPriorizar(false);
        } else {
            setOpenNaoPriorizar(true);
        }
    }

    return (
        <div id="tarefas-geral-grupo" className={style.tarefas_geral_grupo}>
            <div onClick={booleanFazerAgora} 
            className={style.container_tipo_tarefa_topo}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Fazer Agora</span>
                    <span id="iconFechadoFazerAgora" className={style.icon_fechado_fazer_agora}>{handleIconFazer()} </span>
                </div>
            </div>
            {handleContainerFazer()}

            <div onClick={booleanAgendar} className={style.container_tipo_tarefa}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Agendar</span>
                    <span id="iconFechadoFazerAgora" className={style.icon_fechado_fazer_agora}>{handleIconAgendar()} </span>
                </div>
            </div>
            {handleContainerAgendar()}

            <div onClick={booleanDelegar} className={style.container_tipo_tarefa}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Delegar</span>
                    <span id="iconFechadoFazerAgora" className={style.icon_fechado_fazer_agora}>{handleIconDelegar()} </span>
                </div>
            </div>
            {handleContainerDelegar()}

            <div onClick={booleanNaoPriorizar} className={style.container_tipo_tarefa}>
                <div className={style.container_tipo_tarefa_espaco}>
                    <span className={style.titulo_prioridade_grupo}>Não priorizar</span>
                    <span id="iconFechadoFazerAgora" className={style.icon_fechado_fazer_agora}>{handleIconNaoPriorizar()} </span>
                </div>
            </div>
            {handleContainerNaoPriorizar()}
        </div>
    );
}
