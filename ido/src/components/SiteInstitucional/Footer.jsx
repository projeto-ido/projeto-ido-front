import React from "react";
import logoIdo from "../../assets/images/logo-white.png"
import logoFacebook from "../../assets/images/facebook-icon.png"
import logoInstagram from "../../assets/images/instagram-icon.png"
import logoLinkedIn from "../../assets/images/linkedin-icon.png"
import logoTwitter from "../../assets/images/twitter-icon.png"
import { Link } from "react-router-dom";
import styles from "./SiteInstitucional.module.css";

function Footer() {
    return(
        <>
        <div className={styles.footerInstitucional}>
            <div className={styles.idoCopyright}>
                <Link to="#">
                    <img src={logoIdo} alt="Logo da empresa iDo"/>
                </Link>
                <div>
                    <h1>© 2022 IDO S.A - SPTECH</h1>
                    <h2>Rua Hadoock Lobo, 595 - São Paulo, SP - 01141103</h2>
                </div>
            </div>
            <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/sptech.school" target="_blank" rel="noreferrer">
                    <img src={logoFacebook} alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/sptech.school/" target="_blank" rel="noreferrer"> 
                    <img src={logoInstagram} alt="Instagram"/>
                </a>
                <a href="https://www.linkedin.com/school/sptechschool/" target="_blank" rel="noreferrer">
                    <img src={logoLinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://twitter.com/SptechSchool" target="_blank" rel="noreferrer">
                    <img src={logoTwitter} alt="Twitter"/>
                </a>
            </div>
        </div>
        </>
    );
}

export default Footer