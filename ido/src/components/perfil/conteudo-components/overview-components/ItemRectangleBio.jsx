import React from 'react';
import styles from "../../Perfil.module.css";

function ItemRectangleBio(props) {
    return(
        <>
            <div className={styles.item_rectangle_bio}>
                <div className={styles.overview_descricao}>
                    <div className={styles.titulo_descricao}>
                        <h1 type="text">{props.titulo}</h1>
                    </div>

                    <div className={styles.texto_descricao}>
                        <span type="text">“{props.texto}”​</span>
                    </div>
                </div>

                <div className={styles.overview_imagem}>
                    <img alt={props.titulo} src={props.imagem} />
                </div>
            </div>
        </>
    )
}

export default ItemRectangleBio;