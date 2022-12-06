import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo-white.png'
import api from '../../api/api.jsx'

import style from './Forms.module.css';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const SignUp = () => {
  const navigate = useNavigate();

  const [dataMaxima, setDataMaxima] = useState("");

  useEffect(() => {
    setDataMaxima(new Date(Date.now()).toLocaleDateString("zh-Hans-CN").toString())
    console.log(dataMaxima);
  })

  const verificarSenha = (event) => {
    event.preventDefault();

    const inputs = event.target;
    console.log(inputs.nascimento.value);

    if (inputs.confirmarSenha.value !== inputs.senha.value) {
      erro("Senhas estão diferentes");
    } else {
      cadastrar(inputs);
    }

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

  const cadastrar = (inputs) => {
    console.log(inputs);
    const data = {
      nome: inputs.nome.value,
      apelido: inputs.apelido.value,
      nascimento: inputs.nascimento.value,
      email: inputs.email.value,
      telefone: inputs.telefone.value,
      senha: inputs.senha.value
    }
    api.post("/usuarios", data)
      .then(resposta => {
        if (resposta.status === 201) {
          sucesso("Cadastro realizado com sucesso");
          
          setTimeout(() => {
            navigate("/login")
          }, 4000);
        
        }
      }).catch(() => {
        erro("Ops!, Sinto muito não foi possivel realizar seu cadastro 😕. Espere alguns minutos e tente novamente.")
      })
  }

  return (
    <>
      <ToastContainer />
      <div className={style.titulo}>
        <h1>Seja Bem Vindo!</h1>
      </div>
      <form onSubmit={verificarSenha}>
        <div className={style.campos__cadastro}>
          <div className={[style.campo__signup]}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Nome</label>
              </div>
              <div className={style.input}>
                <input 
                  name='nome'
                  placeholder="Nome..."
                  type="text"
                  minLength="3"
                  maxLength="30"
                  required />
              </div>
            </div>
          </div>
          <div className={[style.campo__signup]}>
            <div className={[style.form__container]}>
              <div className={style.label}>
                <label for="">Username</label>
              </div>
              <div className={style.input}>
                <input
                  name='apelido'
                  placeholder="Username..."
                  type="text"
                  minLength="3"
                  required />
              </div>
            </div>
          </div>
          <div className={[style.campo__signup]}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Email</label>
              </div>
              <div className={style.input}>
                <input
                  pattern="[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name='email'
                  placeholder="Coloque seu email..."
                  type="email"
                  required />
              </div>
            </div>
          </div>
          <div className={[style.campo__signup]}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Telefone</label>
              </div>
              <div className={style.input}>
                <input
                  name='telefone'
                  placeholder="11950334249"
                  minLength="10"
                  maxLength="11"
                  type="cell"
                  required />
              </div>
            </div>
          </div>
          <div className={[style.campo__signup]}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Data de Nascimento</label>
              </div>
              <div className={style.input}>
                <input
                  name='nascimento'
                  placeholder="Coloque sua data de nas..."
                  type="date"
                  max="2022-11-24"
                  required />
              </div>
            </div>
          </div>
          <div className={style.campo__signup}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Senha</label>
              </div>
              <div className={style.input}>
                <input
                  name="senha"
                  placeholder="Coloque seu senha..."
                  minLength="8"
                  type="password"
                  required />
              </div>
            </div>
          </div>
          <div className={style.campo__signup}>
            <div className={style.form__container}>
              <div className={style.label}>
                <label for="">Confirmar Senha</label>
              </div>
              <div className={style.input}>
                <input
                  name='confirmarSenha'
                  placeholder="Repita sua senha"
                  type="password"
                  required />
              </div>
            </div>
          </div>
        </div>
        <div className={style.botao}>
            <button type='submit'>Cadastrar-se</button>
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