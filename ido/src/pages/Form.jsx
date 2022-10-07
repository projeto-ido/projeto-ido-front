import React from 'react'

import { SignIn } from '../components/Forms/SingIn/SignIn';
import { SignUp } from '../components/Forms/SingUp/SignUp';
import { Title } from '../components/Forms/Title';
import { Button } from '../components/Forms/Button';

export const Form = () => {
  return (
    <>
        <main>

            <div className="main__container">

                <div className="formulario">

                    <div className="container">
                        <Title text="ALLLIOOOOOO"/>
                            <SignIn />
                        <Button />
                    </div>
                </div>


                <div className="img__calendario">
                <div className="calendario__container">
                    <div className="balao">
                        <img src="./assets/balao.png" alt="" />
                    </div>
                    <div className="calendario">
                        <img src="./assets/calendario.png" alt="" />
                    </div>

                    <div className="balao__invertido">
                        <img src="./assets/balao-invertido.png" alt="" />
                    </div>
                </div>
                </div>
            </div>

        </main>
    
    </>
  );
}
