import React from "react";
import MetodologiasCard from "./MetodologiasCard";
import styles from "./SiteInstitucional.module.css";

function Metodologias() {
    return(
        <>
            <div className={styles.metodologias} id="metodologias">    
                <div className={styles.metodologiasText}>
                    <h1>Metodologias</h1>
                    <h2>Para proporcionar uma melhor experiência para o usuário, nós implementamos em nossa aplicação metodologias que auxiliam na gestão do tempo</h2>
                </div>
                <div className={styles.cardsContainer}>
                    <div className={styles.cards}>
                    <div className={styles.biggerCard}>
                        <MetodologiasCard titulo="Matriz de Eisenhower" descricao="Classificação de prioridade de tarefas pela sua urgência e importância."/>
                    </div>
                        <div className={styles.smallCards}>
                            <div className={`${styles.card} ${styles.cardPomodoro}`}>
                                <MetodologiasCard titulo="Pomodoro" descricao="Divisão do seu trabalho em períodos de 25 minutos, separados por breves intervalos." />
                            </div>
                            <div className={styles.card}>
                                <MetodologiasCard titulo="Crie Tarefas e Subtarefas" descricao="Utilize subtarefas para dividir sua tarefa em partes menores e agrupe elas de sua maneira." />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.cards} ${styles.bottomCard}`} >
                        <MetodologiasCard titulo="Monitore seu Progresso" descricao="Faça o monitoramento do seu progresso de acordo com a conclusão de suas tarefas no período planejado." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Metodologias