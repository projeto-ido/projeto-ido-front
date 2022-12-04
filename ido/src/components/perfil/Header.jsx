import React from 'react';
import styles from "./Perfil.module.css";

function Header(props) {
    return(
        <>
            <div className={styles.box_header}>
                <div className={styles.btn_box}>
                    <div className={styles.container}>
                        <div>
                            <div className={styles.text}>
                                <span onClick={props.overviews}>Overview</span>
                            </div>
                            <div className={styles.div_selection}>{props.selectOv}</div>
                        </div>

                        {/* <div>
                            <div className={styles.text}>
                                <span onClick={props.graficos}>Gráficos</span>
                            </div>
                            <div className={styles.div_selection}>{props.selectGf}</div>
                        </div> */}

                        <div>
                            <div className={styles.text}>
                                <span onClick={props.editores}>Editar Perfil</span>
                            </div>
                            <div className={styles.div_selection}>{props.selectEt}</div>
                        </div>
                        
                        <div className={styles.em_breve}>
                            <div className={styles.text}>
                                <span onClick={props.conquistas}>Conquistas</span>
                            </div>
                            <div className={styles.div_selection}>{props.selectCt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
