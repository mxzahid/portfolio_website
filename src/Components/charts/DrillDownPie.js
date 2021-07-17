import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown"

function DrillDownPie() {
  drilldown(Highcharts);
  let options = {
    chart:
    {
      type: 'pie',
      backgroundColor:'transparent',
      height:'300px'
    },
    tooltip:{enabled:false},
    plotOptions:
    {
      pie:
      {
        borderWidth:0.5,
        borderColor:"black",
        colors: ["#F7a35c","#8e8eb2","#57e43a","#6fa2b9",
        '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']
      },
//  colors erica = ["#F7a35c","#ccccff","#90ed7d","#7cb5ce"]
     
    },
    lang: {drillUpText: '<< Back to Top'},
    title: 
    {
      style:{color:'white',fontSize:'15px',fontFamily:'cursive'},
      text: '(Click on each section for more info)'
      
    },
    series: [
      {
          name: "ML",
          colorByPoint: true,
          data: [
              {
                  name: "NLP",
                  y: 27.00,
                  drilldown: "NLP"
              },
              {
                  name: "RecSys",
                  y: 15.00,
                  drilldown: "RecSys"
              },
              {
                  name: "FrameWorks",
                  y: 25.00,
                  drilldown: "FrameWorks"
              },
              {
                  name: "Algos",
                  y: 33.00,
                  drilldown: "Algos"
              }
          ]
      }
  ],
  drilldown: {
    drillUpButton:
    {
      position:{
        y:-10,
        x:0
      },
      theme: {
        fill:'white',
        'stroke-width':1,
        stroke:'gray',
        states:
        {
          hover: {fill: '#a4edba'}
        }
      }
    },
      series: [
          {
              name: "NLP",
              id: "NLP",
              data: [{
                  name: 'MultiClass Classification',
                  y: 30,
                  color: '#f8b57c'
                },
                {
                  name: 'SentimentAnalysis',
                  y: 20,
                  color: '#f9be8c'
                },
                {
                  name: 'Topic Modeling',
                  y: 20,
                  color: '#fac79d'
                },
                {
                  name: 'NER',
                  y: 15,
                  color: '#fbd1ad'
                },
                {
                  name: 'Extractive Summarization',
                  y: 15,
                  color: '#fce3ce'
                }]
          },
          {
              name: "RecSys",
              id: "RecSys",
              data: [
                {
                  name: 'Content-based Filtering',
                  y: 40,
                  color: '#b7b7e5'
                },
                {
                  name: 'Collaborative Filtering',
                  y: 30,
                  color: '#ccccff'
                },
                {
                  name: 'KNN',
                  y: 30,
                  color: '#d6d6ff'
                },
              ]
          },
          {
              name: "FrameWorks",
              id: "FrameWorks",
              data: [
                {
                  name: 'PyTorch',
                  y: 22,
                  color: '#6ae750'
                },
                {
                  name: 'TensorFlow',
                  y: 21,
                  color: '#7dea67'
                },
                {
                  name: 'Scikit-Learn',
                  y: 17,
                  color: '#90ed7d'
                },
                {
                  name: 'Keras',
                  y: 10,
                  color: '#9bee8a'
                },
                {
                  name: 'HuggingFace',
                  y: 30,
                  color: '#a6f097'
                }
              ]
          },
          {
              name: "Algos",
              id: "Algos",
              data: [
                {
                  name: 'Linear Regression',
                  y: 27,
                  color: '#7cb5ce'
                },
                {
                  name: 'Logistical Regression',
                  y: 23,
                  color: '#89bcd2'
                },
                {
                  name: 'PCA',
                  y: 10,
                  color: '#96c3d7'
                },
                {
                  name: 'SVM',
                  y: 10,
                  color: '#a3cbdc'
                },
                {
                  name: 'Neural Networks',
                  y: 30,
                  color: '#bddae6'
                }
              ]
          },
      ]},
        
    credits: {
      enabled:false
    }
  }


  return (
    <span>
      <HighchartsReact 
        highcharts={Highcharts}
        options={options}
      />
    </span>
  )
}

export default DrillDownPie;