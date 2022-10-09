import React from 'react';
import ItemSquare from './ItemSquare';
import api from '../../../api';

function Overview(props) {
    return(
        <>
            <div className="div-up">
                <div className="overview-container-up">
                    <div className="overview-descricao">
                        <div className="titulo-descricao">
                            <h1>Julia Veloso Santos, 21 anos</h1>
                        </div>

                        <div className="texto-descricao">
                            <span>“Sou uma universitária e estagiária de medicina, 
                                   ficando grande parte do tempo fora de casa e não 
                                   consigo me organizar e gerenciar meu tempo devido 
                                   a minha rotina puxada.”​</span>
                        </div>
                    </div>

                    <div className="overview-imagem"></div>
                </div>
            </div>
            
            <div className="div-down">
                <ItemSquare />
                <ItemSquare />

                {/* <div className="overview-container-down">
                    <div></div>
                    <div></div>
                </div> */}
            </div>
        </>
    )
}

export default Overview;