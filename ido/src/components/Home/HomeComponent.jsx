import React from "react";
import AcoesAtividades from "./AcoesAtividades";
import FilterPesquisar from "./FilterPesquisar";
import ModalCriarTarefa from "./ModalCriarTarefa";
import ModalVerTarefa from "./ModalVerTarefa";
import Matriz from "./Tarefas/ComboMatriz/Matriz"
import Grupo from "./Tarefas/Grupo"
import Lista from "./Tarefas/ComboLista/Lista"
import Spotify from "../../components/Spotify/Spotify";
import style from "./Home.module.css"
import { useState } from "react";

function HomeComponent({openModal, setOpenModal, openModalVerTarefa, setOpenModalVerTarefa, tipoTarefa, setTipoTarefa, openGerenciadorEtiquetas, setPomodoroAtivo}){

    const [tarefasAtualizadas, setTarefasAtualizadas] = useState(true)

    function handleTarefa() {
        switch (tipoTarefa) {
            case "matriz":
                return <Matriz setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
            case "grupo":
                return <Grupo setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
            case "lista":
                return <Lista setOpenModalVerTarefa={setOpenModalVerTarefa} tarefasAtualizadas={tarefasAtualizadas} setTarefasAtualizadas={setTarefasAtualizadas}/>
            default:
                return null;
        }
    }
    
    return(
        <>
            <div className={style.div_espacamento} />
            <FilterPesquisar 
                openModal={openModal}  
                openModalVerTarefa={openModalVerTarefa} 
                openGerenciadorEtiquetas={openGerenciadorEtiquetas}
                tipoTarefa={tipoTarefa}
                setTipoTarefa={setTipoTarefa}
                setPomodoroAtivo={setPomodoroAtivo}
            />
            <AcoesAtividades 
                openModalVerTarefa={openModalVerTarefa} 
                setOpenModal={setOpenModal}
                openModal={openModal} 
                tipoTarefa={tipoTarefa} 
                setTipoTarefa={setTipoTarefa}
                openGerenciadorEtiquetas={openGerenciadorEtiquetas}
            />
            <ModalCriarTarefa 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                setTarefasAtualizadas={setTarefasAtualizadas}
            />
            <ModalVerTarefa 
                openModalVerTarefa={openModalVerTarefa} 
                setOpenModalVerTarefa={setOpenModalVerTarefa}
                setTarefasAtualizadas={setTarefasAtualizadas}
            />
            {handleTarefa()}
            <Spotify/>
        </>
    );
}

export default HomeComponent