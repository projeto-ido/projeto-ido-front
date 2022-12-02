import React, { useState, useEffect } from 'react';
import ItemSquareEtiqueta from './grafico-components/ItemSquareEtiqueta';
import ItemRectangleTimeline from './grafico-components/ItemRectangleTimeline';
import ItemSquareSemana from './grafico-components/ItemSquareSemana';
import styles from "../Perfil.module.css";
import apiService from '../../../api/apiService';

function Grafico() {
    const [listaEtiqueta, setListaEtiqueta] = useState([]);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/grafico-etiqueta/${idUsuario}`).then(res => {
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
        etiquetaAtual.qtdEtiquetaPresente
    )))
    
    return(
        <>
            <div className={styles.div_up_grafico}>
                <ItemSquareSemana />
                
                <ItemSquareEtiqueta
                    etiquetas={nomeEtiqueta[0]}
                    quantidade={qtdEtiqueta[0]}
                />
            </div>

            <div className={styles.div_down_grafico}>
                <div className={styles.item_rectangle}>
                    <div className={styles.grafico_timeline}>
                        <ItemRectangleTimeline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grafico;