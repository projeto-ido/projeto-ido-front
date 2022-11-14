import React, { useState } from "react";
import MenuLateral from "../../components/Home/MenuLateral";
import Perfil from "../../components/Home/Perfil";
import FilterPesquisar from "../../components/Home/FilterPesquisar"
import AcoesAtividades from "../../components/Home/AcoesAtividades"
import ModalCriarTarefa from "../../components/Home/ModalCriarTarefa"
import Matriz from "../../components/Home/Tarefas/ComboMatriz/Matriz"
import Grupo from "../../components/Home/Tarefas/Grupo"
import Lista from "../../components/Home/Tarefas/Lista"
import ModalVerTarefa from "../../components/Home/ModalVerTarefa";
import style from '../../components/Home/Home.module.css';
import Spotify from '../../components/Spotify/Spotify';

function Home(params) {
    const [openModal, setOpenModal] = useState(false);
    const [tipoTarefa, setTipoTarefa] = useState("matriz");
    const [openModalVerTarefa, setOpenModalVerTarefa] = useState(false);

    function handleTarefa() {
        switch (tipoTarefa) {
            case "matriz":
                return <Matriz setOpenModalVerTarefa={setOpenModalVerTarefa} />
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
            <main className={style.bodyHome}>

                <MenuLateral />
                {(openModal || openModalVerTarefa) && <div className={style.fundo_escuro} onClick={() => setOpenModal(false)} ></div>}
                <div className={style.funcional}>
                    <Perfil />
                    <FilterPesquisar openModal={openModal}  openModalVerTarefa={openModalVerTarefa}/>
                    <AcoesAtividades openModalVerTarefa={openModalVerTarefa} setOpenModal={setOpenModal} openModal={openModal} tipoTarefa={tipoTarefa} setTipoTarefa={setTipoTarefa}/>
                    <ModalCriarTarefa openModal={openModal} setOpenModal={setOpenModal} />
                    <ModalVerTarefa openModalVerTarefa={openModalVerTarefa} setOpenModalVerTarefa={setOpenModalVerTarefa}/>
                    {handleTarefa()}
                    <Spotify />
                </div>
                
                

            </main>
        </>
    );

}

export default Home;
