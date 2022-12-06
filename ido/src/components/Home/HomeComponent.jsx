import React from "react";
import AcoesAtividades from "./AcoesAtividades";
import FilterPesquisar from "./FilterPesquisar";
import ModalCriarTarefa from "./ModalCriarTarefa";
import ModalVerTarefa from "./ModalVerTarefa";
import Perfil from "./Perfil";
import Matriz from "./Tarefas/ComboMatriz/Matriz"
import Grupo from "./Tarefas/Grupo"
import Lista from "./Tarefas/ComboLista/Lista"
import Spotify from "../../components/Spotify/Spotify";
import style from "./Home.module.css"

<<<<<<< HEAD
function HomeComponent({openModal, setOpenModal, openModalVerTarefa, setOpenModalVerTarefa, tipoTarefa, setTipoTarefa, openGerenciadorEtiquetas, setPomodoroAtivo}){
=======

function HomeComponent({ openModal, setOpenModal, openModalVerTarefa, setOpenModalVerTarefa, tipoTarefa, setTipoTarefa, openGerenciadorEtiquetas, setPomodoroAtivo }) {
>>>>>>> 4cf8ba46043d5a1cae029f65e459dc7885323da1

    function handleTarefa() {
        switch (tipoTarefa) {
            case "matriz":
                return <Matriz setOpenModalVerTarefa={setOpenModalVerTarefa} />
            case "grupo":
                return <Grupo setOpenModalVerTarefa={setOpenModalVerTarefa} />
            case "lista":
                return <Lista setOpenModalVerTarefa={setOpenModalVerTarefa} />
            default:
                return null;
        }
    }
<<<<<<< HEAD
=======


    
>>>>>>> 4cf8ba46043d5a1cae029f65e459dc7885323da1
    
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
            setOpenModal={setOpenModal} />
            <ModalVerTarefa 
            openModalVerTarefa={openModalVerTarefa} 
            setOpenModalVerTarefa={setOpenModalVerTarefa}/>
            {handleTarefa()}
<<<<<<< HEAD
            <Spotify/>
=======
>>>>>>> 4cf8ba46043d5a1cae029f65e459dc7885323da1
        </>
    );
}

export default HomeComponent