import React, { useState, useEffect } from 'react';
import ItemSquare from './ItemSquare';
import ItemRectangleBio from './overview-components/ItemRectangleBio';
import api from '../../../api';

function Overview(props) {
    const [listaInfoUser, setListaInfoUser] = useState([]);

    useEffect(() => {
        api.get().then(res => {
          console.log("dados:", res.data);
          console.log("status code:", res.status);
          setListaInfoUser(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            <div className="div-up">

                {
                    listaInfoUser.map(infoAtual => (
                        <React.Fragment key={infoAtual.id}>
                            <ItemRectangleBio 
                                titulo={infoAtual.titulo}
                                texto={infoAtual.texto}
                                imagem={infoAtual.imagem}
                            />
                        </React.Fragment>
                    ))
                }
                
            </div>
            
            <div className="div-down">
                <ItemSquare />
                <ItemSquare />
            </div>
        </>
    )
}

export default Overview;