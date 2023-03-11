import React from "react";
import bannerImg from "../../assets/images/banner-img.png"
import styles from "./SiteInstitucional.module.css";
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();

    function mudarParaCadastro(){
        navigate("/cadastro")
    }

    return(
        <>
            <div className={styles.banner} id="banner">
                <div className={styles.bannerText}>
                    <h1>Você no controle da sua vida!</h1>
                    <h2>Solução completa da gestão do seu tempo em um só lugar!</h2>
                    <button onClick={mudarParaCadastro} className={styles.btnCadastro}>Comece agora</button>
                </div>
                <div className={styles.bannerImage}>
                    <img src={bannerImg} alt="Personagem olhando uma prancheta com lupa, moedas e calculadora ao lado"/> 
                </div>
            </div>
        </>
    );
}

export default Banner