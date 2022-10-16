import React from "react";

function Icon(props) {
    return(
        <>
            <div className="icon">
                <img src={props.imagem} alt={props.descricaoImagem}/>
                <p>{props.nome}</p>
            </div>
        </>
    );
}

export default Icon