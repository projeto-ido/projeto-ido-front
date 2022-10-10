import React from 'react';
import ApexChart from 'react-apexcharts';

function ChartEtiqueta(props) {
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
                            fontFamily: 'Roboto, Helvetica, Arial'
                        },
                        value: {
                            show: true,
                            fontSize: "1.5vw",
                            fontFamily: 'Roboto, Helvetica, Arial'
                        },
                        total: {
                            show: true,
                            fontSize: "1.5vw",
                            fontFamily: 'Roboto, Helvetica, Arial',
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
            <ApexChart
                options={options}
                series={quantidade}
                type='donut'
                width={'100%'}
            />
    )
}

export default ChartEtiqueta;