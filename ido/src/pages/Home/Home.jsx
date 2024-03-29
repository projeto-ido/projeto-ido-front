import React, { useState } from "react";
import MenuLateral from "../../components/Home/MenuLateral";
import HomeComponent from "../../components/Home/HomeComponent";
import GerenciadorEtiquetas from "../../components/Home/GerenciadorEtiquetas/GerenciadorEtiquetas";
import Acessibilidade from "../../components/Home/Acessibilidade/Acessibilidade";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.toast.css";
import style from '../../components/Home/Home.module.css';
import acessibilidade from "../../scripts/acessibilidade";
import apiGerenciadorEtiquetas from "../../api/apiService"
import Cronometro from "../../components/Pomodoro/Cronometro";

function Home(params) {
    acessibilidade();

    const [tarefasAtualizadas, setTarefasAtualizadas] = useState(true)

    function notificarSucesso() {
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
    const [pomodoroAtivo, setPomodoroAtivo] = useState(false);
    
    function limparAcoes(){
        const idUsuario = sessionStorage.getItem("idLogado")
        apiGerenciadorEtiquetas.delete(`/usuarios/${idUsuario}/etiquetas/acoes`)
        .then((res) => {
            console.log("Ações limpas")
        }
        ).catch((erro) => {
            console.log(erro)
        })
    }

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
                    openGerenciadorEtiquetas ? <GerenciadorEtiquetas setTarefasAtualizadas={setTarefasAtualizadas} /> : limparAcoes()
                }
                {
                    openAcessibilidade ? <Acessibilidade
                        setOpenHome={setOpenHome}
                        setOpenAcessibilidade={setOpenAcessibilidade}
                        funcaoNotificar={notificarSucesso} /> : null
                }
                {
                    pomodoroAtivo ? <div className={style.fundo_escuro} onClick={() => setPomodoroAtivo(false)} >
                        <Cronometro></Cronometro>
                    </div> : null
                }
                {(openModal || openModalVerTarefa) &&
                    <div onClick={() => setOpenModalVerTarefa(false)}>
                        <div className={style.fundo_escuro} onClick={() => setOpenModal(false)} ></div>
                    </div>}
                <div className={style.funcional}>
                    <HomeComponent
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        openModalVerTarefa={openModalVerTarefa}
                        setOpenModalVerTarefa={setOpenModalVerTarefa}
                        tipoTarefa={tipoTarefa}
                        setTipoTarefa={setTipoTarefa}
                        openGerenciadorEtiquetas={openGerenciadorEtiquetas}
                        setPomodoroAtivo={setPomodoroAtivo}
                        tarefasAtualizadas={tarefasAtualizadas}
                        setTarefasAtualizadas={setTarefasAtualizadas}
                    />
                </div>
            </main>
        </>
    );
}

export default Home;
