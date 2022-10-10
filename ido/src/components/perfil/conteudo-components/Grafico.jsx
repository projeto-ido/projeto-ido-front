import React from 'react';
import ItemSquare from './ItemSquare';
import ItemRectangle from './ItemRectangle';
import api from '../../../api';
import ItemSquareEtiqueta from './grafico-components/ItemSquareEtiqueta';

function Grafico(props) {
    return(
        <>
            <div className="div-up-grafico">
                <ItemSquare />
                <ItemSquareEtiqueta />
            </div>

            <div className="div-down-grafico">
                <ItemRectangle />
            </div>
        </>
    )
}

export default Grafico;