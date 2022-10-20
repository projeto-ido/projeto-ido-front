import React from 'react';
import styles from "../../Perfil.module.css";

function ItemConquista(props) {
    return(
        <>
            <div className={styles.conquista_corpo}>
                <div className={styles.conquista_corpo_container}>
                    <div>
                        <div className={styles.titulo_conquista}>
                            <span type="text">{props.titulo}</span>
                        </div>

                        <div className={styles.descricao_conquista}>
                            <span type="text">{props.texto} /</span>
                        </div>
                    </div>

                    <div className={styles.conquista_imagem}>
                        <div className={styles.div_imagem}>
                            <img alt={props.titulo} src={props.imagem} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemConquista;