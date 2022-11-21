import React, { useState, useEffect } from "react";
import style from "../../../../components/Home/Home.module.css";
import api from "../../../../api/api.jsx";

export default function EtiquetaSelect(){
    const [listaEtiquetas, setListaEtiquetas] = useState([]);
    const [qtdEtiquetas, setQtdEtiquetas] = useState(0);
    const [etiqueta, setEtiqueta] = useState("");

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
        <select value={etiqueta} onChange={(e) =>
            setEtiqueta(e.target.value)} className={style.select_etiquetas}
            name="" id="">
            <option value=""></option>
            {listaEtiquetas.map((e) => (
                <option value={e.idEtiqueta}>{e.titulo}</option>
            ))}
        </select>
    )
}