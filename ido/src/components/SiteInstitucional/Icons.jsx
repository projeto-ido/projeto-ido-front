import React from "react";
import Icon from "./Icon"
import imgOrganizacao from "../../assets/images/img-org.png";
import imgGameficacao from "../../assets/images/img-game.png";
import imgFoco from "../../assets/images/img-foco.png";
import imgPlanejamento from "../../assets/images/img-planej.png";
import imgProdutividade from "../../assets/images/img-produtividade.png";
import imgPriorizacao from "../../assets/images/img-prioridade.png";
import imgPerfil from "../../assets/images/img-perfil.png";
import imgEvolucao from "../../assets/images/img-evolucao.png";
import imgLembrete from "../../assets/images/img-lembrete.png";
import imgIdeia from "../../assets/images/img-ideia.png";
import imgSonho from "../../assets/images/img-sonho.png";
import imgConcentracao from "../../assets/images/img-relogio.png";
import styles from "./SiteInstitucional.module.css"

function Icons(props) {
    return(
        <>
            <div className={styles.icons} id="first-icons">
                <Icon key="ORGANIZAÇÃO" nome="ORGANIZAÇÃO" imagem={imgOrganizacao} descricaoImagem="Notas" />
                <Icon key="GAMEFICAÇÃO" nome="GAMEFICAÇÃO" imagem={imgGameficacao} descricaoImagem="Aumentando nível" />
                <Icon key="FOCO" nome="FOCO" imagem={imgFoco} descricaoImagem="Alvo" />
                <Icon key="PLANEJAMENTO" nome="PLANEJAMENTO" imagem={imgPlanejamento} descricaoImagem="Calendario" />
            </div>
            <div className={styles.icons} id="second-icons" style={{display: "none"}}>
                <Icon key="PRODUTIVIDADE" nome="PRODUTIVIDADE" imagem={imgProdutividade} descricaoImagem="Engrenagem" />
                <Icon key="PRIORIZAÇÃO" nome="PRIORIZAÇÃO" imagem={imgPriorizacao} descricaoImagem="Balão com exclamação" />
                <Icon key="PERFIL" nome="PERFIL" imagem={imgPerfil} descricaoImagem="Perfil" />
                <Icon key="EVOLUÇÃO" nome="EVOLUÇÃO" imagem={imgEvolucao} descricaoImagem="Gráfico" />
            </div>
            <div className={styles.icons} id="third-icons" style={{display: "none"}}>
                <Icon key="LEMBRETES" nome="LEMBRETES" imagem={imgLembrete} descricaoImagem="Sino" />
                <Icon key="IDEIAS" nome="IDEIAS" imagem={imgIdeia} descricaoImagem="Lampada" />
                <Icon key="SONHOS" nome="SONHOS" imagem={imgSonho} descricaoImagem="Nuvem" />
                <Icon key="CONCENTRAÇÃO" nome="CONCENTRAÇÃO" imagem={imgConcentracao} descricaoImagem="Relogio" />
            </div>
        </>
    );
}

export default Icons