import React from "react";
import perfil from '../../assets/images/icon-perfil.png';


function Perfil() {
    return (
        <>
            <header>
                <p className="nome-logado">Julia Veloso Santos</p>
                <img className="foto-perfil" src={perfil} alt="foto do perfil do usuário" />
            </header>
        </>
    );
}

export default Perfil;