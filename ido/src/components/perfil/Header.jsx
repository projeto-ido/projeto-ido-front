import React from 'react';

function Header() {
    return(
        <>
            <div class="header">
                <div class="btn-box">
                    <div>
                        <div class="text">
                            <span>Overview</span>
                        </div>
                        <div class="div-selection">
                            <div class="selection"></div>
                        </div>
                    </div>

                    <div>
                    <div class="text">
                            <span>Conquistas</span>
                        </div>
                        <div class="div-selection"></div>
                    </div>

                    <div>
                    <div class="text">
                            <span>Gráficos</span>
                        </div>
                        <div class="div-selection"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;