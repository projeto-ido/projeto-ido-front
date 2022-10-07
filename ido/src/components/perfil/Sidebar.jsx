import React from 'react';

function Sidebar() {
    return(
        <>
            <div class="toolbar">
                <div class="container">
                    <div>
                        <div class="foto-perfil">
                            <div>
                                <div class="nivel">
                                    <span id="nm-nivel">12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="opcoes">
                        <span id="nome_usuario">Julia Veloso</span>
                        <span id="usuario">@juvelososantos</span>
                        <button>Editar Perfil</button>
                        <button>Sair</button>
                    </div>

                    <div class="status">
                        <div class="status-container">
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