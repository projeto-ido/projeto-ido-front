import React from 'react';

function ItemConquista(props) {
    return(
        <>
            <div className="conquista-corpo">
                <div className="conquista-corpo-container">
                    <div>
                        <div className="titulo-conquista">
                            <span type="text">{props.titulo}</span>
                        </div>

                        <div className="descricao-conquista">
                            <span type="text">{props.texto} /</span>
                        </div>
                    </div>

                    <div className="conquista-imagem">
                        <div className="div-imagem">
                            <img className="imagem-circle" alt={props.titulo} src={props.imagem} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemConquista;