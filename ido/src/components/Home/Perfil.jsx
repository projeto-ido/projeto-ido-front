import React from "react";
import perfil from '../../assets/images/icon-perfil.png';
import { Link } from "react-router-dom";

import style from './Home.module.css';


function Perfil() {
    var nomeUsuario = sessionStorage.getItem("nomeLogado");

    return (
        <>
            <header>
                <p className={style.nome_logado}>Bem vindo, {nomeUsuario}</p>
                <Link to="/perfil">
                    <img className={style.foto_perfil} src={perfil} alt="foto do perfil do usuário" />
                </Link>
            </header>
        </>
    );
}

export default Perfil;