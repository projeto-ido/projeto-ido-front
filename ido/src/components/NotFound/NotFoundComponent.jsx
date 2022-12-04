import React from "react";
import style from "./NotFound.module.css"
import bannerImg from "../../assets/images/banner-img.png"
import { Link, useNavigate } from "react-router-dom";

function NotFoundComponent(){
    const navigate = useNavigate()

    return(
        <>
            <main className={style.bodyNotFound}>
                <div className={style.banner}>
                    <div className={style.bannerText}>
                        <h1>Ops.. Parece que você se perdeu!</h1>
                        <h2>Está em um caminho longe da solução completa da gestão do seu tempo!</h2>
                        <button className={style.btnInicial} onClick={() => navigate(-1)}>Voltar</button>
                    </div>
                    <div className={style.bannerImage}>
                        <img src={bannerImg} alt="Personagem olhando uma prancheta com lupa, moedas e calculadora ao lado"/> 
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFoundComponent