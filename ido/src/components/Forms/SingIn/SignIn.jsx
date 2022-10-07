import React from 'react';
import './style.css'

export const SignIn = () => {
    return (
        <>
            <div class="campos">

                <div class="campo email">
                    <div class="form__container">

                        <div class="label">
                            <label for="inpt-email">Email</label>
                        </div>

                        <div class="input">
                            <input id="ipt-email" placeholder="Coloque seu email..." type="text" />
                        </div>
                    </div>
                </div>

                <div class="campo senha">
                    <div class="form__container">

                        <div class="label">
                            <label for="">Senha</label>
                        </div>

                        <div class="input">
                            <input placeholder="Coloque seu senha..." type="password" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
