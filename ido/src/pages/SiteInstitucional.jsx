import React from "react";
import Banner from "../components/SiteInstitucional/Banner";
import BannerIcons from "../components/SiteInstitucional/BannerIcons";
import Navbar from "../components/SiteInstitucional/Navbar";

function SiteInstitucional(){
    return(
        <>
            <Navbar />
            <Banner />
            <BannerIcons />
        </>
    );
}

export default SiteInstitucional