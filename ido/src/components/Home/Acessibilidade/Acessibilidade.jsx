import React from 'react';
import style from './Acessibilidade.module.css';
import imgNormal from '../../../assets/images/normal.png';
import imgProtanopia from '../../../assets/images/protanopia.png';
import imgDeuteranopia from '../../../assets/images/deuteranopia.png';
import imgTritanopia from '../../../assets/images/tritanopia.png';

function Acessibilidade({setOpenHome, setOpenAcessibilidade, funcaoNotificar}) {

  function notificarEAlterarParaHome(){
    setOpenAcessibilidade(false)
    setOpenHome(true)
    funcaoNotificar()
  }

  function normal() {
    sessionStorage.setItem("name", "Normal");
    notificarEAlterarParaHome()
  }

  function protanopia() {
    sessionStorage.setItem("name", "Protanopia");
    notificarEAlterarParaHome()
  }

  function deuteranopia() {
    sessionStorage.setItem("name", "Deuteranopia");
    notificarEAlterarParaHome()
  }

  function tritanopia() {
    sessionStorage.setItem("name", "Tritanopia");
    notificarEAlterarParaHome()
  }

  return (
    <>
        <div className={style.fundo_escuro}>
            <div className={style.modal_central}>

              <div onClick={normal} className={style.div_normal}>
                <h2>NORMAL</h2>
                <img src={imgNormal} alt="" />
              </div>

              <div onClick={protanopia} className={style.div_protanopia}>
                <h2>PROTANOPIA</h2>
                <img src={imgProtanopia} alt="" />
              </div>

              <div onClick={deuteranopia} className={style.div_deuteranopia}>
                <h2>DEUTERANOPIA</h2>
                <img src={imgDeuteranopia} alt="" />
              </div>

              <div onClick={tritanopia} className={style.div_tritanopia}>
                <h2>TRITANOPIA</h2>
                <img src={imgTritanopia} alt="" />
              </div>

            </div>
        </div>
    </>
  );
}

export default Acessibilidade;