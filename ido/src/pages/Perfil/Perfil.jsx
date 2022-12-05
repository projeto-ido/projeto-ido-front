import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/perfil/Sidebar';
import Header from '../../components/perfil/Header';
import Conteudo from '../../components/perfil/Conteudo';
import styles from "../../components/perfil/Perfil.module.css";
import acessibilidade from "../../scripts/acessibilidade";
import apiService from '../../api/apiService';

function Perfil() {
    acessibilidade();

    const [listaInfoUser, setListaInfoUser] = useState([])
    const [usuarioAtualizado, setUsuarioAtualizado] = useState(false)
    
    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/${idUsuario}`).then(res => {
            setListaInfoUser(res.data);
            sessionStorage.setItem("nome", res.data.nome);
            sessionStorage.setItem("apelido", res.data.apelido);
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("biografia", res.data.biografia);
            sessionStorage.setItem("imagemBiografia", res.data.imagemBiografia);
            sessionStorage.setItem("imagemPerfil", res.data.imagemPerfil);
            sessionStorage.setItem("telefone", res.data.telefone);
            setUsuarioAtualizado(false)
            console.log(usuarioAtualizado)
        }).catch(erro => {
            console.log(erro);
        })
    }, [usuarioAtualizado])

    return(
        <>
            <main className={styles.bodyPerfil}>
                <div className={styles.main_container}>
                    <Header />
                    <Sidebar />
                    <Conteudo setUsuarioAtualizado={setUsuarioAtualizado} />
                </div>
            </main>
        </>
    )
}

export default Perfil;