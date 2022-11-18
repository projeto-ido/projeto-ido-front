import React from "react";
import { SignIn } from "../../components/Forms/SignIn";
import { ComeBack } from '../../components/Forms/ComeBack';
import { BackGroundForm } from '../../components/Forms/BackGroundForm';
import style from '../../components/Forms/Forms.module.css';
import acessibilidade from "../../scripts/acessibilidade";

export const Login = () => {
    acessibilidade();

    return (
        <>
            <main>
    
                <div className={style.main__container}>
    
                    <div className={style.formulario}>
    
                        <div className={style.container}>
                            <ComeBack path="/"/>
    
                            <SignIn />
                            
                        </div>
                    </div>
    
                    <BackGroundForm />
                    
                </div>
    
            </main>
        
        </>
      );

}