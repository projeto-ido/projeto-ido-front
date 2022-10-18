import React, { useState } from "react";
import api from "../api";
import MenuLateral from "../components/MenuLateral";
import Perfil from "../components/Perfil";
import FilterPesquisar from "../components/FilterPesquisar"
import AcoesAtividades from "../components/AcoesAtividades"
import ModalCriarTarefa from "../components/ModalCriarTarefa"
import Matriz from "../components/Tarefas/Matriz"
import Grupo from "../components/Tarefas/Grupo"
import Lista from "../components/Tarefas/Lista"
import ModalVerTarefa from "../components/ModalVerTarefa";


function Home(params) {
    const [openModal, setOpenModal] = useState(false);
    const [tipoTarefa, setTipoTarefa] = useState("matriz");
    const [openModalVerTarefa, setOpenModalVerTarefa] = useState(false);

    function handleTarefa() {
        switch (tipoTarefa) {
            case "matriz":
                return <Matriz setOpenModalVerTarefa={setOpenModalVerTarefa}/>
            case "grupo":
                return <Grupo setOpenModalVerTarefa={setOpenModalVerTarefa}/>
            case "lista":
                return <Lista setOpenModalVerTarefa={setOpenModalVerTarefa}/>
            default:
                return null;
        }
    }

    return (
        <>  
            <MenuLateral />
            {(openModal || openModalVerTarefa) && <div className="fundo-escuro" onClick={() => setOpenModal(false)} ></div>}
            <div className="funcional">
                <Perfil />
                <FilterPesquisar openModal={openModal}  openModalVerTarefa={openModalVerTarefa}/>
                <AcoesAtividades openModalVerTarefa={openModalVerTarefa} setOpenModal={setOpenModal} openModal={openModal} tipoTarefa={tipoTarefa} setTipoTarefa={setTipoTarefa}/>
                <ModalCriarTarefa openModal={openModal} setOpenModal={setOpenModal} />
                <ModalVerTarefa openModalVerTarefa={openModalVerTarefa} setOpenModalVerTarefa={setOpenModalVerTarefa}/>
                {handleTarefa()}
                
            </div>

        </>
    );

}

export default Home;
