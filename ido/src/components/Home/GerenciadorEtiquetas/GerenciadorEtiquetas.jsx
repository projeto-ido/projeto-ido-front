import React, { useEffect, useState } from "react";
import style from "./GerenciadorEtiquetas.module.css";
import iconAdicionar from "../../../assets/images/icon-adicionar.png";
import ModalCriarEtiqueta from "./ModalCriarEtiqueta";
import GerenciamentoEtiqueta from "./GerenciamentoEtiqueta";
import apiMockGerenciadorEtiquetas from "../../../api/apiMockGerenciadorEtiqueta";

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

  useEffect(() => {
    apiMockGerenciadorEtiquetas
      .get("/etiquetas")
      .then((res) => {
      console.log(res.data)
      setListaEtiquetas(res.data);
      setEtiquetasAtualizadas(true)
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

  function deletar(id) {
    apiMockGerenciadorEtiquetas
      .delete(`/etiquetas/${id}`)
      .then((res) => {
        setListaEtiquetas(listaEtiquetas.filter((etiqueta) => etiqueta.id_etiqueta !== id));
        console.log("deleted status code:", res.status);
      })
      .catch((erro) => {
        console.log(erro);
      });
      setOpenModalEtiqueta(false)
  }

  function criarOuAtualizar(id){
    if(textoBotao === "Criar"){
      console.log("post")

      const data = {
        titulo: textoInput,
        cor: corEtiqueta,
        fk_usuario: 1
      }

      apiMockGerenciadorEtiquetas
        .post("/etiquetas", data)
        .then((res) => {
          console.log(res.status)
          setEtiquetasAtualizadas(false)
        })
        .catch((erro) => {
          console.log(erro)
        })

    } else if(textoBotao === "Salvar"){
      console.log("put")

      const data = {
        titulo: textoInput,
        cor: corEtiqueta,
        fk_usuario: 1
      }

      apiMockGerenciadorEtiquetas
        .put(`/etiquetas/${idEtiquetaSelecionada}`, data)
        .then((res) => {
          console.log(res.status)
          setEtiquetasAtualizadas(false)
        })
        .catch((erro) => {
          console.log(erro)
        })

    } else {
      console.log("erro na criacao / atualizacao")
    }
  }

  return (
    <>
      <div className={style.fundo_escuro}>
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
                key={etiqueta.id_etiqueta}
                id={etiqueta.id_etiqueta}
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
