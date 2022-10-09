import React, { useState, useEffect } from 'react';
import api from '../../../api';
import ItemConquista from './conquista-components/ItemConquista';
import BadgeConquista from './conquista-components/BadgeConquista';

function Conquista() {
    const [listaConquistas, setListaConquistas] = useState([]);

    useEffect(() => {
        api.get().then(res => {
          console.log("dados:", res.data);
          console.log("status code:", res.status);
          setListaConquistas(res.data);
        }).catch(erro => {
          console.log(erro);
        })
    }, [])

    return(
        <>
            <div className="div-up">
                <div className="conquista-container-up">
                    <div className="conquista-badges">
                        <BadgeConquista />
                    </div>

                    <div className="conquista-grafico"></div>
                </div>
            </div>

            <div className="div-down">
                <div className="conquista-container-down">

                    {
                        listaConquistas.map(conquistaAtual => (
                            <React.Fragment key={conquistaAtual.id}>
                                <ItemConquista 
                                    titulo={conquistaAtual.titulo}
                                    texto={conquistaAtual.texto}
                                    imagem={conquistaAtual.imagem}
                                />
                            </React.Fragment>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Conquista;