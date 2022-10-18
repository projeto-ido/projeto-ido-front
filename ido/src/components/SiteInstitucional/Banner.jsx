import React from "react";
import bannerImg from "../../assets/images/banner-img.png"

function Banner() {
    return(
        <>
        <div className="banner">
            <div className="banner-text">
                <h1>Você no controle da sua vida!</h1>
                <h2>Solução completa da gestão do seu tempo em um só lugar!</h2>
                <button className="btn-cadastro">Comece agora</button>
            </div>
            <div className="banner-image">
                <img src={bannerImg} alt="Personagem olhando uma prancheta com lupa, moedas e calculadora ao lado"/> 
            </div>
        </div>
        </>
    );
}

export default Banner