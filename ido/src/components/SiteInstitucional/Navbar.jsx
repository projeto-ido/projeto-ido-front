import React from "react";
import darkIcon from "../../assets/icons/logo-dark.ico";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <div className="headerInstitucional" id="header">
                <Link to="#">
                    <img src={darkIcon} alt="Logo da empresa iDo"/>
                </Link>
                <Link to="#">Inicio</Link>
                <a href="#metodologias">Metodologias</a>
                <a href="#beneficios">Beneficios</a>
                <Link to="/login">
                    <button className="btnLogin">
                        Login
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Navbar