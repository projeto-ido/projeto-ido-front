import React, { useState, useEffect } from 'react';
import apiConquista from '../../../api/apiConquista';
import ItemConquista from './conquista-components/ItemConquista';
import BadgeConquista from './conquista-components/BadgeConquista';
import styles from "../Perfil.module.css";

function Conquista() {
    const [listaConquistas, setListaConquistas] = useState([]);

    useEffect(() => {
        apiConquista.get().then(res => {
          console.log("dados:", res.data);
          console.log("status code:", res.status);
          setListaConquistas(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            <div className={styles.div_up}>
                <div className={styles.conquista_container_up}>
                    <div className={styles.conquista_badges}>
                        <BadgeConquista />
                    </div>

                    <div className={styles.conquista_grafico}></div>
                </div>
            </div>

            <div className={styles.div_down}>
                <div className={styles.conquista_container_down}>

                    {
                        listaConquistas.map(conquistaAtual => (
                            <React.Fragment key={conquistaAtual.id}>
                                <ItemConquista 
                                    titulo={conquistaAtual.titulo}
                                    texto={conquistaAtual.texto}
                                    imagem={conquistaAtual.imagem}
                                />
                            </React.Fragment>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Conquista;