import React from 'react';
import styles from "../../Perfil.module.css";
import fotoBio from '../../../../assets/images/ido-bem-vindo.jpg'

function ItemRectangleBio(props) {
    {
        fotoBio = sessionStorage.getItem("imagemBiografia") === 'null' ? fotoBio : "data:image/jpeg;base64," + sessionStorage.getItem("imagemBiografia")
    }

    return(
        <>
            <div className={styles.item_rectangle_bio}>
                <div className={styles.overview_descricao}>
                    <div className={styles.titulo_descricao}>
                        <h1 type="text">{sessionStorage.getItem("nome")}</h1>
                    </div>

                    <div className={styles.texto_descricao}>
                        <span type="text">“{sessionStorage.getItem("biografia")}”​</span>
                    </div>
                </div>

                <div className={styles.overview_imagem}>
                    <img alt="Imagem da Biografia" src={fotoBio} />
                </div>
            </div>
        </>
    )
}

export default ItemRectangleBio;