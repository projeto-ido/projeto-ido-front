import React from "react";

import { SignIn } from "../../components/Forms/SignIn/SignIn";

import { ComeBack } from '../../components/Forms/ComeBack';

import { BackGroundForm } from '../../components/Forms/BackGroundForm/BackGroundForm';

import '../../assets/css/formulario.css'


export const Login = () => {
    return (
        <>
            <main>
    
                <div className="main__container">
    
                    <div className="formulario">
    
                        <div className="container">
                            <ComeBack />
    
                            <SignIn />
                            
                        </div>
                    </div>
    
                    <BackGroundForm />
                    
                </div>
    
            </main>
        
        </>
      );

}