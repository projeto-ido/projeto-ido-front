import React from "react";
import styles from "./SiteInstitucional.module.css";

function BannerRadio() {
    return(
        <>
            <div className={styles.bannerRadio}>
                <input type="radio" id="first-radio" defaultChecked onClick={() => moveCarousel(1)}/>
                <input type="radio" id="second-radio" onClick={() => moveCarousel(2)}/>
                <input type="radio" id="third-radio" onClick={() => moveCarousel(3)}/>
            </div>
        </>
    );
}

function moveCarousel(radioId){
    const firstRadio = document.getElementById("first-radio")
    const secondRadio = document.getElementById("second-radio")
    const thirdRadio = document.getElementById("third-radio")

    const firstIcons = document.getElementById("first-icons")
    const secondIcons = document.getElementById("second-icons")
    const thirdIcons = document.getElementById("third-icons")

    if(radioId === 1){
        setUncheckedTo(secondRadio)
        setUncheckedTo(thirdRadio)

        console.log("RADIO 1")
        
        setClassToHideIcons(secondIcons)
        setClassToHideIcons(thirdIcons)
        
        setTimeout(() => {
            setDisplayToFlex(firstIcons)
            
            setDisplayToNone(secondIcons)
            setDisplayToNone(thirdIcons)
        }, 1000)
        
        setClassToShowIcons(firstIcons)
    }else if(radioId === 2){
        setUncheckedTo(firstRadio)
        setUncheckedTo(thirdRadio)
        
        console.log("RADIO 2")
        setClassToHideIcons(firstIcons)
        setClassToHideIcons(thirdIcons)

        setTimeout(() => {
            setDisplayToNone(firstIcons)
            setDisplayToNone(thirdIcons)

            setDisplayToFlex(secondIcons)
        }, 1000)

        setClassToShowIcons(secondIcons)
    }else if(radioId === 3){
        setUncheckedTo(firstRadio)
        setUncheckedTo(secondRadio)

        setClassToHideIcons(secondIcons)

        setTimeout(() => {
            setDisplayToNone(firstIcons)
            setDisplayToNone(secondIcons)

            setDisplayToFlex(thirdIcons)
        }, 1000)
        
        setClassToShowIcons(thirdIcons)
    }
}

function setUncheckedTo(element){
    element.checked = false
}

function setClassToHideIcons(element){
    element.className = styles.hiddenIcon
}

function setClassToShowIcons(element){
    element.className = styles.showIcon
}

function setDisplayToFlex(element){
    element.style.display = "flex"
}

function setDisplayToNone(element){
    element.style.display = "none"
}

export default BannerRadio