import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import apiService from '../../../../api/apiService';

function ItemRectangleTimeline() {
    const [listaTarefa, setListaTarefa] = useState([]);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/time-line/${idUsuario}`).then(res => {
            if (res.status === 200) {
                setListaTarefa(res.data);
            } else if (res.status === 204) {
                setListaTarefa([]);
            }
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

    if (listaTarefa.length !== 0) {
        listaTarefa.map(tarefaAtual => (
            vetorTarefas.push(
                new Tarefa(tarefaAtual.prioridade, tarefaAtual.dataInicio, tarefaAtual.dataFinal)
            )
        ))
    }

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