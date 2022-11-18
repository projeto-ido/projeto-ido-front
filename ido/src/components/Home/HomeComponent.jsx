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


function HomeComponent({ openModal, setOpenModal, openModalVerTarefa, setOpenModalVerTarefa, tipoTarefa, setTipoTarefa, openGerenciadorEtiquetas }) {

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


    return (
        <>
                <Perfil />
                <FilterPesquisar openModal={openModal} openModalVerTarefa={openModalVerTarefa} openGerenciadorEtiquetas={openGerenciadorEtiquetas} />
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
                    setOpenModalVerTarefa={setOpenModalVerTarefa} />
                {handleTarefa()}

                <Spotify />
        </>
    );
}

export default HomeComponent