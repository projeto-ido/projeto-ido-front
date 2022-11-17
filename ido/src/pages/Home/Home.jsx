import React, { useState } from "react";
import MenuLateral from "../../components/Home/MenuLateral";
import HomeComponent from "../../components/Home/HomeComponent";
import GerenciadorEtiquetas from "../../components/Home/GerenciadorEtiquetas/GerenciadorEtiquetas";
import Acessibilidade from "../../components/Home/Acessibilidade/Acessibilidade";
<<<<<<< HEAD
import style from '../../components/Home/Home.module.css';
=======
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 538d8062439980e6b948daa81964da52ea83fbee

function Home(params) {
    if(sessionStorage.getItem("name") === "Normal") {
        /* NORMAL */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#51BDAB');
        document.body.style.setProperty('--cor--roxo', '#7463C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');

    } else if (sessionStorage.getItem("name") === "Protanopia") {
        /* PROTANOPIA */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#DAD080');
        document.body.style.setProperty('--cor--roxo', '#059ECC');
        document.body.style.setProperty('--cor--amarela', '#FFE36D');

    } else if(sessionStorage.getItem("name") === "Deuteranopia") {
        /* DEUTERANOPIA */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#00C34D');
        document.body.style.setProperty('--cor--roxo', '#1CA0C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');

    } else if (sessionStorage.getItem("name") === "Tritanopia") {
        /* TRITANOPIA */
        document.body.style.setProperty('--cor--azul', '#95F313');
        document.body.style.setProperty('--cor--verde', '#238FF7');
        document.body.style.setProperty('--cor--roxo', '#FFA58D');
        document.body.style.setProperty('--cor--amarela', '#E44D4D');

    } else {
        /* NORMAL */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#51BDAB');
        document.body.style.setProperty('--cor--roxo', '#7463C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');
        
    }

    function notificarSucesso(){
        toast.success("Cores alteradas!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }

    const [openModal, setOpenModal] = useState(false);
    const [tipoTarefa, setTipoTarefa] = useState("matriz");
    const [openModalVerTarefa, setOpenModalVerTarefa] = useState(false);
    const [openGerenciadorEtiquetas, setOpenGerenciadorEtiquetas] = useState(false);
    const [openHome, setOpenHome] = useState(true);
    const [openAcessibilidade, setOpenAcessibilidade] = useState(false);


    return (
        <>  
            <main className={style.bodyHome}>
                <ToastContainer />
                <MenuLateral 
                    openHome={openHome}
                    setOpenHome={setOpenHome}
                    openGerenciadorEtiquetas={openGerenciadorEtiquetas} 
                    setOpenGerenciadorEtiquetas={setOpenGerenciadorEtiquetas}
                    openAcessibilidade={openAcessibilidade}
                    setOpenAcessibilidade={setOpenAcessibilidade}
                />
                {
                    openGerenciadorEtiquetas ? <GerenciadorEtiquetas /> : null
                }
                {
                    openAcessibilidade ? <Acessibilidade 
                        setOpenHome={setOpenHome} 
                        setOpenAcessibilidade={setOpenAcessibilidade} 
                        funcaoNotificar={notificarSucesso}/> : null
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
<<<<<<< HEAD
=======

>>>>>>> 538d8062439980e6b948daa81964da52ea83fbee
            </main>
        </>
    );

}

export default Home;
