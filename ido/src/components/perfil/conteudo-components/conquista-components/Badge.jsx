import React from 'react';

function Badge(props) {
    return(
        <>
            <div className="badge">
                <img className="imagem-circle" src={props.imagem} alt={props.titulo} />
            </div>
        </>
    )
}

export default Badge;