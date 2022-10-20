import React, { useState } from 'react';
import Overview from './conteudo-components/Overview';
import Grafico from './conteudo-components/Grafico';
import Conquista from './conteudo-components/Conquista';
import Header from './Header';
import styles from "./Perfil.module.css"

function Conteudo() {
    const [estado, setEstado] = useState({atual: <Overview />});
    const [select, setSelect] = useState({
        overview: <div className={styles.selection} />,
        conquista: '',
        grafico: ''
    });
    
    const overview = (e) => {
        setEstado({atual: <Overview />})
        setSelect({overview: <div className={styles.selection} />, conquista: '', grafico: ''})
    }
    
    const conquista = (e) => {
        setEstado({atual: <Conquista />})
        setSelect({overview: '', conquista: <div className={styles.selection} />, grafico: ''})
    }

    const grafico = (e) => {
        setEstado({atual: <Grafico />})
        setSelect({overview: '', conquista: '', grafico: <div className={styles.selection} />})
    }

    return(
        <>
            <Header 
                overviews={(e) => overview(e)}
                conquistas={(e) => conquista(e)}
                graficos={(e) => grafico(e)}
                selectOv={select.overview}
                selectCt={select.conquista}
                selectGf={select.grafico}
            />

            <div className={styles.conteudo}>
                <div className={styles.container}>
                    <div className={styles.box_container}>
                        {estado.atual}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conteudo;