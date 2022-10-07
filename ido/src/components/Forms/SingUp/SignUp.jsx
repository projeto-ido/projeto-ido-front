import React from 'react';
import './style.css';

export const SignUp = () => {
  return (
    <>
      <div className="campos">

        <div className="campo email">
          <div className="form__container">

            <div className="label">
              <label for="">Email</label>
            </div>

            <div className="input">
              <input placeholder="Coloque seu email..." type="text" />
            </div>
          </div>
        </div>

        <div className="campo senha">
          <div className="form__container">

            <div className="label">
              <label for="">Senha</label>
            </div>

            <div className="input">
              <input placeholder="Coloque seu senha..." type="password" />
            </div>
          </div>
        </div>

        <div className="campo confirmacao__senha">
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