import React from 'react';
import styles from "../../Perfil.module.css";
import iconEditar from "../../../../assets/images/icon-editar-etiqueta.png";
import iconDeletar from "../../../../assets/images/icon-lixeira.png";
import iconUpload from "../../../../assets/images/upload.png";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import fotoPerfil from '../../../../assets/images/ido-utilizador.png'
import fotoBio from '../../../../assets/images/ido-bem-vindo.jpg'
import axios from '../../../../api/apiService';

function ItemRectangleEditor({setUsuarioAtualizado}) {
    const [nomeEditavel, setNomeEditavel] = useState(false);
    const [emailEditavel, setEmailEditavel] = useState(false);
    const [biografiaEditavel, setBiografiaEditavel] = useState(true);
    const [usernameEditavel, setUsernameEditavel] = useState(false);
    const [novaSenhaEditavel, setNovaSenhaEditavel] = useState(false);
    const [senhaEditavel, setSenhaEditavel] = useState(false);
    const [telefoneEditavel, setTelefoneEditavel] = useState(false);
    const inputFilePerfil = document.querySelector("#arquivoPerfil");
    const inputFileBio = document.querySelector("#arquivoBio");
    
    // FOTO PERFIL
    if (inputFilePerfil != null) {
        inputFilePerfil.addEventListener("change", function (e) {
            const inputTargetPerfil = e.target;
            const filePerfil = inputTargetPerfil.files[0];

            if (filePerfil) {
                const reader = new FileReader();
                reader.addEventListener("load", function (e) {
                    const imagemBase64Perfil = e.target;

                    const imgPerfil = document.getElementById("imgPerfil");
                    imgPerfil.src = imagemBase64Perfil.result;
                });
                reader.readAsDataURL(filePerfil);
            }
        });
    }

    // FOTO BIOGRAFIA
    if (inputFileBio != null) {
        inputFileBio.addEventListener("change", function (e) {
            const inputTargetBio = e.target;
            const fileBio = inputTargetBio.files[0];

            if (fileBio) {
                const reader = new FileReader();
                reader.addEventListener("load", function (e) {
                    const imagemBase64Bio = e.target;

                    const imgBio = document.getElementById("imgBio");
                    imgBio.src = imagemBase64Bio.result;
                });
                reader.readAsDataURL(fileBio);
            }
        });
    }

    {
        fotoPerfil = sessionStorage.getItem("imagemPerfil") == 'null' ? fotoPerfil : "data:image/jpeg;base64," + sessionStorage.getItem("imagemPerfil")
    }

    {
        fotoBio = sessionStorage.getItem("imagemBiografia") == 'null' ? fotoBio : "data:image/jpeg;base64," + sessionStorage.getItem("imagemBiografia")
    }

    function bioEditavel() {
        var textarea = document.getElementById("bio")

        setBiografiaEditavel(!biografiaEditavel)

        !biografiaEditavel ? textarea.setAttribute("disabled", false)
            : textarea.removeAttribute("disabled");
    }

    function salvarAlteracao(event) {
        var idUsuario = sessionStorage.getItem("id")
        event.preventDefault();

        const names = event.target;
        
        if (names.nome.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (names.email.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (names.biografia.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (names.username.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (names.telefone.value.trim() === "") 
            return info("Não pode conter espaços em branco")

        const dataInfo = {
            nome : names.nome.value.trim(),
            apelido: names.username.value.trim(),
            email : names.email.value.trim(),
            telefone : names.telefone.value.trim(),
            biografia : names.biografia.value.trim(),
            imagemPerfil : document.getElementById("imgPerfil").src.substring(document.getElementById("imgPerfil").src.indexOf(",") + 1),
            imagemBiografia : document.getElementById("imgBio").src.substring(document.getElementById("imgBio").src.indexOf(",") + 1)
        }
        axios.put(`/usuarios/${idUsuario}`, dataInfo).then((res) => {
            if(res.status === 200) {
                setUsuarioAtualizado(true)
                sucesso("Informações atualizadas com sucesso")
            }

        }).catch((erros) => {
            erro("Informações não foram atualizadas")
        })
    }

    function salvarNovaSenha(event) {
        var idUsuario = sessionStorage.getItem("id")
        event.preventDefault();

        const senhas = event.target;
        
        if (senhas.senhaAtual.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (senhas.novaSenha.value.trim() === "") 
            return info("Não pode conter espaços em branco")
        else if (senhas.repetirNovaSenha.value.trim() === "")
            return info("Não pode conter espaços em branco")
        else if (senhas.novaSenha.value.trim() != senhas.repetirNovaSenha.value.trim()) 
            return info("A nova senha tem que ser idênticas nos dois campos")
        
        const dataSenha = {
            senhaAnterior : senhas.senhaAtual.value.trim(),
            senhaNova: senhas.novaSenha.value.trim()
        }
        axios.patch(`/usuarios/${idUsuario}/perfil/atualizar-senha`, dataSenha).then((res) => {
            if(res.status === 200) {
                sucesso("Senha atualizada com sucesso")
                senhas.senhaAtual.value='';
                senhas.repetirNovaSenha.value='';
                senhas.novaSenha.value='';
                setNovaSenhaEditavel(false);
                setSenhaEditavel(false);
            }
        }).catch((erros) => {
            erro("Senha não foi atualizada")
        })
    }

    function sucesso(texto) {
        toast.success(texto, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
    }

    function info(texto) {
        toast.info(texto, {
            position: "top-right",
            autoClose: 1600,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        })
    }
    
    function erro(texto) {
        toast.error(texto, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
    }

    return(
        <>
            <ToastContainer/>
            <div className={styles.div_overview}>
                <form id='form' onSubmit={salvarAlteracao}>
                    <div className={styles.div_editor}>
                        <div className={styles.editor_primeira_coluna}>
                            <div className={styles.textos_editor}>
                                <div className={styles.nome_user_editor}>
                                    <div>
                                        <h1 type="text">Nome:</h1>
                                        <textarea
                                            type="text"
                                            name='nome'
                                            minLength="3"
                                            maxLength="30"
                                            disabled={!nomeEditavel}
                                            defaultValue={sessionStorage.getItem("nome")} 
                                            required
                                        />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setNomeEditavel(!nomeEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.nome_user_editor}>
                                    <div>
                                        <h1 type="text">Email:</h1> 
                                        <textarea
                                            name='email'
                                            disabled={!emailEditavel}
                                            type="text"
                                            minLength="10"
                                            maxLength="100"
                                            defaultValue={sessionStorage.getItem("email")}
                                            required
                                        />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setEmailEditavel(!emailEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.biografia_editor}>
                                    <div className={styles.biografia}>
                                        <h1 type="text">Biografia:​</h1> 
                                        <textarea 
                                            disabled="true"
                                            id="bio"
                                            name="biografia"
                                            wrap='hard'
                                            cols="30" rows="10"
                                            minLength="5"
                                            maxLength="240"
                                            defaultValue={`${sessionStorage.getItem("biografia")}`}
                                            required 
                                        />
                                    </div>
                                    <div className={styles.div_biografia_icon_lapis}>
                                        <img onClick={bioEditavel} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.imagem_perfil_editor}>
                                <div className={styles.biografia_editor}>
                                    <h1>Capa:</h1>
                                    <div className={styles.biografia}>
                                        <div>
                                            <img id="imgBio" alt="Imagem Biografia" src={fotoBio} />
                                        </div>
                                    </div>
                                    <div className={styles.div_image_icon_lapis}>
                                        <label className={styles.div_image_icons} htmlFor="arquivoBio">
                                            <img className={styles.acoes} src={iconUpload} alt="icone upload" />
                                        </label>
                                        <input type="file" accept="image/jpeg" name="arquivoBio" id="arquivoBio" />
                                        
                                        {/* <div className={styles.div_image_icons}>
                                            <img className={styles.acoes} src={iconDeletar} alt="icone lixeira" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.editor_segunda_coluna}>
                            <div className={styles.segunda_coluna_editor}>
                                <div className={styles.nome_user_editor}>
                                    <div>
                                        <h1 type="text">Usuario:</h1> 
                                        <textarea
                                            name='username'
                                            disabled={!usernameEditavel}
                                            type="text"
                                            minLength="3"
                                            maxLength="10"
                                            defaultValue={sessionStorage.getItem("apelido")}
                                            required
                                            />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setUsernameEditavel(!usernameEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.nome_user_editor}>
                                    <div>
                                        <h1 type="text">Telefone:</h1> 
                                        <textarea
                                            name='telefone'
                                            disabled={!telefoneEditavel}
                                            type="text"
                                            minLength="10"
                                            maxLength="11"
                                            defaultValue={sessionStorage.getItem("telefone")}
                                            required
                                        />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setTelefoneEditavel(!telefoneEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.div_trocar_senha}>
                                    <div className={styles.div_troca_img_perfil}>
                                        <div className={styles.div_image_perfil}>
                                            <img id="imgPerfil" alt="Imagem do Perfil" src={fotoPerfil} />
                                        </div>

                                        <div className={styles.btn_segunda_coluna}>
                                            <div>
                                                <label htmlFor="arquivoPerfil">
                                                    <img className={styles.acoes} src={iconUpload} alt="icone upload" />
                                                </label>
                                                <input type="file" accept="image/jpeg" name="arquivoPerfil" id="arquivoPerfil" />
                                            </div>
                                            {/* <div>
                                                <img className={styles.acoes} src={iconDeletar} alt="icone lixeira" />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type='submit'>Salvar Alterações</button>
                        </div>
                    </div>
                </form>

                <h1 className={styles.titulo_graficos}>ALTERAÇÃO DE SENHA</h1>

                <form id='form_senha' onSubmit={salvarNovaSenha}>
                    <div className={styles.div_editor_senha}>
                        <div className={styles.editor_primeira_coluna_senha}>
                            <div className={styles.textos_editor_senha}>
                                <div className={styles.nome_user_editor_senha}>
                                    <div>
                                        <h1 type="text">Senha atual:</h1>
                                        <textarea
                                            type="text"
                                            name='senhaAtual'
                                            minLength="8"
                                            maxLength="45"
                                            disabled={!senhaEditavel}
                                            placeholder="Digite aqui"
                                            defaultValue="" 
                                            required
                                        />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setSenhaEditavel(!senhaEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.nome_user_editor_senha}>
                                    <div>
                                        <h1 type="text">Nova senha:</h1> 
                                        <textarea
                                            name='novaSenha'
                                            disabled={!novaSenhaEditavel}
                                            type="text"
                                            minLength="8"
                                            maxLength="45"
                                            placeholder="Digite aqui"
                                            defaultValue="" 
                                            required
                                        />
                                    </div>
                                    <div className={styles.div_editor_icon_lapis}>
                                        <img onClick={() => setNovaSenhaEditavel(!novaSenhaEditavel)} className={styles.acoes} src={iconEditar} alt="icone lapis" />
                                    </div>
                                </div>

                                <div className={styles.nome_user_editor_senha}>
                                    <div>
                                        <h1 type="text">Repita a senha:</h1> 
                                        <textarea
                                            name='repetirNovaSenha'
                                            disabled={!novaSenhaEditavel}
                                            type="text"
                                            minLength="8"
                                            maxLength="45"
                                            placeholder="Digite aqui"
                                            defaultValue="" 
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type='submit'>Salvar senha</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ItemRectangleEditor;