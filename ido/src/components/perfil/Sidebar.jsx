import React, { useState, useEffect } from 'react';
import api from '../../api';

function Sidebar() {
    const [listaInfoUser, setListaInfoUser] = useState([])

    useEffect(() => {
        api.get().then(res => {
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
                        <div className="toolbar">
                            <div className="container">
                                <div>
                                    <div className="foto-perfil">
                                        <img src={infoAtual.imagem} alt="Foto de perfil do usuário" />

                                        <div>
                                            <div className="nivel">
                                                <span id="nm-nivel">{infoAtual.nivel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                        <div className="opcoes">
                                            <span id="nome_usuario">{infoAtual.titulo}</span>
                                            <span id="usuario">@{infoAtual.texto}</span>
                                            <button>Editar Perfil</button>
                                            <button>Sair</button>
                                        </div>

                                <div className="status">
                                    <div className="status-container">
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