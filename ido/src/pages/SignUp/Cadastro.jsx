import React from 'react'
import { ComeBack } from '../../components/Forms/ComeBack';
import { SignUp } from '../../components/Forms/SignUp';
import { BackGroundForm } from '../../components/Forms/BackGroundForm';
import style from '../../components/Forms/Forms.module.css'

export const Cadastro = () => {
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
