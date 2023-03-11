import React, { useState, useEffect } from 'react';
import styles from '../../../perfil/Perfil.module.css';
import apiService from '../../../../api/apiService';

function StatusGerais() {
    const [listaInfoUser, setListaInfoUser] = useState([])
    
    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/info-adicionais/${idUsuario}`).then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            {
                listaInfoUser.map(infoAtual => (
                    <React.Fragment>
                        <div className={styles.status_container}>
                            <h1>Status Gerais</h1>
                            <span>Total de tarefas: {infoAtual.qtdTarefas}</span>
                            <span>Tarefas pendentes: {infoAtual.qtdTarefasPendentes}</span>
                            <span>Tarefas concluídas: {infoAtual.qtdTarefasConcluidas}</span>
                        </div>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default StatusGerais;