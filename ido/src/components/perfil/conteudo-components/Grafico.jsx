import React from 'react';
import ItemSquare from './ItemSquare';

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