import React, { useState, useEffect } from "react";
import { IconName } from "react-icons/";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import ContainerFazerAgora from "./ComboGrupo/ContainerFazerAgora";
import ContainerAgendar from "./ComboGrupo/ContainerAgendar";
import ContainerDelegar from "./ComboGrupo/ContainerDelegar";
import ContainerNaoPriorizar from "./ComboGrupo/ContainerNaoPriorizar";


export default function Grupo({setOpenModalVerTarefa}) {
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
            return <ContainerFazerAgora setOpenModalVerTarefa={setOpenModalVerTarefa}/>
        }
    }

    function handleContainerAgendar(){
        if (openAgendar) {
            return <ContainerAgendar setOpenModalVerTarefa={setOpenModalVerTarefa}/>
        }
    }

    function handleContainerDelegar(){
        if (openDelegar) {
            return <ContainerDelegar setOpenModalVerTarefa={setOpenModalVerTarefa}/>
        }
    }

    function handleContainerNaoPriorizar(){
        if (openNaoPriorizar) {
            return <ContainerNaoPriorizar setOpenModalVerTarefa={setOpenModalVerTarefa}/>
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
        <div id="tarefas-geral-grupo" className="tarefas-geral-grupo">

            <div onClick={booleanFazerAgora} 
            className="container-tipo-tarefa-topo">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Fazer Agora</span>
                    <span id="iconFechadoFazerAgora" className="icon-fechado-fazer-agora">{handleIconFazer()} </span>

                </div>

            </div>
            {handleContainerFazer()}

            <div onClick={booleanAgendar} 
            className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Agendar</span>
                    <span id="iconFechadoFazerAgora" className="icon-fechado-fazer-agora">{handleIconAgendar()} </span>

                </div>
            </div>
            {handleContainerAgendar()}

            <div onClick={booleanDelegar} 
            className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Delegar</span>
                    <span id="iconFechadoFazerAgora" className="icon-fechado-fazer-agora">{handleIconDelegar()} </span>

                </div>

            </div>
            {handleContainerDelegar()}

            <div onClick={booleanNaoPriorizar} 
            className="container-tipo-tarefa">
                <div className="container-tipo-tarefa-espaco">
                    <span className="titulo-prioridade-grupo">Não priorizar</span>
                    <span id="iconFechadoFazerAgora" className="icon-fechado-fazer-agora">{handleIconNaoPriorizar()} </span>

                </div>

            </div>
            {handleContainerNaoPriorizar()}

        </div>
    );
}