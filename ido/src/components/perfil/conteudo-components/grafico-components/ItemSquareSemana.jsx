import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import apiDiaTarefa from '../../../../api/apiDiaTarefa'
import styles from "../../Perfil.module.css";
import apiService from '../../../../api/apiService';

function ItemSquareSemana(props) {
    const [listaDiaTarefa, setListaDiaTarefa] = useState([]);

    useEffect(() => {
        var idUsuario = sessionStorage.getItem("id");
        apiService.get(`/usuarios/perfil/semanal/${idUsuario}`).then(res => {
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
    
    dias.push(listaDiaTarefa.map(diaTarefaAtual => (
        diaTarefaAtual.diaSemana
    )))

    qtdConcluido.push(listaDiaTarefa.map(diaTarefaAtual => (
        diaTarefaAtual.qtdTarefasConcluidas
    )))

    var linhaConcluido = new TaskObject("Tarefas concluídas", qtdConcluido)

    const series = [
        linhaConcluido,
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
            <div className={styles.item_square}>
                <div className={styles.grafico_etiqueta}>
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