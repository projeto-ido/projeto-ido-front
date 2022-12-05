import React from "react";
import styles from "./SiteInstitucional.module.css";

function MetodologiasCard(props) {
    return(
        <>
            <div className={styles.descricao}>
                <h3>{props.titulo}</h3>
                <div className={styles.separator}></div>
                <h4>{props.descricao}</h4>
            </div>
        </>
    );
}

export default MetodologiasCard