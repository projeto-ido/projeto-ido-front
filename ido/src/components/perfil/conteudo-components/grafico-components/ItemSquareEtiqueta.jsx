import React from 'react';
import ChartEtiqueta from './ChartEtiquetas';
import ApexChart from 'react-apexcharts';

function ItemSquareEtiqueta() {
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
                    size: "70vw",
                    background: 'transparent',

                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "1vw",
                            fontFamily: "Roboto"
                        },
                        value: {
                            show: true,
                            fontSize: "1.5vw",
                            fontFamily: "Roboto"
                        },
                        total: {
                            show: true,
                            fontSize: "1.5vw",
                            fontFamily: "Roboto",
                            fontWeight: "bold"
                        }
                    }
                }
            }
        },

        stroke:{
            show: false,
            width:0
        },

        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Limon']
    }

    const quantidade = [44, 55, 41, 17, 15]

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