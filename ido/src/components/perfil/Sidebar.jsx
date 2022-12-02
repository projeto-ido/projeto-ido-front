import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Perfil.module.css";
import StatusGerais from './conteudo-components/sidebar-components/StatusGerais';
import fotoPerfil from '../../assets/images/ido-utilizador.png'

function Sidebar() {
    const navigate = useNavigate();

    function sair() {
        navigate("/home")
    }

    return(
        <>
            <React.Fragment>
                <div className={styles.toolbar}>
                    <div className={styles.container}>
                        <div>
                            <div className={styles.foto_perfil}>
                                {
                                    fotoPerfil = sessionStorage.getItem("imagemPerfil") == null ? sessionStorage.getItem("imagemPerfil") : fotoPerfil
                                }
                                <img src={fotoPerfil} alt="Foto de perfil do usuário" />
                                
                                {/* <div>
                                    <div className={styles.nivel}>
                                        <span id="nm-nivel">{infoAtual.nivel}</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                            <div className={styles.opcoes}>
                                <span id="nome_usuario">{sessionStorage.getItem("nome")}</span>
                                <span id="usuario">@{sessionStorage.getItem("apelido")}</span>
                                <button onClick={sair}>Sair</button>
                            </div>
                        <div className={styles.status}>
                            <StatusGerais />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}

export default Sidebar;