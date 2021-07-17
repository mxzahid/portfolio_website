import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighChartsMore from "highcharts/highcharts-more";
import variablepie from "highcharts/modules/variable-pie"
function DevopsChart() {
    HighChartsMore(Highcharts)
    variablepie(Highcharts)
    let options= {
      legend: {
        enabled:false
      },
      chart: {
        type: 'variablepie',
        inverted: true,
        polar: true,
        height:"100%",
        backgroundColor:'transparent'
      },
      tooltip:{enabled:false},
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: '',
        data: [{
          name: 'Docker',
          y: 300,
          z: 92.9
        }, {
          name: 'Apache Tomcat',
          y: 250,
          z: 118.7,
          color: "#8e8eb2"
        }, {
          name: 'AWS',
          y: 270,
          z: 150.6
        }, {
          name: 'Agile',
          y: 260,
          z: 180.6
        }, {
          name: 'Linux',
          y: 260,
          z: 235.6
        }]
    }],
    title: {
      style:{color:'transparent',fontSize:'0px',fontFamily:'cursive'},
      text: '(Click on each section for more info)'
      },
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

export default DevopsChart;

// name: 'Docker',
// data:[{value: 300}],
// },
// {
//  name: 'Apache Tomcat',
//  data:[{value: 250}],
//  },
// {
//  name: 'AWS',
//  data:[{value: 270}],
//  },
//  {
//      name:'Linux',
//      data:[{value:290}]
//  },
//  {
//      name:'Agile',
//      data:[{value:260}]
//  }

// ]