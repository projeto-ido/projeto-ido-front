import React from "react";
import logo from '../../assets/images/logo.png';
import iconHome from '../../assets/images/icon-home.png';
import iconGrafico from '../../assets/images/icon-grafico.png';
import iconEtiqueta from '../../assets/images/icon-etiqueta.png';
import iconConheca from '../../assets/images/icon-conheca.png';
import iconConfig from '../../assets/images/icon-config.png';
import iconSair from '../../assets/images/icon-sair.png';

import iconHomeDestaque from '../../assets/images/icon-home-destaque.png';
import iconEtiquetaDestaque from '../../assets/images/icon-etiqueta-destaque.png'
import { Link } from "react-router-dom";

import style from './Home.module.css';


function MenuLateral({openGerenciadorEtiquetas, setOpenGerenciadorEtiquetas, openHome, setOpenHome}) {
    const iconeGerenciadorEtiqueta = openGerenciadorEtiquetas ? iconEtiquetaDestaque : iconEtiqueta
    const descricaoEtiqueta = openGerenciadorEtiquetas ? style.paragrafo_destaque : style.paragrafo
    const menuLateralEtiqueta = openGerenciadorEtiquetas ? style.sessao_lateral_destaque : style.sessao_lateral
    
    const iconeHome = openHome ? iconHomeDestaque : iconHome
    const descricaoHome = openHome ? style.paragrafo_destaque : style.paragrafo
    const menuLateralHome = openHome ? style.sessao_lateral_destaque : style.sessao_lateral

    var menuLateralAnalise = style.sessao_lateral
    var menuLateralConheca = style.sessao_lateral
    var menuLateralConfig = style.sessao_lateral

    function menuHome(){
        setOpenGerenciadorEtiquetas(false)
        setOpenHome(true)
    }

    function menuEtiqueta(){
        setOpenGerenciadorEtiquetas(true)
        setOpenHome(false)
    }


    return (
        <>
            <div
                className={style.menu_lateral}>
                <div className={style.sessao_lateral}>
                    <div className={style.sessao_logo}>
                        <img className={style.logo} src={logo} alt="logo IDO" />
                    </div>

                </div>
                <div className={menuLateralHome} onClick={menuHome}>
                    <div>
                        <img className={style.icon_home} src={iconeHome} alt="icone Home" />
                        <p className={descricaoHome}>Home</p>
                    </div>
                </div>
                <div className={menuLateralAnalise}>
                    <div>
                        <img className={style.icon_grafico} src={iconGrafico} alt="icone Home" />
                        <p className={style.paragrafo_grafico}>Análise</p>
                    </div>
                </div>
                <div className={menuLateralEtiqueta} onClick={menuEtiqueta}>
                    <div>
                        <div>
                            <img className={style.icon_etiqueta} src={iconeGerenciadorEtiqueta} alt="icone Home" />
                            <p className={descricaoEtiqueta}>Etiquetas</p>
                        </div>
                    </div>
                </div>
                <div className={menuLateralConheca}>
                    <div>
                        <img className={style.icon_conheca} src={iconConheca} alt="icone Home" />
                        <p className={style.paragrafo_conheca}>Conheça</p>
                    </div>
                </div>
                <div className={menuLateralConfig}>
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