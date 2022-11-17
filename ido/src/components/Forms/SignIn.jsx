import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorageString } from "react-use-window-sessionstorage";
import logo from '../../assets/images/logo-white.png'
import style from './Forms.module.css'
import api from "../../api/api.jsx"



export const SignIn = () => {
    const navigate = useNavigate();
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado",  "");
    const [nomeUsuarioStorage, setNomeUsuarioStorage] = useSessionStorageString("nomeLogado",  "");    const logar = (event) => {
        event.preventDefault();
        
        const data = {
            email: event.target.email.value,
            senha: event.target.senha.value
        }

        api.post("/usuarios/login", data)
            .then(resposta => {
                if(resposta.status === 200){                    
                    setIdUsuarioStorage(resposta.data.idUsuario);
                    setNomeUsuarioStorage(resposta.data.apelido);
                    if(idUsuarioStorage !== "" && nomeUsuarioStorage !== ""){
                        console.log("Usuario logado " + idUsuarioStorage);
                        console.log("Nome logado " + nomeUsuarioStorage);
                        const data = resposta.data;

                    sessionStorage.setItem("id", data.idUsuario);
                    sessionStorage.setItem("nome", data.nome);
                    sessionStorage.setItem("apelido", data.apelido);
                    sessionStorage.setItem("email", data.email);
                    sessionStorage.setItem("biografia", data.biografia);
                    sessionStorage.setItem("imagemBiografica", data.imagemBiografica);
                    sessionStorage.setItem("imagemPerfil", data.imagemPerfil);
                    sessionStorage.setItem("nascimento", data.nascimento);
                    sessionStorage.setItem("nivel", data.nivel);

                    navigate("/home");
                    }
                    
                }
            }).catch(erro => {
                console.log(erro);
            })

    }


    return (
        <>
            <div className={style.titulo}>
                <h1>Seja Bem Vindo!</h1>
            </div>

            <form onSubmit={logar}>

                <div className={style.campos}>

                    <div className={style.campos__container}>
                        <div className={style.campo__signin}>
                            <div className={style.form__container}>

                                <div className={style.label}>
                                    <label for="">Email</label>
                                </div>

                                <div className={style.input}>
                                    <input
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        name='email'
                                        placeholder="Coloque seu email..."
                                        type="email"
                                        required/>
                                </div>
                            </div>
                        </div>

                        <div className={style.campo__signin}>
                            <div className={style.form__container}>

                                <div className={style.label}>
                                    <label for="">Senha</label>
                                </div>

                                <div className={style.input}>
                                    <input
                                        name='senha'
                                        placeholder="Coloque seu senha..."
                                        type="password"
                                        required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.botao__login}>
                    <button type='submit'>Logar</button>
                </div>

            </form>

            <div className={style.footer}>
                <div className={style.img__icon}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}
