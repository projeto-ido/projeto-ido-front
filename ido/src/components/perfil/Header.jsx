import React from 'react';

function Header() {
    // function Selecionar() {
        <div className="selection"></div>
    // } 
        
    return(
        <>
            <div className="box-header">
                <div className="btn-box">
                    <div className="container">
                        <div>
                            <div className="text">
                                <span>Overview</span>
                            </div>
                            <div className="div-selection"></div>
                        </div>

                        <div>
                        <div className="text">
                            <span>Conquistas</span>
                        </div>
                            <div className="div-selection"></div>
                        </div>

                        <div>
                        <div className="text">
                            <span>Gráficos</span>
                        </div>
                            <div className="div-selection"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;