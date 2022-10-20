import React, { useState, useEffect } from 'react';
import ItemSquare from './ItemSquare';
import ItemRectangleBio from './overview-components/ItemRectangleBio';
import apiPerfil from '../../../api/apiPerfil';
import styles from "../Perfil.module.css";

function Overview(props) {
    const [listaInfoUser, setListaInfoUser] = useState([]);

    useEffect(() => {
        apiPerfil.get().then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            <div className={styles.div_up}>

                {
                    listaInfoUser.map(infoAtual => (
                        <React.Fragment key={infoAtual.id}>
                            <ItemRectangleBio 
                                titulo={infoAtual.titulo}
                                texto={infoAtual.texto}
                                imagem={infoAtual.imagem}
                            />
                        </React.Fragment>
                    ))
                }
                
            </div>
            
            <div className={styles.div_down}>
                <ItemSquare />
                <ItemSquare />
            </div>
        </>
    )
}

export default Overview;