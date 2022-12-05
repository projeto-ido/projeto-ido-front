import React, { useState, useEffect } from 'react';
import apiPerfil from '../../../api/apiPerfil';
import styles from "../Perfil.module.css";
import ItemRectangleEditor from './editor-components/ItemRectangleEditor';

function Editor({setUsuarioAtualizado}) {
    const [listaInfoUser, setListaInfoUser] = useState([]);

    useEffect(() => {
        apiPerfil.get().then(res => {
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

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
                            setUsuarioAtualizado={setUsuarioAtualizado}
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