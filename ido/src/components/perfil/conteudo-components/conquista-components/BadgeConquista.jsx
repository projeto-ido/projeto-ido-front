import React, { useState, useEffect } from 'react';
import apiConquista from '../../../../api/apiConquista';
import Badge from './Badge';
import styles from "../../Perfil.module.css";

function BadgeConquista() {
    const [listaBadges, setListaBadges] = useState([]);
    
    useEffect(() => {
        apiConquista.get().then(res => {
            setListaBadges(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            <div className={styles.badge_container}>
                <h1>Conquistas alcançadas</h1>
                <div className={styles.list_badges}>

                    {
                        listaBadges.map(badgeAtual => (
                            <React.Fragment key={badgeAtual.id}>
                                <Badge 
                                    imagem={badgeAtual.imagem}
                                    titulo={badgeAtual.titulo}
                                />
                            </React.Fragment>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default BadgeConquista;