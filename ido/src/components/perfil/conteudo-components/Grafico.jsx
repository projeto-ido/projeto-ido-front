import React, { useState, useEffect } from 'react';
import ItemSquare from './ItemSquare';
import ItemRectangle from './ItemRectangle';
import api from '../../../api';
import ItemSquareEtiqueta from './grafico-components/ItemSquareEtiqueta';

function Grafico() {
    const [listaEtiqueta, setListaEtiqueta] = useState([]);

    useEffect(() => {
        api.get().then(res => {
          console.log("dados:", res.data);
          console.log("status code:", res.status);
          setListaEtiqueta(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])
    
    var nomeEtiqueta = [];
    var qtdEtiqueta = [];
    
    {
        nomeEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
            etiquetaAtual.titulo
        )))
        console.log(nomeEtiqueta)

        qtdEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
            etiquetaAtual.quantidade
        )))
    }
    
    return(
        <>
            <div className="div-up-grafico">
                <ItemSquare />
                
                <ItemSquareEtiqueta
                    etiquetas={nomeEtiqueta[0]}
                    quantidade={qtdEtiqueta[0]}
                />
            </div>

            <div className="div-down-grafico">
                <ItemRectangle />
            </div>
        </>
    )
}

export default Grafico;