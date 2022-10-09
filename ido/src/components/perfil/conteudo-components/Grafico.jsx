import React from 'react';
import ItemSquare from './ItemSquare';
import api from '../../../api';

function Grafico(props) {
    return(
        <>
            <div className="div-up-grafico">
                <ItemSquare />
                <ItemSquare />
                
                {/* <div className="grafico-container-up">
                    <div></div>
                    <div></div>
                </div> */}
            </div>

            <div className="div-down-grafico">
                <div className="grafico-container-down"></div>
            </div>
        </>
    )
}

export default Grafico;