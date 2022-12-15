import ApexCharts from "react-apexcharts"
import './style.css'

const optionsCandlestick = {

  chart: {
    id: 'fb',
    //group: 'social',
    type: 'candlestick',
    

    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: true,
      zoomedArea: {
        fill: {
          color: '#90CAF9',
          opacity: 0.4
        },
        stroke: {
          color: '#0D47A1',
          opacity: 0.4,
          width: 1
        }
      },

    },
    background: 'none',
    foreColor: 'white',

  },

  title: {
    text: 'Candlestick',
    align: 'center',
    /* fontFamily: 'Open Sans', */
  },
  /*plotOption está sendo responsavel pela coloração dos candles*/
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#1B6C39",
        downward: "#c60000"
      }
    },
    
  },


  xaxis: {
    type: 'datetime',

  },
  /* xaxis serve para configurar as propriedades do eixo x do gráfico;
  type: 'datetime' significa que é por tempo */
  yaxis: {
    title: {
      text: 'Preço (R$/MWh)'
    },
    tooltip: {
      enabled: true,
    },

  },
  /*tooltip são as caixas que ficam flutuando quando passamos o mouse em cima*/

}




export default function Candlestick(props) {

  const seriesCandlestick = [{
    data: props.candle,
  
  }]

  return (
   
      <ApexCharts
        options={optionsCandlestick}
        series={seriesCandlestick}
        type="candlestick"
        width="100%"
        height="100%"
        
      />
    
    /*series é a propriedade por onde vamos passar as séries de dados, como arrays de objetos*/
    /*A propriedade type é o tipo de gráfico que é para ser renderizado, nesse caso estamos renderizando o tipo candlestick*/
    /*width e height vão definir largura e altura do gráfico*/

  )
}