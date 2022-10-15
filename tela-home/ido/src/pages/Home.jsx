import React, { useState, useEffect } from "react";
import api from "../api";
import MenuLateral from "../components/MenuLateral";
import Perfil from "../components/Perfil";
import FilterPesquisar from "../components/FilterPesquisar"
import AcoesAtividades from "../components/AcoesAtividades"
import ModalCriarTarefa from "../components/ModalCriarTarefa"


function Home(params) {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <MenuLateral />            
            {openModal && <div class="fundo-escuro" ></div>}
            <div className="funcional">
                <Perfil />
                <FilterPesquisar openModal={openModal} />
                <AcoesAtividades setOpenModal={setOpenModal} openModal={openModal} />
                <ModalCriarTarefa openModal={openModal} setOpenModal={setOpenModal} />
            </div>

        </>
    );

}

export default Home;
