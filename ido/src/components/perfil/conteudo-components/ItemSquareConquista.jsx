import React from 'react';
import styles from "../Perfil.module.css";
import cadeado from "../../../assets/images/lock.png"

function ItemSquareConquista(props) {
    return(
        <>
            <div className={styles.item_square_overview_conquista}>
                <div>
                    <h1>EM BREVE</h1>
                    <img src={cadeado} alt="" />
                </div>
            </div>
        </>
    )
}

export default ItemSquareConquista;