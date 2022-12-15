import ApexCharts from "react-apexcharts"

const optionsBar = {

  chart: {
    id: 'tw',
    //group: 'social',
    type: 'bar',
    
      
      
      zoom: {
          
          enabled: false,
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
          }
      },
      background: 'none',
      foreColor: 'white',
  },
  title: {
    text: 'Volume',
    align: 'center',
    
  },
  xaxis: {
      tickPlacement: 'on',
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  /* xaxis serve para configurar as propriedades do eixo x do gráfico;
  type: 'datetime' significa que é por tempo */

  yaxis: {
    title: {
      text: 'MWm'
    },
      tooltip: {
        enabled: false,
      },

    },
    
  
 /*plotOptions está dando formato redondo as colunas*/
  plotOptions: {bar: { borderRadius: 3,dataLabels: {position: 'top'}}},
  /*dataLabels está servindo para dar estilo e posição ao valor de volume*/
  dataLabels: {enabled: false,formatter: function (val) {return val + "";},offsetY: -20,style: {fontSize: '12px',colors: ["#304758"]}},
}



export default function Volume (props) {

  const seriesBar = [{
    name: "Volume",
    data: props.vol,
  },]
    
    return (
        
            <ApexCharts
            options={optionsBar}
            series={seriesBar}
            type="bar"
            width="100%"
            height="100%"
            />
        
        /*series é a propriedade por onde vamos passar as séries de dados, como arrays de objetos*/
        /*A propriedade type é o tipo de gráfico que é para ser renderizado, nesse caso estamos renderizando o tipo candlestick*/
        /*width e height vão definir largura e altura do gráfico*/
        
        )
}