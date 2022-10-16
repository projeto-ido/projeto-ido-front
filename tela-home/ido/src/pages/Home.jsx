import React, { useState, useEffect } from "react";
import api from "../api";
import MenuLateral from "../components/MenuLateral";
import Perfil from "../components/Perfil";
import FilterPesquisar from "../components/FilterPesquisar"
import AcoesAtividades from "../components/AcoesAtividades"
import ModalCriarTarefa from "../components/ModalCriarTarefa"
import Matriz from "../components/Tarefas/Matriz"
import Grupo from "../components/Tarefas/Grupo"
import Lista from "../components/Tarefas/Lista"


function Home(params) {
    const [openModal, setOpenModal] = useState(false);
    const [tipoTarefa, setTipoTarefa] = useState("matriz");

    function handleTarefa() {
        switch (tipoTarefa) {
            case "matriz":
                return <Matriz />
            case "grupo":
                return <Grupo />
            case "lista":
                return <Lista />
            default:
                return null;
        }
    }

    return (
        <>  
            <MenuLateral />
            {openModal && <div class="fundo-escuro" ></div>}
            <div className="funcional">
                <Perfil />
                <FilterPesquisar openModal={openModal} />
                <AcoesAtividades setOpenModal={setOpenModal} openModal={openModal} tipoTarefa={tipoTarefa} setTipoTarefa={setTipoTarefa}/>
                <ModalCriarTarefa openModal={openModal} setOpenModal={setOpenModal} />
                {handleTarefa()}
            </div>

        </>
    );

}

export default Home;
