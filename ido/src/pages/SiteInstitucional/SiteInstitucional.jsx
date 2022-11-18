import React from "react";
import BannerRadio from "../../components/SiteInstitucional/BannerRadio";
import Banner from "../../components/SiteInstitucional/Banner";
import BannerIcons from "../../components/SiteInstitucional/BannerIcons";
import Navbar from "../../components/SiteInstitucional/Navbar";
import Metodologias from "../../components/SiteInstitucional/Metodologias";
import Beneficios from "../../components/SiteInstitucional/Beneficios";
import Footer from "../../components/SiteInstitucional/Footer";
import styles from "../../components/SiteInstitucional/SiteInstitucional.module.css";
import acessibilidade from '../../scripts/acessibilidade';

function SiteInstitucional(){
    acessibilidade();

    return(
        <>
        <main className={styles.bodySiteInstitucional}>
            <Navbar />
            <Banner />
            <BannerIcons />
            <BannerRadio />
            <Metodologias />
            <Beneficios />
            <Footer />
        </main>
        </>
    );
}

export default SiteInstitucional