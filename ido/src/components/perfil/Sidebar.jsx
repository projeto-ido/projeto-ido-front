import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Perfil.module.css";
import apiService from '../../api/apiService';
import fotoPerfil from '../../assets/images/ido-utilizador.png'

function Sidebar() {
    const navigate = useNavigate();
    const [listaInfoUser, setListaInfoUser] = useState([])
    
    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/info-adicionais/${idUsuario}`).then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    function sair() {
        navigate("/home")
    }

    return(
        <>
            {
                listaInfoUser.map(infoAtual => (
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
                                    <div className={styles.status_container}>
                                        <h1>Status Gerais</h1>
                                        <span>Total de tarefas: {infoAtual.qtdTarefas}</span>
                                        <span>Tarefas pendentes: {infoAtual.qtdTarefasPendentes}</span>
                                        <span>Tarefas concluídas: {infoAtual.qtdTarefasConcluidas}</span>
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