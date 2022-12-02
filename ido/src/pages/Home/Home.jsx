import React, { useState } from "react";
import MenuLateral from "../../components/Home/MenuLateral";
import HomeComponent from "../../components/Home/HomeComponent";
import GerenciadorEtiquetas from "../../components/Home/GerenciadorEtiquetas/GerenciadorEtiquetas";
import Acessibilidade from "../../components/Home/Acessibilidade/Acessibilidade";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../../components/Home/Home.module.css';
import acessibilidade from "../../scripts/acessibilidade";
import apiGerenciadorEtiquetas from "../../api/apiService"
import axios from '../../api/api'

function Home(params) {
    acessibilidade();

    const download = (data) => {
        const date = new Date
        const bom = new Uint8Array([0xEF,0xBB,0xBF])
        const blob = new Blob([bom, "TAREFAS;" + "DESCRIÇÃO;" + "DATA DE INICIO;" + "DATA FINAL;" + "STATUS;" + "SUBTAREFAS - STATUS;" + "ETIQUETA 1;" + "ETIQUETA 2;" + "\n" + data]);
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');

        a.setAttribute('href', url);
        a.setAttribute('download', `relatorio_tarefas_${date.toLocaleDateString()}.csv`);
        document.body.appendChild(a);
        a.click();
    }

    const handleDownload = () => {
        axios.post("/usuarios/1/exportacao/grava/csv/teste", null)
        .then(res => {
            console.log(res);
            download(res.data)

        }).catch(erro => {
            console.log(erro);
        })
    }

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
    const idUsuario = sessionStorage.getItem("idLogado")

    function limparAcoes(){
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
                {/* <button onClick={handleDownload}>AAAAAAA</button> */}
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
                    openGerenciadorEtiquetas ? <GerenciadorEtiquetas /> : limparAcoes()
                }
                {
                    openAcessibilidade ? <Acessibilidade
                        setOpenHome={setOpenHome}
                        setOpenAcessibilidade={setOpenAcessibilidade}
                        funcaoNotificar={notificarSucesso} /> : null
                }
                {
                    pomodoroAtivo ? <div className={style.fundo_escuro}></div> : null
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
                        />
                </div>
            </main>
        </>
    );

}

export default Home;
