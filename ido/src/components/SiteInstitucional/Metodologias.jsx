import React from "react";
import MetodologiasCard from "./MetodologiasCard";

function Metodologias() {
    return(
        <>
            <div className="metodologias" id="metodologias">    
                <div className="metodologias-text">
                    <h1>Metodologias</h1>
                    <h2>Para proporcionar uma melhor experiência para o usuário, nós implementamos em nossa aplicação metodologias que auxiliam na gestão do tempo</h2>
                </div>
                <div className="cards-container">
                    <div className="cards">
                        <MetodologiasCard classe="bigger-card" titulo="Matriz de Eisenhower" descricao="Classificação de prioridade de tarefas pela sua urgência e importância."/>
                        <div className="small-cards">
                            <MetodologiasCard classe="card card-pomodoro" titulo="Pomodoro" descricao="Divisão do seu trabalho em períodos de 25 minutos, separados por breves intervalos." />
                            <MetodologiasCard classe="card" titulo="Crie Tarefas e Subtarefas" descricao="Utilize subtarefas para dividir sua tarefa em partes menores e agrupe elas de sua maneira." />
                        </div>
                    </div>
                    <div className="card bottom-card">
                        <MetodologiasCard titulo="Monitore seu Progresso" descricao="Faça o monitoramento do seu progresso de acordo com a conclusão de suas tarefas no período planejado." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Metodologias