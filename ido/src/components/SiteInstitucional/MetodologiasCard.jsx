import React from "react";

function MetodologiasCard(props) {
    return(
        <>
            <div className={props.classe}>
                <div>
                    <h3>{props.titulo}</h3>
                    <div className="separator"></div>
                    <h4>{props.descricao}</h4>
                </div>
            </div>
        </>
    );
}

export default MetodologiasCard