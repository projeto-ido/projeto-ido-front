import React from "react";
import darkIcon from "../../assets/icons/logo-dark.ico";

function Navbar() {
    return(
        <>
            <div className="header" id="header">
                <a href="#">
                    <img src={darkIcon} alt="Logo da empresa iDo"/>
                </a>
                <a href="#">Inicio</a>
                <a href="#metodologias">Metodologias</a>
                <a href="#beneficios">Beneficios</a>
                <button className="btn-login">Login</button>
            </div>
        </>
    );
}

export default Navbar