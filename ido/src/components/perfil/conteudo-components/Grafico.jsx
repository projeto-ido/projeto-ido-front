import React, { useState, useEffect } from 'react';
import apiEtiqueta from '../../../api/apiEtiqueta';
import ItemSquareEtiqueta from './grafico-components/ItemSquareEtiqueta';
import ItemRectangleTimeline from './grafico-components/ItemRectangleTimeline';
import ItemSquareSemana from './grafico-components/ItemSquareSemana';

function Grafico() {
    const [listaEtiqueta, setListaEtiqueta] = useState([]);

    useEffect(() => {
        apiEtiqueta.get().then(res => {
          setListaEtiqueta(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])
    
    var nomeEtiqueta = [];
    var qtdEtiqueta = [];
    
    nomeEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
        etiquetaAtual.titulo
    )))

    qtdEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
        etiquetaAtual.quantidade
    )))
    
    return(
        <>
            <div className="div-up-grafico">
                <ItemSquareSemana />
                
                <ItemSquareEtiqueta
                    etiquetas={nomeEtiqueta[0]}
                    quantidade={qtdEtiqueta[0]}
                />
            </div>

            <div className="div-down-grafico">
                <div className="item-rectangle">
                    <div className="grafico-timeline">
                        <ItemRectangleTimeline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grafico;