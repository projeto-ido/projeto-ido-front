import React from 'react';

import './style.css';

export const SignUp = () => {
  return (
    <>
      <div className="campos__cadastro">

      <div className="campo__signup nome">
          <div className="form__container">

            <div className="label">
              <label for="">Nome</label>
            </div>

            <div className="input">
              <input placeholder="Nome..." type="text" />
            </div>
          </div>
        </div>

        <div className="campo__signup username">
          <div className="form__container">

            <div className="label">
              <label for="">Username</label>
            </div>

            <div className="input">
              <input placeholder="Username..." type="text" />
            </div>
          </div>
        </div>

        <div className="campo__signup email">
          <div className="form__container">

            <div className="label">
              <label for="">Email</label>
            </div>

            <div className="input">
              <input placeholder="Coloque seu email..." type="text" />
            </div>
          </div>
        </div>

        <div className="campo__signup email">
          <div className="form__container">

            <div className="label">
              <label for="">Data de Nascimento</label>
            </div>

            <div className="input">
              <input id="teste" placeholder="Coloque sua data de nas..." type="date" />
            </div>
          </div>
        </div>

        <div className="campo__signup senha">
          <div className="form__container">

            <div className="label">
              <label for="">Senha</label>
            </div>

            <div className="input">
              <input placeholder="Coloque seu senha..." type="password" />
            </div>
          </div>
        </div>

        <div className="campo__signup confirmacao__senha">
          <div className="form__container">

            <div className="label">
              <label for="">Confirmar Senha</label>
            </div>

            <div className="input">
              <input placeholder="Repita sua senha" type="password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}