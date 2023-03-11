import React from "react";
import beneficiosImg from "../../assets/images/beneficios-img.png"
import { Link } from "react-router-dom";
import styles from "./SiteInstitucional.module.css";
import { useNavigate } from 'react-router-dom';

function Beneficios() {
    const navigate = useNavigate();

    function mudarParaCadastro(){
        navigate("/cadastro")
    }

    return(
        <>
            <div className={styles.beneficios} id="beneficios">
                <div className={styles.beneficiosContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.text}>
                        <h1>Gestão de Tempo</h1>
                        <div className={styles.separator}></div>
                        <h4>Faça a gestão do seu tempo, organize 
                            seus compromissos, objetivos e sonhos. 
                            Torne o seu dia a dia mais sustentável e 
                            menos estressante.</h4>
                        </div>
                        <div className={styles.text}>
                        <h1>Organização</h1>
                        <div className={styles.separator}></div>
                        <h4>Pessoas organizadas adquirem rotinas 
                            produtivas e possuem um alto poder de 
                            concentração, o que impacta diretamente 
                            no seu rendimento.</h4>
                        </div>
                        <button onClick={mudarParaCadastro} className={styles.btnCadastro}>Crie sua conta</button>
                    </div>
                    <div className={styles.rightContent}>
                        <img src={beneficiosImg} alt="Cards flutuantes com um circulo pontilhado no meio"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficios