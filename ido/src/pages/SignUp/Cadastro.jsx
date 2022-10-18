import React from 'react'
import { SignUp } from '../../components/Forms/SingUp/SignUp';
import { ComeBack } from '../../components/Forms/ComeBack';
import { BackGroundForm } from '../../components/Forms/BackGroundForm/BackGroundForm';

export const Cadastro = () => {
  return (
    <>
        <main>

            <div className="main__container">

                <div className="formulario">

                    <div className="container">
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
