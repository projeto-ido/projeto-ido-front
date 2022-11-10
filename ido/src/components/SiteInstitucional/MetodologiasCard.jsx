import React from "react";

function MetodologiasCard(props) {
    return(
        <>
            <h3>{props.titulo}</h3>
            <div className="separator"></div>
            <h4>{props.descricao}</h4>
        </>
    );
}

export default MetodologiasCard