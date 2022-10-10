import React from 'react';
import Overview from './conteudo-components/Overview';
import Grafico from './conteudo-components/Grafico';
import Conquista from './conteudo-components/Conquista';

function Conteudo() {
    return(
        <>
            <div className="conteudo">
                <div className="container">
                    <div className="box-container">
                        <Grafico />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conteudo;