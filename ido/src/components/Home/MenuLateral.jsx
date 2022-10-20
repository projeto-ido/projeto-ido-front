import React from "react";
import logo from '../../assets/images/logo.png';
import iconHome from '../../assets/images/icon-home.png';
import iconGrafico from '../../assets/images/icon-grafico.png';
import iconEtiqueta from '../../assets/images/icon-etiqueta.png';
import iconConheca from '../../assets/images/icon-conheca.png';
import iconConfig from '../../assets/images/icon-config.png';
import iconSair from '../../assets/images/icon-sair.png';
import { Link } from "react-router-dom";

import style from './Home.module.css';


function MenuLateral(props) {
    return (
        <>
            <div
                className={style.menu_lateral}>
                <div className={style.sessao_lateral}>
                    <div className={style.sessao_logo}>
                        <img className={style.logo} src={logo} alt="logo IDO" />
                    </div>

                </div>
                <div className={style.sessao_lateral_home} >
                    <div>
                        <img className={style.icon_home} src={iconHome} alt="icone Home" />
                        <p className={style.paragrafo_home}>Home</p>
                    </div>
                </div>
                <div className={style.sessao_lateral}>
                    <div>
                        <img className={style.icon_grafico} src={iconGrafico} alt="icone Home" />
                        <p className={style.paragrafo_grafico}>Análise</p>
                    </div>
                </div>
                <div className={style.sessao_lateral}>
                    <div>
                        <div>
                            <img className={style.icon_etiqueta} src={iconEtiqueta} alt="icone Home" />
                            <p className={style.paragrafo_etiqueta}>Etiquetas</p>
                        </div>
                    </div>
                </div>
                <div className={style.sessao_lateral}>
                    <div>
                        <img className={style.icon_conheca} src={iconConheca} alt="icone Home" />
                        <p className={style.paragrafo_conheca}>Conheça</p>
                    </div>
                </div>
                <div className={style.sessao_lateral}>
                    <div>
                        <img className={style.icon_config} src={iconConfig} alt="icone Home" />
                        <p className={style.paragrafo_config}>Configs</p>
                    </div>
                </div>
                <Link to="/">
                    <div className={style.sessao_sair}>
                        <div>
                            <img className={style.icon_sair} src={iconSair} alt="icone Home" />
                            <p className={style.paragrafo_sair}>Sair</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )

    



}

export default MenuLateral;