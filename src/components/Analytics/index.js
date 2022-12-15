import { useEffect, useState } from "react";
import axios from "axios";
import Candlestick from "../Graficos/Candle";
import Volume from "../Graficos/Volume";
import { FaFilter } from 'react-icons/fa';
import './style.css'

function Analytics() {

  const [dados, setDados] = useState([])
  const [submercado, setSubmercado] = useState('')
  const [fonte, setFonte] = useState('')
  const [unidade, setUnidade] = useState('')
  const [agrupador, setAgrupador] = useState('')
  const [ano, setAno] = useState([])
  const [descricao, setDescricao] = useState('')
  const [openProfile, setOpenProfile] = useState(false)
  //const [open, setOpen] = useState(false)

  /* const [agrupado, setAgrupado] = useState('SE\/CO') */

  const [candle, setCandle] = useState([])

  /* const [submercado, setSubmercado] = useState("SE/CO")
  const [fonte, setFonte] = useState("Convencional")
  const [unidade, setUnidade] = useState("Preço Fixo")
  const [agrupador, setAgrupador] = useState("MENSAL")
  const [ano, setAno] = useState(2023)
  const [descricao, setDescricao] = useState("SE CON MEN SET\/21 - Preço Fixo") */


  useEffect(() => {

    axios.get("http://localhost:5500/")
      .then((velas) => {

        //console.log(velas.data)
        setCandle(velas.data.produtos.filter((filtro) => {
          return filtro.UnidadeValor === unidade && filtro.agrupador === agrupador && filtro.AnoProduto == ano && filtro.Fonte === fonte && filtro.Submercado === submercado && filtro.descricao === descricao
          // return filtro.descricao === "SE CON MEN SET\/21 - Preço Fixo"
          // o to.Fixed(2) fará com que só aceite até 2 números após a vírgula
        }).map((test) => {
          return {
            x: new Date(test.dataDia),
            y: [test.Abertura.toFixed(2), test.Maximo.toFixed(2), test.Minimo.toFixed(2), test.Fechamento.toFixed(2)],
          }

        }))

      })
      .catch((error) => {
        console.log(error)
      })

  }, [unidade, agrupador, ano, fonte, submercado, descricao])
  /* ------------------------------------------------------------------------------------------------------------------*/

  const [vol, setVol] = useState([])

  useEffect(() => {

    axios.get("http://localhost:5500/")
      .then((response) => {
        //console.log(response.data)
        setVol(response.data.produtos.filter((filtro) => {
          return filtro.UnidadeValor === unidade && filtro.agrupador === agrupador && filtro.AnoProduto == ano && filtro.Fonte === fonte && filtro.Submercado === submercado && filtro.descricao === descricao
          // return filtro.descricao === "SE CON MEN SET\/21 - Preço Fixo"
          // o to.Fixed(2) fará com que só aceite até 2 números após a vírgula
          // fillColor ta definindo as cores das colunas do gráfico
        }).map((test) => {
          return {
            name: "Volume",
            x: new Date(test.dataDia),
            y: [test.VolumeMedio.toFixed(2)],
            fillColor: "#5BE584"
          }
        }))
      })
      .catch((error) => {
        console.log(error)
      })

  }, [unidade, agrupador, ano, fonte, submercado, descricao])

  useEffect(() => {
    axios
      .get("http://localhost:5500")
      .then((response) => {
        console.log(response.data)
        setDados(response.data.produtos)
      });
  }, []);


  return (

    <>

      <div className="graficos" style={{
        width: "100%", 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212B36",
        borderRadius: "10px"
        /* justifyContent: "space-around"  */
        }}>
         <div className="campo-filter">
          <div className="filter" onClick={() => setOpenProfile((prev) => !prev)}><FaFilter className="icone-filter" />
          </div> 
        </div> 
        <div className="cand" style={{backgroundColor: "none",width: "100%", 
        height: "100%", }}>
          <Candlestick candle={candle} />
        </div>
        <div className="vol" style={{backgroundColor: "none",width: "100%", 
        height: "100%",}}>
          <Volume vol={vol} />
        </div>
        {
        openProfile &&
        <div className="selects">
          <select name="dado" id="dado" onChange={e => setSubmercado(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.map((produtos) => produtos.Submercado))).map((produtos) => (
              <option>{produtos}</option>
            ))}
          </select>
          <select name="dado" id="dado" onChange={e => setFonte(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.filter(produtos =>
              produtos.Submercado === submercado).map((produtos) => produtos.Fonte))).map((produtos) => (
                <option>{produtos}</option>
              ))}
          </select>
          <select name="dado" id="dado" onChange={e => setUnidade(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.filter(produtos =>
              produtos.Submercado === submercado
              && produtos.Fonte === fonte)
              .map((produtos) => produtos.UnidadeValor))).map((produtos) => (
                <option>{produtos}</option>
              ))}
          </select>
          <select name="dado" id="dado" onChange={e => setAgrupador(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.filter(produtos =>
              produtos.Submercado === submercado
              && produtos.Fonte === fonte
              && produtos.UnidadeValor === unidade)
              .map((produtos) => produtos.agrupador))).map((produtos) => (
                <option>{produtos}</option>
              ))}
          </select>
          <select name="dado" id="dado" onChange={e => setAno(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.filter(produtos =>
              produtos.Submercado === submercado
              && produtos.Fonte === fonte
              && produtos.UnidadeValor === unidade
              && produtos.agrupador === agrupador)
              .map((produtos) => produtos.AnoProduto))).map((produtos) => (
                <option>{produtos}</option>
              ))}
          </select>
          <select name="dado" id="dado" onChange={e => setDescricao(e.target.value)}>
            <option value="0">Selecione</option>
            {Array.from(new Set(dados.filter(produtos =>
              produtos.Submercado === submercado
              && produtos.Fonte === fonte
              && produtos.UnidadeValor === unidade
              && produtos.agrupador === agrupador
              && produtos.AnoProduto == ano
            )
              .map((produtos) => produtos.descricao))).map((produtos) => (
                <option>{produtos}</option>
              ))}
          </select>
        </div>
      }
      </div>

  
    </>

  );
}

export default Analytics



