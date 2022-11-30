import React from "react";
import BannerRadio from "../../components/SiteInstitucional/BannerRadio";
import Banner from "../../components/SiteInstitucional/Banner";
import BannerIcons from "../../components/SiteInstitucional/BannerIcons";
import Navbar from "../../components/SiteInstitucional/Navbar";
import Metodologias from "../../components/SiteInstitucional/Metodologias";
import Beneficios from "../../components/SiteInstitucional/Beneficios";
import Footer from "../../components/SiteInstitucional/Footer";
import styles from "../../components/SiteInstitucional/SiteInstitucional.module.css";
import acessibilidade from "../../scripts/acessibilidade";
import axios from "axios";
import fileDownload from "js-file-download";

function SiteInstitucional(){
    acessibilidade();

    const handleDownload = (url,filename) => {
        // const url = "localhost:8080/usuarios/1/exportacao/grava/csv/teste"
        axios.post(url, null)
        .then(res => {
            fileDownload(res.data, filename)
        }).catch(erro => {
            console.log(erro);
        })
    }

    return(
        <>


        <main className={styles.bodySiteInstitucional}>
        <button onClick={() => {handleDownload('/usuarios/1/exportacao/grava/csv/teste' ,'aaaaloooo')}}>Download</button>
            {/* <Navbar />
            <Banner />
            <BannerIcons />
            <BannerRadio />
            <Metodologias />
            <Beneficios />
            <Footer /> */}
        </main>
        </>
    );
}

export default SiteInstitucional