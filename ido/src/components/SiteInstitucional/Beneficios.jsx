import React from "react";
import beneficiosImg from "../../assets/images/beneficios-img.png"
import { Link } from "react-router-dom";

function Beneficios() {
    return(
        <>
        <div className="beneficios" id="beneficios">
            <div className="beneficios-content">
                <div className="left-content">
                    <div className="text">
                    <h1>Gestão de Tempo</h1>
                    <div className="separator"></div>
                    <h4>Faça a gestão do seu tempo, organize 
                        seus compromissos, objetivos e sonhos. 
                        Torne o seu dia a dia mais sustentável e 
                        menos estressante.</h4>
                    </div>
                    <div className="text">
                    <h1>Organização</h1>
                    <div className="separator"></div>
                    <h4>Pessoas organizadas adquirem rotinas 
                        produtivas e possuem um alto poder de 
                        concentração, o que impacta diretamente 
                        no seu rendimento.</h4>
                    </div>
                    <Link to="/cadastro">
                        <button className="btn-cadastro">Crie sua conta</button>
                    </Link>
                </div>
                <div className="right-content">
                    <img src={beneficiosImg} alt="Cards flutuantes com um circulo pontilhado no meio"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Beneficios