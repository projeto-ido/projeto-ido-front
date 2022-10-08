import React from 'react';

function Sidebar() {
    return(
        <>
            <div className="toolbar">
                <div className="container">
                    <div>
                        <div className="foto-perfil">
                            <div>
                                <div className="nivel">
                                    <span id="nm-nivel"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="opcoes">
                        <span id="nome_usuario">Nome</span>
                        <span id="usuario">@username</span>
                        <button>Editar Perfil</button>
                        <button>Sair</button>
                    </div>

                    <div className="status">
                        <div className="status-container">
                            <h1>Status Gerais</h1>
                            <span>Total de tarefas:</span>
                            <span>Tarefas pendentes:</span>
                            <span>Tarefas concluídas:</span>
                            <span>Total de conquistas:</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;