import React from "react";
import Icons from "./Icons";
import styles from "./SiteInstitucional.module.css"

function BannerIcons() {
    return(
        <>
            <div className={styles.bannerIcons}>
                <Icons />
            </div>
        </>
    );
}

export default BannerIcons