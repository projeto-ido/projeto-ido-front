import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo-white.png'
import api from '../../api/api.jsx'

import style from './Forms.module.css';
import { useEffect } from 'react';

export const SignUp = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [confirSenha, setConfirSenha] = useState("");

  const [dataMaxima, setDataMaxima] = useState("");

  useEffect(() => {
    setDataMaxima(new Date(Date.now()).toLocaleDateString("zh-Hans-CN").toString())
    console.log(dataMaxima);
  })

  const verificarSenha = () => {
    console.log(dataMaxima);
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
          navigate("/login")
        }
      }).catch(erro => {
        window.alert(erro)
      })
  }

  return (
    <>

      <div className={style.titulo}>
        <h1>Bem Vindo de Volta!</h1>
      </div>

      <form onSubmit={verificarSenha}>

        <div className={style.campos__cadastro}>

          <div className={[style.campo__signup]}>
            <div className={style.form__container}>

              <div className={style.label}>
                <label for="">Nome</label>
              </div>

              <div className={style.input}>
                <input name='nome'
                  placeholder="Nome..."
                  type="text"
                  minLength="3"
                  onChange={e => setNome(e.target.value)}
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
                  onChange={e => setApelido(e.target.value)}
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
                <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name='email'
                  placeholder="Coloque seu email..."
                  type="email"
                  onChange={e => setEmail(e.target.value)}
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
                <input //pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  name='nascimento'
                  placeholder="11950334249"
                  type="cell"
                  onChange={e => setNascimento(e.target.value)}
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
                  max={dataMaxima}
                  onChange={e => setNascimento(e.target.value)}
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
                  type="password"
                  onChange={e => setSenha(e.target.value)}
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
                  placeholder="Repita sua senha"
                  type="password"
                  onChange={e => setConfirSenha(e.target.value)}
                  required />
              </div>
            </div>
          </div>
        </div>

        <div className={style.botao}>
            <button>Cadastrar-se</button>
        </div>

      </form>



        <div className={style.footer}>
          {/* <div className={style.botao}>
            <div onClick={verificarSenha} className={[`${style.botao__container} ${style.botao__container__cadastro}`]}>
              <p>Cadastrar-se</p>
            </div>
          </div> */}

      

        <div className={style.img__icon}>
          <img src={logo} alt="" />
        </div>
      </div>

    </>
  );
}