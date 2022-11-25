import React, { useState, useEffect } from 'react';
import apiPerfil from '../../api/apiPerfil';
import { useNavigate } from 'react-router-dom';
import styles from "./Perfil.module.css";
import Conteudo from './Conteudo';

function Sidebar() {
    const navigate = useNavigate();
    const [listaInfoUser, setListaInfoUser] = useState([])
    
    useEffect(() => {
        apiPerfil.get().then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    function sair() {
        document.body.style.setProperty('--background--conteudo', '');
        document.body.style.setProperty('--opacidade--conteudo', '100%');
        navigate("/home")
    }

    function editarPerfil() {
        document.getElementById("botao_editar").disabled = true;
        document.getElementById("botao_editar").style.opacity = "50%";
        document.getElementById("botao_editar").style.cursor = "default";
        document.getElementById("botao_editar").style.backgroundColor = "#5D84C2";
        document.body.style.setProperty('--background--conteudo', 'black');
        document.body.style.setProperty('--opacidade--conteudo', '80%');
    }

    return(
        <>
            {
                listaInfoUser.map(infoAtual => (
                    <React.Fragment key={infoAtual.id}>
                        <div className={styles.toolbar}>
                            <div className={styles.container}>
                                <div>
                                    <div className={styles.foto_perfil}>
                                        <img src={infoAtual.imagem} alt="Foto de perfil do usuário" />
                                        <div>
                                            <div className={styles.nivel}>
                                                <span id="nm-nivel">{infoAtual.nivel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className={styles.opcoes}>
                                        <span id="nome_usuario">{infoAtual.titulo}</span>
                                        <span id="usuario">@{infoAtual.texto}</span>
                                        <button onClick={sair}>Sair</button>
                                    </div>
                                <div className={styles.status}>
                                    <div className={styles.status_container}>
                                        <h1>Status Gerais</h1>
                                        <span>Total de tarefas: {infoAtual.totalTarefa}</span>
                                        <span>Tarefas pendentes: {infoAtual.tarefaPendente}</span>
                                        <span>Tarefas concluídas: {infoAtual.tarefaConcluida}</span>
                                        <span>Total de conquistas: {infoAtual.totalConquista}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default Sidebar;