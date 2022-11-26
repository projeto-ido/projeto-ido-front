import React, { useState, useEffect } from "react";
import style from "../../../../components/Home/Home.module.css";
import api from "../../../../api/api.jsx";
import { useSessionStorageNumber } from "react-use-window-sessionstorage";

export default function EtiquetaSelect(){
    const [listaEtiquetas, setListaEtiquetas] = useState([]);
    const [qtdEtiquetas, setQtdEtiquetas] = useState(0);
    const [etiqueta1, setEtiqueta1] = useSessionStorageNumber("etiqueta1");

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");

        api.get(`/usuarios/${idUsuario}/etiquetas`).then(res => {
            console.log("dados ", res.data.length);
            setListaEtiquetas(res.data);
            setQtdEtiquetas(res.data.length);
            if (res.data === "") {
                setListaEtiquetas([""])
            }
        }).catch(erro => {
            console.log(erro)

        })

    }, [])

    return (
        <select value={etiqueta1} onChange={(e) =>
            setEtiqueta1(e.target.value)} className={style.select_etiquetas}
            name="" id="">
            <option value=""></option>
            {listaEtiquetas.map((item) => (
                <option value={item.idEtiqueta}>{item.titulo}</option>
            ))}
        </select>
    )
}