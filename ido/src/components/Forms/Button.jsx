import React from 'react';

import logo from '../../assets/images/logo.png'

export const Button = ({ text, className }) => {
    return (
        <>
            <div className="footer">
                <div className="botao">
                    <div className={"botao__container " + className}>
                        <p>{text}</p>
                    </div>
                </div>

                <div className="img__icon">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}
