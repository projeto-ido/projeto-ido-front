import React from "react";
import darkIcon from "../../assets/icons/logo-dark.ico";
import { useNavigate } from 'react-router-dom';
import styles from "./SiteInstitucional.module.css"

function Navbar() {
    const navigate = useNavigate();

    function mudarParaLogin(){
        navigate("/login")
    }

    return(
        <>
            <div className={styles.headerInstitucional} id="header">
                <a href="#banner" className={styles.navbar}>
                    <img src={darkIcon} alt="Logo da empresa iDo"/>
                </a>

                <a className={styles.navbar} href="#banner">Inicio</a>
                <a className={styles.navbar} href="#metodologias">Metodologias</a>
                <a className={styles.navbar} href="#beneficios">Beneficios</a>

                <button onClick={mudarParaLogin} className={styles.btnLogin}>
                    Login
                </button>
            </div>
        </>
    );
}

export default Navbar