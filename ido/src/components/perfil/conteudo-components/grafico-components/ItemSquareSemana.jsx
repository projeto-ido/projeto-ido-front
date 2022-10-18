import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import apiDiaTarefa from '../../../../api/apiDiaTarefa'

function ItemSquareSemana(props) {
    const [listaDiaTarefa, setListaDiaTarefa] = useState([]);

    useEffect(() => {
        apiDiaTarefa.get().then(res => {
            setListaDiaTarefa(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }, [])
    
    function TaskObject(nome, vetorValores){
        this.name = nome;
        this.data = vetorValores[0];
    }

    const dias = [];
    const qtdConcluido = [];
    const qtdNaoConcluido = [];
    
    {
        dias.push(listaDiaTarefa.map(diaTarefaAtual => (
            diaTarefaAtual.data
        )))

        qtdConcluido.push(listaDiaTarefa.map(diaTarefaAtual => (
            diaTarefaAtual.qtdConcluido
        )))

        qtdNaoConcluido.push(listaDiaTarefa.map(diaTarefaAtual => (
            diaTarefaAtual.qtdNaoConcluido
        )))
    }

    var linhaConcluido = new TaskObject("Tarefas concluídas", qtdConcluido)
    var linhaNaoConcluido = new TaskObject("Tarefas não concluídas", qtdNaoConcluido)

    const series = [
        linhaConcluido,
        linhaNaoConcluido
    ]

    const options = {
        legend: {
            show: true
        },

        dataLabels: {
            enabled: false
        },

        stroke: {
            curve: 'smooth'
        },

        xaxis: {
            type: 'datetime',
            categories: dias[0],

            labels: {
                show: false
            }
        },

        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        },
    }

    return(
        <>
            <div className="item-square">
                <div className="grafico-semana">
                    <ApexChart
                        options={options}
                        series={series}
                        type='area'
                        width={'100%'}
                        height={'90%'}
                    />
                </div>
            </div>
        </>
    )
}

export default ItemSquareSemana;