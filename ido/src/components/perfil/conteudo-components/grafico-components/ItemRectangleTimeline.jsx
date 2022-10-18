import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import apiTimeline from '../../../../api/apiTimeline';

function ItemRectangleTimeline() {
    const [listaTarefa, setListaTarefa] = useState([]);

    useEffect(() => {
        apiTimeline.get().then(res => {
            setListaTarefa(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }, [])
    
    function Tarefa(prioridade, dataIni, dataFim) {
        this.x = prioridade;
        this.y = [
            new Date(dataIni).getTime(),
            new Date(dataFim).getTime()
        ];
        this.fillColor = '#5D84C2';
        this.fontSize = '1vw';
    }

    const vetorTarefas = []
    
    listaTarefa.map(tarefaAtual => (
        vetorTarefas.push(
            new Tarefa(tarefaAtual.prioridade, tarefaAtual.dataIni, tarefaAtual.dataFim)
        )
    ))

    const options = {
        series: [{
            data: vetorTarefas
        }],

        chart: {
            type: 'rangeBar'
        },

        plotOptions: {
            bar: {
                horizontal: true,
            }
        },

        xaxis: {
            type: 'datetime'
        }
    };

    return(
        <>
            <ApexChart 
                options={options}
                series={options.series}
                type={'rangeBar'}
                height={'85%'}
                width={'95%'}
            />
        </>
    )
}

export default ItemRectangleTimeline;