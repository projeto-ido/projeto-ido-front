import React, { useState, useEffect } from 'react';
import apiPerfil from '../../api/apiPerfil';
import { Link } from 'react-router-dom';

import styles from "./Perfil.module.css";

function Sidebar() {
    const [listaInfoUser, setListaInfoUser] = useState([])

    useEffect(() => {
        apiPerfil.get().then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

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
                                            <button>Editar Perfil</button>
                                            <button>
                                                <Link to="/home" className={styles.sair}>
                                                    Sair
                                                </Link>
                                            </button>
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