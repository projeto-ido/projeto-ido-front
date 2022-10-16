import React from 'react'

import { SignUp } from '../../components/Forms/SingUp/SignUp';
import { ComeBack } from '../../components/Forms/ComeBack';

import { BackGroundForm } from '../../components/Forms/BackGroundForm/BackGroundForm';

import '../../assets/css/formulario.css'


export const Cadastro = (props) => {
  return (
    <>
        <main>

            <div className="main__container">

                <div className="formulario">

                    <div className="container">
                        <ComeBack />

                        <SignUp props={props}/>
                        
                    </div>
                </div>

                <BackGroundForm />
                
            </div>

        </main>
    
    </>
  );
}
