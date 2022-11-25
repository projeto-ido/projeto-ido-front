import React, { useState, useEffect } from 'react';
import apiPerfil from '../../../api/apiPerfil';
import styles from "../Perfil.module.css";
import ItemRectangleEditor from './editor-components/ItemRectangleEditor';

function Editor() {
    const [listaInfoUser, setListaInfoUser] = useState([]);

    useEffect(() => {
        apiPerfil.get().then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    function sairEditor() {
        document.body.style.setProperty('--background--conteudo', '');
        document.body.style.setProperty('--opacidade--conteudo', '100%');
    }

    return(
        <>
            {
                listaInfoUser.map(infoAtual => (
                    <React.Fragment key={infoAtual.id}>
                        <ItemRectangleEditor 
                            titulo={infoAtual.titulo}
                            usuario={infoAtual.usuario}
                            texto={infoAtual.texto}
                            imagem={infoAtual.imagem}
                        />
                    </React.Fragment>
                ))
            }

            {/* <div className={styles.div_botao}>
                <button onClick={sairEditor}>Salvar alterações</button>
            </div> */}
        </>
    )
}

export default Editor;