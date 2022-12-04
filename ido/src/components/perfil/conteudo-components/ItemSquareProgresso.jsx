import React from 'react';
import styles from "../Perfil.module.css";
import cadeado from "../../../assets/images/lock.png"

function ItemSquareProgresso(props) {
    return(
        <>
            <div className={styles.item_square_overview}>
                <div>
                    <h1>EM BREVE</h1>
                    <img src={cadeado} alt="" />
                </div>
            </div>
        </>
    )
}

export default ItemSquareProgresso;