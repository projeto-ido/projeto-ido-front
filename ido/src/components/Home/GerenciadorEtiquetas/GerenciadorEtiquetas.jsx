import React, { useEffect, useState } from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconAdicionar from "../../../assets/images/icon-adicionar.png";
import ModalCriarEtiqueta from "./ModalCriarEtiqueta";
import GerenciamentoEtiqueta from "./GerenciamentoEtiqueta";
import apiGerenciadorEtiquetas from "../../../api/apiService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GerenciadorEtiquetas() {
  const [openModalEtiqueta, setOpenModalEtiqueta] = useState(false);
  const [textoInput, setTextoInput] = useState("");
  const [corEtiqueta, setCorEtiqueta] = useState("#51BDAB");
  const [textoBotao, setTextoBotao] = useState("Criar");
  const [verdeAgua, setVerdeAgua] = useState(true)
  const [azul, setAzul] = useState(false)
  const [roxo, setRoxo] = useState(false)
  const [amarelo, setAmarelo] = useState(false)
  const [listaEtiquetas, setListaEtiquetas] = useState([])
  const [idEtiquetaSelecionada, setIdEtiquetaSelecionada] = useState(0)
  const [etiquetasAtualizadas, setEtiquetasAtualizadas] = useState(true)
  const [clickDesabilitado, setClickDesabilitado] = useState(false);
  const textoBotaoCriar = "Criar";
  const textoBotaoSalvar = "Salvar";
  const idUsuario = sessionStorage.getItem("idLogado")

  useEffect(() => {
    apiGerenciadorEtiquetas
      .get(`/usuarios/${idUsuario}/etiquetas`)
      .then((res) => {
        if(res.status === 204){
          setListaEtiquetas([])
          setEtiquetasAtualizadas(true)
        } else if(res.status === 200) {
          console.log(res.data)
          setListaEtiquetas(res.data);
          setEtiquetasAtualizadas(true)
        }
    }).catch((erro) => {
      console.log(erro)
    })
  }, [etiquetasAtualizadas])

  function abrirModalParaCriarEtiqueta(){
    setOpenModalEtiqueta(true)
    setTextoInput("")
    setCorEtiqueta("#51BDAB")
    setTextoBotao("Criar")
  }

  function toastSucesso(texto){
    toast.success(texto, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastErro(texto){
    toast.error(texto, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function deletar(id) {
    if(clickDesabilitado){
      return;
    }

    setClickDesabilitado(true)
    apiGerenciadorEtiquetas
      .delete(`/usuarios/${idUsuario}/etiquetas/${id}`)
      .then((res) => {
        setListaEtiquetas(listaEtiquetas.filter((etiqueta) => etiqueta.idEtiqueta !== id));
        console.log("deleted status code:", res.status);
        toastSucesso(`Etiqueta deletada`)
        setClickDesabilitado(false)
      })
      .catch((erro) => {
        console.log(erro);
        toastErro(`Falha na exclusão de etiqueta`)
      });
      setOpenModalEtiqueta(false)
  }

  function criarOuAtualizar(id){
    if(textoBotao === textoBotaoCriar){
      console.log("post")

      const data = {
        titulo: textoInput,
        cor: corEtiqueta
      }

      apiGerenciadorEtiquetas
        .post(`/usuarios/${idUsuario}/etiquetas`, data)
        .then((res) => {
          console.log(res.status)
          setEtiquetasAtualizadas(false)
          toastSucesso(`Etiqueta criada`)
        })
        .catch((erro) => {
          console.log(erro)
          toastErro(`Falha na criação de etiqueta`)
        })

    } else if(textoBotao === textoBotaoSalvar){
      console.log("put")

      const data = {
        titulo: textoInput,
        cor: corEtiqueta
      }

      if(clickDesabilitado){
        return;
      }
  
      setClickDesabilitado(true)

      apiGerenciadorEtiquetas
        .put(`/usuarios/${idUsuario}/etiquetas/${idEtiquetaSelecionada}`, data)
        .then((res) => {
          console.log(res.status)
          setEtiquetasAtualizadas(false)
          toastSucesso(`Etiqueta atualizada`)
          setClickDesabilitado(false)
          setOpenModalEtiqueta(false)
        })
        .catch((erro) => {
          console.log(erro)
          toastErro(`Falha na atualização de etiqueta`)
        })

    } else {
      console.log("erro na criacao / atualizacao")
      toastErro(`Erro em atualizar / criar`)
    }
  }

  return (
    <>
      <div className={style.fundo_escuro}>
        <ToastContainer />
        <ModalCriarEtiqueta
          openModalEtiqueta={openModalEtiqueta}
          setOpenModalEtiqueta={setOpenModalEtiqueta}
          textoInput={textoInput}
          setTextoInput={setTextoInput}
          corEtiqueta={corEtiqueta}
          setCorEtiqueta={setCorEtiqueta}
          textoBotao={textoBotao}
          verdeAgua={verdeAgua}
          setVerdeAgua={setVerdeAgua}
          azul={azul}
          setAzul={setAzul}
          roxo={roxo}
          setRoxo={setRoxo}
          amarelo={amarelo}
          setAmarelo={setAmarelo}
          idEtiquetaSelecionada={idEtiquetaSelecionada}
          funcaoCriarAtualizar={criarOuAtualizar}
        />

        <div className={style.modal_lateral}>
          <div className={style.container_texto_destaque}>
            <span className={style.texto_destaque}>
              GERENCIADOR DE ETIQUETAS
            </span>
          </div>

          <div className={style.container_acoes}>
            <h2>Lista de etiquetas</h2>
            <div className={style.container_acoes_icons}>
              <img src={iconAdicionar} className={style.acoes} alt="icone adicionar" onClick={() => abrirModalParaCriarEtiqueta() }/>
            </div>
          </div>

          <div className={style.listagem_etiquetas}>
          {
            listaEtiquetas.map((etiqueta) => (   
              <GerenciamentoEtiqueta 
                key={etiqueta.idEtiqueta}
                id={etiqueta.idEtiqueta}
                titulo={etiqueta.titulo}
                cor={etiqueta.cor}
                setOpenModalEtiqueta={setOpenModalEtiqueta}
                setTextoInput={setTextoInput}
                setCorEtiqueta={setCorEtiqueta}
                setTextoBotao={setTextoBotao} 
                funcaoDeletar={deletar}
                setIdEtiquetaSelecionada={setIdEtiquetaSelecionada}
                />
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default GerenciadorEtiquetas;
