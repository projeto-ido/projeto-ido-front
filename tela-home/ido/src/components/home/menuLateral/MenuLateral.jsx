import React  from "react";
import logo from '../../../assets/imagens/Logo (1).png';
import iconHome from '../../../assets/imagens/icon-home.png';
import iconGrafico from '../../../assets/imagens/icon-grafico.png';
import iconEtiqueta from '../../../assets/imagens/icon-etiqueta.png';
import iconConheca from '../../../assets/imagens/icon-conheca.png';
import iconConfig from '../../../assets/imagens/icon-config.png';
import iconSair from '../../../assets/imagens/icon-sair.png';

function MenuLateral(){
    return(
        <>
        <div class="menu-lateral">
        <div class="sessao-lateral">
            <div class="sessao-logo">
                <img class="logo" src={logo} alt="logo IDO"/>
            </div>

        </div>
        <div class="sessao-lateral" style="background-color: #FFFAFA; ">
            <div>
                <img class="icon-home" src={iconHome} alt="icone Home"/>
                <p style="margin: 0px; color: #5D84C2;">Home</p>
            </div>
        </div>
        <div class="sessao-lateral">
            <div>
                <img class="icon-grafico" src={iconGrafico} alt="icone Gráfico"/>
                <p style="margin: 0px; color: #FFFAFA;">Análise</p>
            </div>
        </div>
        <div class="sessao-lateral">
            <div>
                <div>
                    <img class="icon-etiqueta" src={iconEtiqueta} alt="icone Etiqueta"/>
                    <p style="margin: 0px; color: #FFFAFA;">Etiquetas</p>
                </div>
            </div>
        </div>
        <div class="sessao-lateral">
            <div>
                <img class="icon-conheca" src={iconConheca} alt="icone Conheça"/>
                <p style="margin: 0px; color: #FFFAFA;">Conheça</p>
            </div>
        </div>
        <div class="sessao-lateral">
            <div>
                <img class="icon-config" src={iconConfig} alt="icone Home"/>
                <p style="margin: 0px; color: #FFFAFA;">Configs</p>
            </div>
        </div>
        <div class="sessao-sair">
            <div>
                <img class="icon-sair" src={iconSair} alt="icone Home"/>
                <p style="margin: 0px; color: #FFFAFA; padding-left: .2vw;">Sair</p>
            </div>
        </div>
    </div>
        
        </>
    )
}

export default MenuLateral;