import React, { useState } from "react";
import MenuLateral from "../../components/Home/MenuLateral";
import style from '../../components/Home/Home.module.css';
import HomeComponent from "../../components/Home/HomeComponent";
import GerenciadorEtiquetas from "../../components/Home/GerenciadorEtiquetas/GerenciadorEtiquetas";

function Home(params) {
    const [openModal, setOpenModal] = useState(false);
    const [tipoTarefa, setTipoTarefa] = useState("matriz");
    const [openModalVerTarefa, setOpenModalVerTarefa] = useState(false);
    const [openGerenciadorEtiquetas, setOpenGerenciadorEtiquetas] = useState(false);
    const [openHome, setOpenHome] = useState(true);

    return (
        <>  
            <main className={style.bodyHome}>

                <MenuLateral 
                    openHome={openHome}
                    setOpenHome={setOpenHome}
                    openGerenciadorEtiquetas={openGerenciadorEtiquetas} 
                    setOpenGerenciadorEtiquetas={setOpenGerenciadorEtiquetas}
                />
                {
                    openGerenciadorEtiquetas ? <GerenciadorEtiquetas /> : null
                }
                {(openModal || openModalVerTarefa) && <div className={style.fundo_escuro} onClick={() => setOpenModal(false)} ></div>}
                <div className={style.funcional}>
                    <HomeComponent 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        openModalVerTarefa={openModalVerTarefa}
                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                        tipoTarefa={tipoTarefa}
                        setTipoTarefa={setTipoTarefa}
                        openGerenciadorEtiquetas={openGerenciadorEtiquetas}
                    />
                </div>

            </main>
        </>
    );

}

export default Home;
