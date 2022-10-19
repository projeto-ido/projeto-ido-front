import React from "react";
import styles from "./SiteInstitucional.module.css";

function Icon(props) {
    return(
        <>
            <div className={styles.icon}>
                <img src={props.imagem} alt={props.descricaoImagem}/>
                <p>{props.nome}</p>
            </div>
        </>
    );
}

export default Icon