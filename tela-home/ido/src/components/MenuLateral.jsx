import React from "react";
import logo from '../assets/imagens/logo.png';
import iconHome from '../assets/imagens/icon-home.png';
import iconGrafico from '../assets/imagens/icon-grafico.png';
import iconEtiqueta from '../assets/imagens/icon-etiqueta.png';
import iconConheca from '../assets/imagens/icon-conheca.png';
import iconConfig from '../assets/imagens/icon-config.png';
import iconSair from '../assets/imagens/icon-sair.png';


function MenuLateral(props) {
    return (
        <>
            <div
                className="menu-lateral">
                <div className="sessao-lateral">
                    <div className="sessao-logo">
                        <img className="logo" src={logo} alt="logo IDO" />
                    </div>

                </div>
                <div className="sessao-lateral-home" >
                    <div>
                        <img className="icon-home" src={iconHome} alt="icone Home" />
                        <p className="paragrafo-home">Home</p>
                    </div>
                </div>
                <div className="sessao-lateral">
                    <div>
                        <img className="icon-grafico" src={iconGrafico} alt="icone Home" />
                        <p className="paragrafo-grafico">Análise</p>
                    </div>
                </div>
                <div className="sessao-lateral">
                    <div>
                        <div>
                            <img className="icon-etiqueta" src={iconEtiqueta} alt="icone Home" />
                            <p className="paragrafo-etiqueta">Etiquetas</p>
                        </div>
                    </div>
                </div>
                <div className="sessao-lateral">
                    <div>
                        <img className="icon-conheca" src={iconConheca} alt="icone Home" />
                        <p className="paragrafo-conheca">Conheça</p>
                    </div>
                </div>
                <div className="sessao-lateral">
                    <div>
                        <img className="icon-config" src={iconConfig} alt="icone Home" />
                        <p className="paragrafo-config">Configs</p>
                    </div>
                </div>
                <div className="sessao-sair">
                    <div>
                        <img className="icon-sair" src={iconSair} alt="icone Home" />
                        <p className="paragrafo-sair">Sair</p>
                    </div>
                </div>
            </div>
        </>
    )

    



}

export default MenuLateral;