import React from "react"

import style from "./Forms.module.css"

import balao from '../../assets/images/balao.png';
import balao_invertido from '../../assets/images/balao-invertido.png';
import calendario from '../../assets/images/calendario.png';


export const BackGroundForm = () => {
    return(
        <>
            <div className={style.img__calendario}>
                <div className={style.calendario__container}>
                    <div className={style.balao}>
                        <img src={balao} alt="" />
                    </div>
                    <div className={style.calendario}>
                        <img src={calendario} alt="" />
                    </div>

                    <div className={style.balao__invertido}>
                        <img src={balao_invertido} alt="" />
                    </div>
                </div>
                </div>
        </>
    );

}