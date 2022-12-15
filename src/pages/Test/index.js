import React, { useRef } from "react";
import ApexCharts from "react-apexcharts"
import './style.css'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import RGL, { WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(RGL);

const Chart = require("react-apexcharts").default;



const MyResponsiveGrid = (props) => {

    
  var charts = [
    {
    /* chamar elemento candlestick_Paulo */
    /* chamar elemento candlestick_Paulo */
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          id: "HjQdWzhPA57h5KZqm"
        },
        grid: {
            padding: {
                left: 30, // or whatever value that works
                right: 30,
               bottom: 60  // or whatever value that works
              }
          },
      },
      type: "bar",
      series: [
        {
          data: [
            {
              x: "Homme",
              y: 10
            },
            {
              x: "Femme",
              y: 4
            },
            {
              x: "Autre",
              y: 0
            }
          ]
        }
      ],
      height: "100%",
      
    },
    

    {
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          id: "XkTqjBvho48RLQaQG",
          
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
      },
      type: 'candlestick',
      series: [
        {
          data: [
            {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                  y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                  y: [6630.71, 6648.95, 6623.34, 6635.65]
            }
          ]
        }
      ],
      height: "100%",
      
    }
  ];

  
const layout = [
    { i: "1", x: 1, y: 0, w: 4, h: 5, minW: 1, maxW: 20, minH: 1, maxH: 16,},
    { i: "2", x: 1, y: 0, w: 4, h: 5, minW: 1, maxW: 20, minH: 1, maxH: 16,},
]

  return (
    <ResponsiveReactGridLayout 
    innerRef={props.innerRef} 
    className="layout"
    layout={layout}
    cols={10}
    rowHeight={40}
    width={1230}>
      <div key="1" className="test">
            <h1>Filtro</h1>
            <ApexCharts {...charts[0]} />
      </div>
      <div key="2">
        <Chart  {...charts[1]}/>
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default function Test() {
  const ref = useRef();

  return (
    <div className="campo">
        <div  ref={ref}>
          <MyResponsiveGrid innerRef={ref} />
        </div>
    </div>
  );
}
