import React from "react";
import { useNavigate } from "react-router-dom";

import voltar from '../../assets/images/voltar.png'
import style from '../Forms/Forms.module.css'

export const ComeBack = ({path}) => {
    const navigate = useNavigate();

    const retornarInstitucional = () => {
        navigate(path)
    }

    return(
        <>
            <div onClick={retornarInstitucional} className={style.voltar}>
                <img src={voltar} alt="" />
            </div>
        </>
    );
}