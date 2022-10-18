import React from 'react';

function Header(props) {
    return(
        <>
            <div className="box-header">
                <div className="btn-box">
                    <div className="container">
                        <div>
                            <div className="text">
                                <span onClick={props.overviews}>Overview</span>
                            </div>
                            <div className="div-selection">{props.selectOv}</div>
                        </div>

                        <div>
                        <div className="text">
                            <span onClick={props.conquistas}>Conquistas</span>
                        </div>
                            <div className="div-selection">{props.selectCt}</div>
                        </div>

                        <div>
                        <div className="text">
                            <span onClick={props.graficos}>Gráficos</span>
                        </div>
                            <div className="div-selection">{props.selectGf}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;