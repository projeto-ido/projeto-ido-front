import React from "react";
import darkIcon from "../../assets/icons/logo-dark.ico";
import { Link } from "react-router-dom";
import styles from "./SiteInstitucional.module.css"

function Navbar() {
    return(
        <>
            <div className={styles.headerInstitucional} id="header">
                <Link className={styles.navbar} to="#">
                    <img src={darkIcon} alt="Logo da empresa iDo"/>
                </Link>
                <a className={styles.navbar} href="#banner">Inicio</a>
                <a className={styles.navbar} href="#metodologias">Metodologias</a>
                <a className={styles.navbar} href="#beneficios">Beneficios</a>
                <Link to="/login">
                    <button className={styles.btnLogin}>
                        Login
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Navbar