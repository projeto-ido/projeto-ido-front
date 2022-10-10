import React from 'react';

function ItemRectangleBio(props) {
    return(
        <>
            <div className="item-rectangle-bio">
                <div className="overview-descricao">
                    <div className="titulo-descricao">
                        <h1 type="text">{props.titulo}</h1>
                    </div>

                    <div className="texto-descricao">
                        <span type="text">“{props.texto}”​</span>
                    </div>
                </div>

                <div className="overview-imagem">
                    <img alt={props.titulo} src={props.imagem} />
                </div>
            </div>
        </>
    )
}

export default ItemRectangleBio;