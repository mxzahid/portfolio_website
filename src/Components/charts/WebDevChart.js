import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighChartsMore from "highcharts/highcharts-more";
import drilldown from "highcharts/modules/drilldown";
function WebDevChart() {
    drilldown(Highcharts);
     HighChartsMore(Highcharts);
    let options = {
        legend: {
            enabled:false
        },
        chart: {
            type: 'column',
            inverted: true,
            polar: true,
            height:"320px",
            backgroundColor:'transparent'
        },
        tooltip: {
            outside: true,
            animation:false
        },
        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },
        xAxis: {
            tickInterval: 1,
            labels: {
            align: 'right',
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
                fontSize: '13px'
            }
            },
            lineWidth: 0,
            categories: ['JS','CSS','HTML'],
        },
        yAxis: {
          crosshair: {
            enabled: true,
            color: '#333'
          },
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15
          },
          
        },
        series: [{
          name: 'HTML5',
          data: [0, 0, 275]
        }, {
          name: 'Bootstrap',
          data: [0, 145, 0],
          color:"yellow"
        }, {
          name: 'Tailwind',
          data: [0, 75, 0],
          color: "#BE3075"
        },
        {
            name: 'WebKit',
            data: [0, 55, 0]
          },
        {
            name: 'ReactJS',
            data: [80, 0, 0]
        },
        {
            name: 'nodeJS',
            data: [65, 0, 0]
        },
        {
            name: 'D3.js',
            data: [35, 0, 0]
        },
        {
            name: 'expressJS',
            data: [30, 0, 0]
        },
        {
            name: 'MongoDB',
            data: [65, 0, 0]
        }                
        ],
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



export default WebDevChart;