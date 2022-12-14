import React from "react";
import logo from '../../assets/images/logo.png';
import iconHome from '../../assets/images/icon-home.png';
import iconEtiqueta from '../../assets/images/icon-etiqueta.png';
import iconSair from '../../assets/images/icon-sair.png';
import iconHomeDestaque from '../../assets/images/icon-home-destaque.png';
import iconEtiquetaDestaque from '../../assets/images/icon-etiqueta-destaque.png'
import iconAcessibilidade from '../../assets/images/icon-acessibilidade.png'
import iconAcessibilidadeDestaque from '../../assets/images/icon-acessibilidade-destaque.png'
import { useNavigate } from "react-router-dom";
import style from './Home.module.css';

function MenuLateral({
    openGerenciadorEtiquetas,
    setOpenGerenciadorEtiquetas,
    openHome,
    setOpenHome,
    openAcessibilidade,
    setOpenAcessibilidade
}) {
    const navigate = useNavigate()

    function sair(){
        sessionStorage.clear()
        navigate("/")
    }

    const iconeGerenciadorEtiqueta = openGerenciadorEtiquetas ? iconEtiquetaDestaque : iconEtiqueta
    const descricaoEtiqueta = openGerenciadorEtiquetas ? style.paragrafo_destaque : style.paragrafo
    const menuLateralEtiqueta = openGerenciadorEtiquetas ? style.sessao_lateral_destaque : style.sessao_lateral
    
    const iconeHome = openHome ? iconHomeDestaque : iconHome
    const descricaoHome = openHome ? style.paragrafo_destaque : style.paragrafo
    const menuLateralHome = openHome ? style.sessao_lateral_destaque : style.sessao_lateral

    const iconeAcessibilidade = openAcessibilidade ? iconAcessibilidadeDestaque : iconAcessibilidade
    const descricaoAcessibilidade = openAcessibilidade ? style.paragrafo_destaque : style.paragrafo
    const menuLateralAcessibilidade = openAcessibilidade ? style.sessao_lateral_destaque : style.sessao_lateral

    function menuHome(){
        setOpenGerenciadorEtiquetas(false)
        setOpenAcessibilidade(false)
        setOpenHome(true)
    }
    
    function menuEtiqueta(){
        setOpenAcessibilidade(false)
        setOpenGerenciadorEtiquetas(true)
        setOpenHome(false)
    }

    function menuAcessibilidade(){
        setOpenGerenciadorEtiquetas(false)
        setOpenHome(false)
        setOpenAcessibilidade(true)
    }

    return (
        <>
            <div className={style.menu_lateral}>
                <div className={style.sessao_lateral}>
                    <div className={style.sessao_logo}>
                        <img className={style.logo} src={logo} alt="logo IDO" />
                    </div>
                </div>
                <div className={style.funcoes}>
                    <div className={menuLateralHome} onClick={menuHome}>
                        <div className={style.div_imagem}>
                            <div>
                                <img src={iconeHome} alt="icone Home" />
                                <p className={descricaoHome}>Home</p>
                            </div>
                        </div>
                    </div>
                    <div className={menuLateralEtiqueta} onClick={menuEtiqueta}>
                        <div className={style.div_imagem}>
                            <div>
                                <img src={iconeGerenciadorEtiqueta} alt="icone Etiqueta" />
                                <p className={descricaoEtiqueta}>Etiquetas</p>
                            </div>
                        </div>
                    </div>
                    <div className={menuLateralAcessibilidade} onClick={menuAcessibilidade}>
                        <div className={style.div_imagem}>
                            <div>
                                <img src={iconeAcessibilidade} alt="icone Acessibilidade" />
                                <p className={descricaoAcessibilidade}>Acessibilidade</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sessao_sair} onClick={sair}>
                    <div>
                        <img className={style.icon_sair} src={iconSair} alt="icone Sair" />
                        <p className={style.paragrafo_sair}>Sair</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuLateral;