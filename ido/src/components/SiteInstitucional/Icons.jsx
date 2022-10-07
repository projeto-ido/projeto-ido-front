import React from "react";
import Icon from "./Icon"

function Icons(props) {
    return(
        <>
            <div className="icons" id={props.ordem}>
                {
                    props.icones.map( icone => (
                        <Icon nome={icone.nome} enderecoImagem={icone.endereco} descricaoImagem={icone.descricao} />
                    ))
                }

                <Icon nome="GAMEFICAÇÃO" enderecoImagem="img-game.png" descricaoImagem="Aumentando nivel" />
                <Icon nome="FOCO" enderecoImagem="img-foco.png" descricaoImagem="Alvo" />
                <Icon nome="PLANEJAMENTO" enderecoImagem="img-planej.png" descricaoImagem="Calendario" />
            </div>
        </>
    );
}

export default Icons