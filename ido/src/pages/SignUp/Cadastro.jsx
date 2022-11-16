import React from 'react'
import { ComeBack } from '../../components/Forms/ComeBack';
import { SignUp } from '../../components/Forms/SignUp';
import { BackGroundForm } from '../../components/Forms/BackGroundForm';
import style from '../../components/Forms/Forms.module.css';
import acessibilidade from "../../scripts/acessibilidade";

export const Cadastro = () => {
    acessibilidade();

    return (
    <>
        <main>

            <div className={style.main__container}>

                <div className={style.formulario}>

                    <div className={style.container}>
                        <ComeBack path="/" />

                        <SignUp/>
                        
                    </div>
                </div>

                <BackGroundForm />
                
            </div>

        </main>
    
    </>
  );
}
