import React from "react";
import style from './Home.module.css';
import fotoPerfil from '../../assets/images/ido-utilizador.png'
import { useNavigate } from 'react-router-dom';

function Perfil() {
    var nomeUsuario = sessionStorage.getItem("apelido");
    const navigate = useNavigate();

    function mudarPerfil() {
        navigate("/perfil")
    }

    {
        fotoPerfil = sessionStorage.getItem("imagemPerfil") === 'null' ? fotoPerfil : "data:image/jpeg;base64," + sessionStorage.getItem("imagemPerfil")
    }

    return (
        <>
            <header>
                <p className={style.nome_logado}>Bem-vindo, {nomeUsuario}</p>
                <div onClick={mudarPerfil}>
                    <img src={fotoPerfil} alt="Foto do Perfil" />
                </div>
            </header>
        </>
    );
}

export default Perfil;