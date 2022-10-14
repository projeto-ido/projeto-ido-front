import React from 'react';
import ApexChart from 'react-apexcharts';

function ItemSquareEtiqueta(props) {
    const options = {
        dataLabels: {
            enabled: false
        },

        legend: {
            show: false
        },

        plotOptions: {
            pie: {
                expandOnClick: false,
                
                donut: {
                    size: '70vw',
                    background: 'transparent',

                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '1vw',
                            fontFamily: 'Roboto, Helvetica, Arial'
                        },
                        value: {
                            show: true,
                            fontSize: '1.5vw',
                            fontFamily: 'Roboto, Helvetica, Arial'
                        },
                        total: {
                            show: true,
                            fontSize: '1.5vw',
                            fontFamily: 'Roboto, Helvetica, Arial',
                            fontWeight: 'bold'
                        }
                    }
                }
            }
        },

        stroke:{
            show: false,
            width:0
        },

        labels: props.etiquetas
    }

    const quantidade = props.quantidade

    return(
        <>
            <div className="item-square">
                <div className="grafico-etiqueta">
                    <ApexChart
                        options={options}
                        series={quantidade}
                        type='donut'
                        width={'100%'}
                    />
                </div>
            </div>
        </>
    )
}

export default ItemSquareEtiqueta;