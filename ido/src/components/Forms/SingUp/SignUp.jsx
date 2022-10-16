import { React, useState } from 'react';
import { History } from '@remix-run/router';

import logo from '../../../assets/images/logo-white.png'
import api from '../../../api/api.jsx'

import './style.css';

export const SignUp = () => {

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [confirSenha, setConfirSenha] = useState("");

  const verificarSenha = () => {
    console.log(confirSenha);
    console.log(senha);
    if (confirSenha !== senha) {
      window.alert("Senhas não batem")
    } else {
      cadastrar();
    }

  }

  const cadastrar = (props) => {
    console.log(props);
    const data = {
      nome: nome,
      apelido: apelido,
      nascimento: nascimento,
      email: email,
      senha: senha
    }

    api.post("/usuarios", data)
      .then(resposta => {
        if (resposta.status === 201) {
          
        }
      }).catch(erro => {
        window.alert(erro)
      })


  }

  return (
    <>

      <div class="titulo">
        <h1>Bem Vindo de Volta!</h1>
      </div>

      <div className="campos__cadastro">

        <div className="campo__signup nome">
          <div className="form__container">

            <div className="label">
              <label for="">Nome</label>
            </div>

            <div className="input">
              <input name='nome'
                placeholder="Nome..."
                type="text"
                minLength="3"
                onChange={e => setNome(e.target.value)}
                required />
            </div>
          </div>
        </div>

        <div className="campo__signup username">
          <div className="form__container">

            <div className="label">
              <label for="">Username</label>
            </div>

            <div className="input">
              <input
                name='apelido'
                placeholder="Username..."
                type="text"
                minLength="3"
                onChange={e => setApelido(e.target.value)}
                required />
            </div>
          </div>
        </div>

        <div className="campo__signup email">
          <div className="form__container">

            <div className="label">
              <label for="">Email</label>
            </div>

            <div className="input">
              <input pattern='/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i'
                name='email'
                placeholder="Coloque seu email..."
                type="email"
                onChange={e => setEmail(e.target.value)}
                required />
            </div>
          </div>
        </div>

        <div className="campo__signup dt__nascimento">
          <div className="form__container">

            <div className="label">
              <label for="">Data de Nascimento</label>
            </div>

            <div className="input">
              <input
                name='nascimento'
                placeholder="Coloque sua data de nas..."
                type="date"
                onChange={e => setNascimento(e.target.value)}
                required />
            </div>
          </div>
        </div>

        <div className="campo__signup senha">
          <div className="form__container">

            <div className="label">
              <label for="">Senha</label>
            </div>

            <div className="input">
              <input
                name="senha"
                placeholder="Coloque seu senha..."
                type="password"
                onChange={e => setSenha(e.target.value)}
                required />
            </div>
          </div>
        </div>

        <div className="campo__signup confirmacao__senha">
          <div className="form__container">

            <div className="label">
              <label for="">Confirmar Senha</label>
            </div>

            <div className="input">
              <input
                placeholder="Repita sua senha"
                type="password"
                onChange={e => setConfirSenha(e.target.value)}
                required />
            </div>
          </div>
        </div>
      </div>



      <div className="footer">
        <div className="botao">
          <div onClick={verificarSenha} className={"botao__container botao__container__cadastro"}>
            <p>Cadastrar-se</p>
          </div>
        </div>

        <div className="img__icon">
          <img src={logo} alt="" />
        </div>
      </div>

    </>
  );
}