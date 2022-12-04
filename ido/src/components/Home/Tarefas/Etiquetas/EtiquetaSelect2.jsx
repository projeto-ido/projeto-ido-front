import React, { useState, useEffect } from "react";
import style from "../../../../components/Home/Home.module.css";
import api from "../../../../api/api.jsx";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";

export default function EtiquetaSelect2(){
    const [listaEtiquetas, setListaEtiquetas] = useState([]);
    const [qtdEtiquetas, setQtdEtiquetas] = useState(0);
    const [etiqueta2, setEtiqueta2] = useSessionStorageNumber("etiqueta2");

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");
        api.get(`/usuarios/${idUsuario}/etiquetas`).then(res => {
            console.log("dados ", res.data.length);
            setListaEtiquetas(res.data);
            setQtdEtiquetas(res.data.length);
            if (res.data === "") {
                setListaEtiquetas([""])
            }
            if(JSON.parse(sessionStorage.getItem("etiqueta2")).idEtiqueta !== undefined){
                setEtiqueta2(JSON.parse(sessionStorage.getItem("etiqueta2")).idEtiqueta)
            }
        }).catch(erro => {
            console.log(erro)
        })
    }, [])

    return (
        <select value={etiqueta2} onChange={(e) => setEtiqueta2(e.target.value)} 
            className={style.select_etiquetas}>
            <option value="">Selecione</option>
            {listaEtiquetas.map((item) => (
                <option value={item.idEtiqueta}>{item.titulo}</option>
            ))}
        </select>
    )
}
