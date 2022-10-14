import React from 'react'

import { SignIn } from '../components/Forms/SingIn/SignIn'
import { SignUp } from '../components/Forms/SingUp/SignUp';
import { Title } from '../components/Forms/Title';
import { Button } from '../components/Forms/Button';
import { ComeBack } from '../components/Forms/ComeBack';

import '../assets/css/formulario.css'

import balao from '../assets/images/balao.png';
import balao_invertido from '../assets/images/balao-invertido.png';
import calendario from '../assets/images/calendario.png';



export const Form = () => {
  return (
    <>
        <main>

            <div className="main__container">

                <div className="formulario">

                    <div className="container">
                        <ComeBack />
                        <Title text="Bem Vindo de Volta!"/>

                        <SignUp />

                        <Button text="Cadastre-se" className="botao__container__cadastro"/>
                    </div>
                </div>


                <div className="img__calendario">
                <div className="calendario__container">
                    <div className="balao">
                        <img src={balao} alt="" />
                    </div>
                    <div className="calendario">
                        <img src={calendario} alt="" />
                    </div>

                    <div className="balao__invertido">
                        <img src={balao_invertido} alt="" />
                    </div>
                </div>
                </div>
            </div>

        </main>
    
    </>
  );
}
