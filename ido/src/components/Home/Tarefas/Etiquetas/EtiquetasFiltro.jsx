import React, { useState, useEffect } from "react";
import style from "../../../../components/Home/Home.module.css";
import api from "../../../../api/api.jsx";
import { useSessionStorageNumber, useSessionStorageBoolean } from "react-use-window-sessionstorage";

export default function EtiquetasFiltro(){
    const [listaEtiquetas, setListaEtiquetas] = useState([]);
    const [qtdEtiquetas, setQtdEtiquetas] = useState(0);
    const [etiquetaFiltro, setEtiquetaFiltro] = useSessionStorageNumber("etiquetaFiltro", "");
    const [atualizarFiltroEtiqueta, setAtualizarFiltroEtiqueta] = useSessionStorageBoolean("atualizarFiltroEtiqueta", false);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("idLogado");

        api.get(`/usuarios/${idUsuario}/etiquetas`).then(res => {
            console.log("dados ", res.data.length);
            setListaEtiquetas(res.data);
            setQtdEtiquetas(res.data.length);
            if (res.data === "") {
                setListaEtiquetas([""])
            }

            // if(JSON.parse(sessionStorage.getItem("etiqueta2")).idEtiqueta !== undefined){
            //     //setEtiqueta2(JSON.parse(sessionStorage.getItem("etiqueta2")).idEtiqueta)
            // }
        }).catch(erro => {
            console.log(erro)

        })

    }, [])

    

    return (
        <div onClick={() => setAtualizarFiltroEtiqueta(true)}
        >
        <select value={etiquetaFiltro} onChange={(e) =>
            setEtiquetaFiltro(e.target.value)} className={style.select_etiquetas}
            name="" id="">
            <option value=""></option>
            {listaEtiquetas.map((item) => (
                <option value={item.idEtiqueta}>{item.titulo}</option>
            ))}
        </select>
        </div>
    )
}