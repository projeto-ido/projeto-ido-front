import React from "react";
import { useState } from "react";

// export const exemplo = () => {

//     //Aqui vc coloca os useState

//     //Aqui vc coloca as funções sem export


//     return (
//         // Aqui vc vai colocar tudo que vc vai retornar
//         isFazerAgoraAberto,
//         //função()
//     )
// }

// <button onClick={funcao} styles={{variavel}}

// const { isfazerAgoraAberto, funcao()} = exemplo()

export function Vars(props) {

const [isFazerAgoraAberto, setIsFazerAgoraAberto] = useState(false);
const [isAgendarAberto, setIsAgendarAberto] = useState(false);
const [isDelegarAberto, setIsDelegarAberto] = useState(false);
const [isNaoPriorizarAberto, setIsNaoPriorizarAberto] = useState(false);
const [isCriarTarefa, setIsCriarTarefa] = useState(false);
const [isMatriz, setIsMatriz] = useState(true);
const [isAgrupar, setIsAgrupar] = useState(false);
const [isVerCalendario, setIsVerCalendario] = useState(false);
const [isListar, setIsListar] = useState(false);
const [adicionarSubtarefa, setAdicionarSubtarefa] = useState(0);

console.log('testeeee')


function agrupar() {
    setIsAgrupar(false);
    setIsCriarTarefa(false);
    setIsListar(false);
    setIsVerCalendario(false);
    setIsMatriz(false);

    if (isCriarTarefa == false) {
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'block';

        modificarNaoClicados();

        document.getElementById("grupo").style.backgroundColor = '#D9D9D9';
        document.getElementById("grupo").style.color = '#5D84C2';
        document.getElementById("grupo").style.fontWeight = 'bolder';

        document.getElementById("grupoFazerAgora").style.display = 'block';
        document.getElementById("iconAbertoFazerAgora").style.display = 'block';
        document.getElementById("iconFechadoFazerAgora").style.display = 'none';

    } else {
        sairCriacaoTarefas();
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'block';
        document.getElementById("grupo").style.backgroundColor = '#D9D9D9';
        document.getElementById("grupo").style.color = '#5D84C2';
        document.getElementById("grupo").style.fontWeight = 'bolder';
        document.getElementById("grupoFazerAgora").style.display = 'block';
        document.getElementById("iconAbertoFazerAgora").style.display = 'block';
        document.getElementById("iconFechadoFazerAgora").style.display = 'none';
    }
}

function listar() {
    setIsMatriz(false);
    setIsAgrupar(false);
    setIsCriarTarefa(false);
    setIsListar(true);
    setIsVerCalendario(false);

    if (isCriarTarefa == false) {
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'block';

        modificarNaoClicados();

        document.getElementById("lista").style.backgroundColor = '#D9D9D9';
        document.getElementById("lista").style.color = '#5D84C2';
        document.getElementById("lista").style.fontWeight = 'bolder';
    } else {
        sairCriacaoTarefas();
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'block';
        document.getElementById("lista").style.backgroundColor = '#D9D9D9';
        document.getElementById("lista").style.color = '#5D84C2';
        document.getElementById("lista").style.fontWeight = 'bolder';
    }
}

function verCalendario() {
    setIsMatriz(false);
    setIsAgrupar(false);
    setIsCriarTarefa(false);
    setIsListar(false);
    setIsVerCalendario(true);
    if (isCriarTarefa == false) {
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'block';

        modificarNaoClicados();

        document.getElementById("calendario").style.backgroundColor = '#D9D9D9';
        document.getElementById("calendario").style.color = '#5D84C2';
        document.getElementById("calendario").style.fontWeight = 'bolder';

    } else {
        sairCriacaoTarefas();
        document.getElementById("tarefas-geral-matriz").style.display = 'none';
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'block';
        document.getElementById("calendario").style.backgroundColor = '#D9D9D9';
        document.getElementById("calendario").style.color = '#5D84C2';
        document.getElementById("calendario").style.fontWeight = 'bolder';
    }
}

function verMatriz() {
    setIsAgrupar(false);
    setIsCriarTarefa(false);
    setIsListar(false);
    setIsVerCalendario(false);
    setIsMatriz(true);

    if (isCriarTarefa == false) {
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'none';
        document.getElementById("tarefas-geral-matriz").style.display = 'block';

        modificarNaoClicados();

        document.getElementById("matriz").style.backgroundColor = '#D9D9D9';
        document.getElementById("matriz").style.color = '#5D84C2';
        document.getElementById("matriz").style.fontWeight = 'bolder';

    } else {
        sairCriacaoTarefas();
        document.getElementById("tarefas-geral-lista").style.display = 'none';
        document.getElementById("tarefas-geral-grupo").style.display = 'none';
        document.getElementById("tarefas-geral-matriz").style.display = 'block';
        document.getElementById("matriz").style.backgroundColor = '#D9D9D9';
        document.getElementById("matriz").style.color = '#5D84C2';
        document.getElementById("matriz").style.fontWeight = 'bolder';
    }
}

function modificarNaoClicados() {

    /*
    document.getElementById("calendario").style.color = '#7E7D7D';
    document.getElementById("calendario").style.fontWeight = 'lighter';
    document.getElementById("calendario").style.backgroundColor = '#E7E7E7';
    */
    document.getElementById("opcoesVisualizacao").style.border = ".2vh solid #AFAFAF";
    document.getElementById("iconLupa").style.opacity = "1";
    document.getElementById("iconFiltro").style.opacity = "1";
    document.getElementById("grupo").style.borderRight = '.2vh solid #AFAFAF';
    document.getElementById("matriz").style.borderRight = '.2vh solid #AFAFAF';

    document.getElementById("grupo").style.color = '#7E7D7D';
    document.getElementById("grupo").style.fontWeight = 'lighter';
    document.getElementById("grupo").style.backgroundColor = '#E7E7E7';

    document.getElementById("lista").style.color = '#7E7D7D';
    document.getElementById("lista").style.fontWeight = 'lighter';
    document.getElementById("lista").style.backgroundColor = '#E7E7E7';

    document.getElementById("matriz").style.color = '#7E7D7D';
    document.getElementById("matriz").style.fontWeight = 'lighter';
    document.getElementById("matriz").style.backgroundColor = '#E7E7E7';



}

function booleanFazerAgora() {

    if (isFazerAgoraAberto) {
        setIsFazerAgoraAberto(false);

        document.getElementById("grupoFazerAgora").style.display = 'none';
        document.getElementById("iconAbertoFazerAgora").style.display = 'none';
        document.getElementById("iconFechadoFazerAgora").style.display = 'block';
    } else {
        setIsFazerAgoraAberto(true);
        document.getElementById("grupoFazerAgora").style.display = 'block';
        document.getElementById("iconAbertoFazerAgora").style.display = 'block';
        document.getElementById("iconFechadoFazerAgora").style.display = 'none';
    }
}

function booleanAgendar() {
    if (isAgendarAberto) {
        setIsAgendarAberto(false);
        document.getElementById("grupoAgendar").style.display = 'none';
        document.getElementById("iconAbertoAgendar").style.display = 'none';
        document.getElementById("iconFechadoAgendar").style.display = 'block';
    } else {
        setIsAgendarAberto(true);
        document.getElementById("grupoAgendar").style.display = 'block';
        document.getElementById("iconAbertoAgendar").style.display = 'block';
        document.getElementById("iconFechadoAgendar").style.display = 'none';
    }
}

function booleanDelegar() {
    if (isDelegarAberto) {
        setIsDelegarAberto(false);
        document.getElementById("grupoDelegar").style.display = 'none';
        document.getElementById("iconAbertoDelegar").style.display = 'none';
        document.getElementById("iconFechadoDelegar").style.display = 'block';
    } else {
        setIsDelegarAberto(true);
        document.getElementById("grupoDelegar").style.display = 'block';
        document.getElementById("iconAbertoDelegar").style.display = 'block';
        document.getElementById("iconFechadoDelegar").style.display = 'none';
    }
}

function booleanNaoPriorizar() {
    if (isNaoPriorizarAberto) {
        setIsNaoPriorizarAberto(false);
        document.getElementById("grupoNaoPriorizar").style.display = 'none';
        document.getElementById("iconAbertoNaoPriorizar").style.display = 'none';
        document.getElementById("iconFechadoNaoPriorizar").style.display = 'block';
    } else {
        setIsNaoPriorizarAberto(true);
        document.getElementById("grupoNaoPriorizar").style.display = 'block';
        document.getElementById("iconAbertoNaoPriorizar").style.display = 'block';
        document.getElementById("iconFechadoNaoPriorizar").style.display = 'none';
    }
}

function criarTarefa() {

    if (isCriarTarefa) {
        sairCriacaoTarefas();
    } else {
        document.getElementById("fundoEscuro").style.display = "block";
        document.getElementById("modalCriarTarefa").style.visibility = "visible";
        document.getElementById("modalCriarTarefa").style.opacity = "1";
        document.getElementById("iconFiltro").style.opacity = "0.1";

        document.getElementById("iconLupa").style.opacity = "0";

        document.getElementById("opcoesVisualizacao").style.backgroundColor = "rgb(0, 0, 0, 0.05)";
        document.getElementById("opcoesVisualizacao").style.border = ".3vh solid #1f1e1e";
        document.getElementById("grupo").style.color = '#151414';
        document.getElementById("grupo").style.backgroundColor = 'rgb(0, 0, 0, 0.05)';

        document.getElementById("lista").style.color = '#151414';
        document.getElementById("lista").style.backgroundColor = 'rgb(0, 0, 0, 0.05)';

        document.getElementById("matriz").style.color = '#151414';
        document.getElementById("matriz").style.backgroundColor = 'rgb(0, 0, 0, 0.05)';
        document.getElementById("matriz").style.borderRight = '.3vh solid #1f1e1e';

        document.getElementById("grupo").style.borderRight = '.3vh solid #1f1e1e';

        document.getElementById("botaoAdicionarTarefa").style.backgroundColor = 'rgb(0, 0, 0, 0.15)';
        document.getElementById("iconSoma").style.display = "none";
        document.getElementById("textoCriacaoAtividade").style.color = '#151414';

        document.getElementById("selectFiltros").style.display = "none";

        setIsCriarTarefa(true);

    }

}

function sairCriacaoTarefas() {

    document.getElementById("fundoEscuro").style.display = "none";
    document.getElementById("modalCriarTarefa").style.visibility = "hidden";
    document.getElementById("modalCriarTarefa").style.opacity = "0";

    document.getElementById("botaoAdicionarTarefa").style.backgroundColor = '#FFCA6D';
    document.getElementById("iconSoma").style.display = "block";

    document.getElementById("selectFiltros").style.display = "block";

    modificarNaoClicados();

    if (isCriarTarefa) {
        if (isMatriz) {
            verMatriz();
        } else if (isAgrupar) {
            agrupar();
        } else if (isListar) {
            listar();
        } else {
            verCalendario();
        }
    }

    setIsCriarTarefa(false);

}

 function containerOptionFiltro() {
    sairCriacaoTarefas();
}

function botaCriarSubtarefa() {

    if (document.getElementById('primeiraSubtarefa').value == "") {
        alert("É preciso incluir uma subtarefa para adicionar outras.")
    } else if (adicionarSubtarefa == 3) {
        alert("Você atingiu o limite de subtarefas, se necessário crie novas tarefas.")
    } else {
        if (adicionarSubtarefa == 0) {
            document.getElementById("containerSubtarefa2").style.display = "flex";
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa + 1);
        } else if (adicionarSubtarefa == 1) {
            if ((document.getElementById('input-subtarefa2').value == "" && document.getElementById("containerSubtarefa2").style.display == "flex")
                || (document.getElementById('input-subtarefa3').value == "" && document.getElementById("containerSubtarefa3").style.display == "flex")
                || (document.getElementById('input-subtarefa4').value == "" && document.getElementById("containerSubtarefa4").style.display == "flex")) {
                alert("É preciso incluir mais uma subtarefa para adicionar outras.")
            } else {
                document.getElementById("modalCriarTarefa").style.height = "82vh";
                document.getElementById("footerModal").style.height = "18vh";

                if (document.getElementById('input-subtarefa2').value == "" && (document.getElementById("containerSubtarefa2").style.display == "" || document.getElementById("containerSubtarefa2").style.display == "none")) {
                    document.getElementById("containerSubtarefa2").style.display = "flex";
                } else if (document.getElementById('input-subtarefa3').value == "" && (document.getElementById("containerSubtarefa3").style.display == "" || document.getElementById("containerSubtarefa3").style.display == "none")) {
                    document.getElementById("containerSubtarefa3").style.display = "flex";
                } else if (document.getElementById('input-subtarefa4').value == "" && (document.getElementById("containerSubtarefa4").style.display == "") || document.getElementById("containerSubtarefa4").style.display == "none") {
                    document.getElementById("containerSubtarefa4").style.display = "flex";
                }

                setAdicionarSubtarefa(adicionarSubtarefa + 1);
            }

        } else if (adicionarSubtarefa == 2) {
            if ((document.getElementById('input-subtarefa2').value == "" && document.getElementById("containerSubtarefa2").style.display == "flex")
                || (document.getElementById('input-subtarefa3').value == "" && document.getElementById("containerSubtarefa3").style.display == "flex")
                || (document.getElementById('input-subtarefa4').value == "" && document.getElementById("containerSubtarefa4").style.display == "flex")) {
                alert("É preciso incluir mais uma subtarefa para adicionar outras.")
            } else {
                document.getElementById("modalCriarTarefa").style.height = "88vh";
                document.getElementById("footerModal").style.height = "24vh";

                if (document.getElementById('input-subtarefa2').value == "" && (document.getElementById("containerSubtarefa2").style.display == "" || document.getElementById("containerSubtarefa2").style.display == "none")) {
                    document.getElementById("containerSubtarefa2").style.display = "flex";
                } else if (document.getElementById('input-subtarefa3').value == "" && (document.getElementById("containerSubtarefa3").style.display == "" || document.getElementById("containerSubtarefa3").style.display == "none")) {
                    document.getElementById("containerSubtarefa3").style.display = "flex";
                } else if (document.getElementById('input-subtarefa4').value == "" && (document.getElementById("containerSubtarefa4").style.display == "") || document.getElementById("containerSubtarefa4").style.display == "none") {
                    document.getElementById("containerSubtarefa4").style.display = "flex";
                }
                setAdicionarSubtarefa(adicionarSubtarefa + 1);
            }
        }
    }


}

function apagarsubtarefa2() {
    if (document.getElementById('input-subtarefa3').value == "" && document.getElementById('containerSubtarefa2').style.display == "flex") {
        document.getElementById("containerSubtarefa3").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }

    if (document.getElementById('input-subtarefa4').value == "" && document.getElementById('containerSubtarefa4').style.display == "flex") {
        document.getElementById("containerSubtarefa4").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }

    document.getElementById('input-subtarefa2').value = "";
    document.getElementById("containerSubtarefa2").style.display = "none";

    if (adicionarSubtarefa == 1) {
        document.getElementById("modalCriarTarefa").style.height = "70vh";
        document.getElementById("footerModal").style.height = "7vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 2) {
        document.getElementById("modalCriarTarefa").style.height = "76vh";
        document.getElementById("footerModal").style.height = "12.5vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 3) {
        document.getElementById("modalCriarTarefa").style.height = "82vh";
        document.getElementById("footerModal").style.height = "18vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    }
}

function apagarsubtarefa3() {
    if (document.getElementById('input-subtarefa2').value == "" && document.getElementById('containerSubtarefa2').style.display == "flex") {
        document.getElementById("containerSubtarefa2").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }
    if (document.getElementById('input-subtarefa4').value == "" && document.getElementById('containerSubtarefa4').style.display == "flex") {
        document.getElementById("containerSubtarefa4").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }

    document.getElementById('input-subtarefa3').value = "";
    document.getElementById("containerSubtarefa3").style.display = "none";

    if (adicionarSubtarefa == 1) {
        document.getElementById("modalCriarTarefa").style.height = "70vh";
        document.getElementById("footerModal").style.height = "7vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 2) {
        document.getElementById("modalCriarTarefa").style.height = "76vh";
        document.getElementById("footerModal").style.height = "12.5vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 3) {
        document.getElementById("modalCriarTarefa").style.height = "82vh";
        document.getElementById("footerModal").style.height = "18vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    }
}

 function apagarsubtarefa4() {
    if (document.getElementById('input-subtarefa2').value == "" && document.getElementById('containerSubtarefa2').style.display == "flex") {
        document.getElementById("containerSubtarefa2").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }
    if (document.getElementById('input-subtarefa3').value == "" && document.getElementById('containerSubtarefa3').style.display == "flex") {
        document.getElementById("containerSubtarefa3").style.display = "none";
        if (adicionarSubtarefa == 1) {
            document.getElementById("modalCriarTarefa").style.height = "70vh";
            document.getElementById("footerModal").style.height = "7vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 2) {
            document.getElementById("modalCriarTarefa").style.height = "76vh";
            document.getElementById("footerModal").style.height = "12.5vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        } else if (adicionarSubtarefa == 3) {
            document.getElementById("modalCriarTarefa").style.height = "82vh";
            document.getElementById("footerModal").style.height = "18vh";
            setAdicionarSubtarefa(adicionarSubtarefa - 1);
        }
    }

    document.getElementById('input-subtarefa4').value = "";
    document.getElementById("containerSubtarefa4").style.display = "none";

    if (adicionarSubtarefa == 1) {
        document.getElementById("modalCriarTarefa").style.height = "70vh";
        document.getElementById("footerModal").style.height = "7vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 2) {
        document.getElementById("modalCriarTarefa").style.height = "76vh";
        document.getElementById("footerModal").style.height = "12.5vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    } else if (adicionarSubtarefa == 3) {
        document.getElementById("modalCriarTarefa").style.height = "82vh";
        document.getElementById("footerModal").style.height = "18vh";
        setAdicionarSubtarefa(adicionarSubtarefa - 1);
    }
}

function atualizarPrioridade() {
    var select = document.getElementById('selectImportancia');
    var importancia = Number(select.value);

    var select = document.getElementById("selectUrgencia");
    var urgencia = Number(select.value);
    var prioridade = importancia + urgencia;

    if (importancia + urgencia >= 0) {

        if (prioridade == 0) {
            //textoPrioridade.innerHTML = "Não Priorizar";
        } else if (prioridade == 1 && importancia == 1) {
            //textoPrioridade.innerHTML = "Delegar";
        } else if (prioridade == 1 && urgencia == 1) {
            //textoPrioridade.innerHTML = "Agendar";
        } else if (prioridade == 2) {
            //textoPrioridade.innerHTML = "Faça agora";
        }

    }




}

}

export default Vars;




