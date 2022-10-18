import React from "react";
import BannerRadio from "../../components/SiteInstitucional/BannerRadio";
import Banner from "../../components/SiteInstitucional/Banner";
import BannerIcons from "../../components/SiteInstitucional/BannerIcons";
import Navbar from "../../components/SiteInstitucional/Navbar/Navbar";
import Metodologias from "../../components/SiteInstitucional/Metodologias";
import Beneficios from "../../components/SiteInstitucional/Beneficios";
import Footer from "../../components/SiteInstitucional/Footer";


function SiteInstitucional(){
    return(
        <>
            <Navbar />
            <Banner />
            <BannerIcons />
            <BannerRadio />
            <Metodologias />
            <Beneficios />
            <Footer />
        </>
    );
}

export default SiteInstitucional