import React from "react";
import style from './Home.module.css';
import fotoPerfil from '../../assets/images/ido-utilizador.png'
import { useNavigate } from 'react-router-dom';

function Perfil() {
    var nomeUsuario = sessionStorage.getItem("nomeLogado");
    const navigate = useNavigate();

    function mudarPerfil() {
        navigate("/perfil")
    }

    {
        fotoPerfil = sessionStorage.getItem("imagemPerfil") == null ? sessionStorage.getItem("imagemPerfil") : fotoPerfil
    }

    return (
        <>
            <header>
                <p className={style.nome_logado}>Bem vindo, {nomeUsuario}</p>
                <div onClick={mudarPerfil}>
                    <img src={fotoPerfil} alt="Foto do Perfil" />
                </div>
            </header>
        </>
    );
}

export default Perfil;