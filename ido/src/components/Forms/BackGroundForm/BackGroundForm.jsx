import React from "react"

import "./BackGroundForm.css"

import balao from '../../../assets/images/balao.png';
import balao_invertido from '../../../assets/images/balao-invertido.png';
import calendario from '../../../assets/images/calendario.png';


export const BackGroundForm = () => {
    return(
        <>
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
        </>
    );

}