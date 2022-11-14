import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorageString } from "react-use-window-sessionstorage";
import logo from '../../assets/images/logo-white.png'
import style from './Forms.module.css'
import api from "../../api/api.jsx"



export const SignIn = () => {
    const navigate = useNavigate();
    const [idUsuarioStorage, setIdUsuarioStorage] = useSessionStorageString("idLogado",  "");
    const [emai, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () => {
        
        const data = {
            email: emai,
            senha: senha
        }

        api.post("/usuarios/login", data)
            .then(resposta => {
                if(resposta.status === 200){                    
                    setIdUsuarioStorage(resposta.data.idUsuario);
                    if(idUsuarioStorage != ""){
                        console.log("Usuario logado " + idUsuarioStorage);
                        navigate("/home")
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

            <div className={style.campos}>

                <div className={style.campos__container}>
                    <div className={style.campo__signin}>
                        <div className={style.form__container}>

                            <div className={style.label}>
                                <label for="">Email</label>
                            </div>

                            <div className={style.input}>
                                <input
                                    name='email'
                                    placeholder="Coloque seu email..."
                                    type="email"
                                    onChange={e => setEmail(e.target.value)} />
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
                                    onChange={e => setSenha(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.footer}>
                <div className={style.botao}>
                    <div onClick={logar} className={[`${style.botao__container} ${style.botao__container__login}`]}>
                        <p>Logar</p>
                    </div>
                </div>

                <div className={style.img__icon}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}
