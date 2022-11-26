import React from 'react';
import styles from "../../Perfil.module.css";
import iconEditar from "../../../../assets/images/icon-editar-etiqueta.png";
import iconDeletar from "../../../../assets/images/icon-lixeira.png";
import iconUpload from "../../../../assets/images/upload.png";

function ItemRectangleEditor(props) {
    return(
        <>
            <div className={styles.div_editor}>
                <div className={styles.editor_primeira_coluna}>
                    <div className={styles.textos_editor}>
                        <div className={styles.nome_user_editor}>
                            <div>
                                <h1 type="text">Nome:</h1>
                                <span>{props.titulo}</span>
                            </div>
                            <div className={styles.div_editor_icon_lapis}>
                                <img className={styles.acoes} src={iconEditar} alt="icone lapis" />
                            </div>
                        </div>

                        <div className={styles.nome_user_editor}>
                            <div>
                                <h1 type="text">Usuario:</h1> 
                                <span>{props.usuario}</span>
                            </div>
                            <div className={styles.div_editor_icon_lapis}>
                                <img className={styles.acoes} src={iconEditar} alt="icone lapis" />
                            </div>
                        </div>

                        <div className={styles.biografia_editor}>
                            <div className={styles.biografia}>
                                <h1 type="text">Biografia:​</h1> 
                                <span>“{props.texto}”</span>
                            </div>
                            <div className={styles.div_biografia_icon_lapis}>
                                <img className={styles.acoes} src={iconEditar} alt="icone lapis" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.imagem_perfil_editor}>
                        <div className={styles.biografia_editor}>
                            <h1>Capa:</h1>
                            <div className={styles.biografia}>
                                <div>
                                    <img alt={props.titulo} src={props.imagem} />
                                </div>
                            </div>
                            <div className={styles.div_image_icon_lapis}>
                                <img className={styles.acoes} src={iconUpload} alt="icone lapis" />
                                <img className={styles.acoes} src={iconDeletar} alt="icone lixeira" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.editor_segunda_coluna}>
                    <div className={styles.div_image_perfil}>
                        <img alt={props.titulo} src={props.imagem} />
                    </div>

                    <div className={styles.btn_segunda_coluna}>
                        <div>
                            <img className={styles.acoes} src={iconUpload} alt="icone upload" />
                        </div>
                        <div>
                            <img className={styles.acoes} src={iconDeletar} alt="icone lixeira" />
                        </div>
                    </div>

                    <button>Salvar Alterações</button>
                </div>
            </div>
        </>
    )
}

export default ItemRectangleEditor;