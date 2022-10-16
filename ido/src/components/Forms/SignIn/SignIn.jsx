import React from 'react';
import { useState } from 'react';

import './style.css'
import logo from '../../../assets/images/logo-white.png'

import api from "../../../api/api.jsx"



export const SignIn = () => {

    const [emai, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () => {
        const data = {
            email: emai,
            senha: senha
        }

        api.post("/usuarios/login", data)
            .then(resposta => {
                console.log(resposta);
            }).catch(erro => {
                console.log(erro);
            })

    }

    return (
        <>
            <div class="titulo">
                <h1>Seja Bem Vindo!</h1>
            </div>

            <div class="campos">

                <div className="campos__container">
                    <div class="campo__signin email">
                        <div class="form__container">

                            <div class="label">
                                <label for="inpt-email">Email</label>
                            </div>

                            <div class="input">
                                <input
                                    name='email'
                                    placeholder="Coloque seu email..."
                                    type="email"
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div class="campo__signin senha">
                        <div class="form__container">

                            <div class="label">
                                <label for="">Senha</label>
                            </div>

                            <div class="input">
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

            <div className="footer">
                <div className="botao">
                    <div onClick={logar} className={"botao__container botao__container__login"}>
                        <p>Logar</p>
                    </div>
                </div>

                <div className="img__icon">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}
