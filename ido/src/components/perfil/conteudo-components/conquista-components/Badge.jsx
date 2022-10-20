import React from 'react';
import styles from "../../Perfil.module.css";

function Badge(props) {
    return(
        <>
            <div className={styles.badge}>
                <img className={styles.imagem_circle} src={props.imagem} alt={props.titulo} />
            </div>
        </>
    )
}

export default Badge;