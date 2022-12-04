import React, { useState } from 'react';
import Overview from './conteudo-components/Overview';
import Grafico from './conteudo-components/Grafico';
import Conquista from './conteudo-components/Conquista';
import Header from './Header';
import Editor from './conteudo-components/Editor';
import styles from "./Perfil.module.css"

function Conteudo() {
    const [estado, setEstado] = useState({atual: <Overview />});
    const [select, setSelect] = useState({
        overview: <div className={styles.selection} />,
        // conquista: '',
        // grafico: '',
        editor: ''
    });

    const overview = (e) => {
        setEstado({atual: <Overview />})
        setSelect({overview: <div className={styles.selection} />, conquista: '', grafico: '', editor: '' })
    }
    
    // const conquista = (e) => {
    //     setEstado({atual: <Conquista />})
    //     setSelect({overview: '', conquista: <div className={styles.selection} />, grafico: '', editor: '' })
    // }

    // const grafico = (e) => {
    //     setEstado({atual: <Grafico />})
    //     setSelect({overview: '', conquista: '', grafico: <div className={styles.selection} />, editor: '' })
    // }

    const editor = (e) => {
        setEstado({atual: <Editor />})
        setSelect({overview: '', conquista: '', grafico: '', editor: <div className={styles.selection} />})
    }

    return(
        <>
            <Header 
                overviews={(e) => overview(e)}
                // conquistas={(e) => conquista(e)}
                // graficos={(e) => grafico(e)}
                editores={(e) => editor(e)}
                selectOv={select.overview}
                // selectCt={select.conquista}
                // selectGf={select.grafico}
                selectEt={select.editor}
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
