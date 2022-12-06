import React, { useState, useEffect } from 'react';
import ItemSquareProgresso from './ItemSquareProgresso';
import ItemSquareConquista from './ItemSquareConquista';
import ItemRectangleBio from './overview-components/ItemRectangleBio';
import ItemRectangleTimeline from './grafico-components/ItemRectangleTimeline';
import styles from "../Perfil.module.css";
import ItemSquareSemana from './grafico-components/ItemSquareSemana';
import ItemSquareEtiqueta from './grafico-components/ItemSquareEtiqueta';
import apiService from '../../../api/apiService';

function Overview(props) {
    const [listaEtiqueta, setListaEtiqueta] = useState([]);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/grafico-etiqueta/${idUsuario}`).then(res => {
            if (res.status === 200) {
                setListaEtiqueta(res.data);
                sucessoConsulta();
            } else if (res.status === 204) {
                setListaEtiqueta([]);
            }
        }).catch(erro => {
          console.log(erro);
        })
    }, [])
    
    var nomeEtiqueta = [];
    var qtdEtiqueta = [];

    const sucessoConsulta = () => {

        nomeEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
            etiquetaAtual.titulo
            )))
            
        qtdEtiqueta.push(listaEtiqueta.map(etiquetaAtual => (
            etiquetaAtual.qtdEtiquetaPresente
        )))
    }


    return(
        <>
            <div className={styles.div_overview}>
                <div className={styles.div_up}>
                    <ItemRectangleBio/>
                </div>
                
                <h1 className={styles.titulo_graficos}>DASHBOARD DE DESEMPENHO</h1>

                <div className={styles.div_down}>
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
            </div>
        </>
    )
}

export default Overview;
