import React from "react";
import { SignIn } from "../../components/Forms/SignIn/SignIn";
import { ComeBack } from '../../components/Forms/ComeBack';
import { BackGroundForm } from '../../components/Forms/BackGroundForm/BackGroundForm';

export const Login = () => {
    return (
        <>
            <main>
    
                <div className="main__container">
    
                    <div className="formulario">
    
                        <div className="container">
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