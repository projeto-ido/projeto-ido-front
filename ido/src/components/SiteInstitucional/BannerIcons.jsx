import React from "react";
import Icons from "./Icons";

function BannerIcons() {

    const firstIcons = [
        {
            "nome": "ORGANIZAÇÃO",
            "endereco": "img-org.png",
            "descricao": "Notas",
        },
        {
            "nome": "GAMEFICAÇÃO",
            "endereco": "img-game.png",
            "descricao": "Aumentando nível",
        },
        {
            "nome": "ORGANIZAÇÃO",
            "endereco": "img-org.png",
            "descricao": "Notas",
        },
        {
            "nome": "ORGANIZAÇÃO",
            "endereco": "img-org.png",
            "descricao": "Notas",
        }
    ]

    return(
        <>
            <div className="banner-icons">
                <Icons id="first-icons" icones={firstIcons}  />
                <Icons id="second-icons" icones={secondIcons} />
                <Icons id="third-icons" icones={thirdIcons}  />
            </div>
        </>
    );
}

export default BannerIcons