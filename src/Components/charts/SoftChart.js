import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighChartsMore from "highcharts/highcharts-more";
import item from "highcharts/modules/item-series"
function SoftChart() {
    HighChartsMore(Highcharts)
    item(Highcharts)
    let options= {
        legend: {
            enabled:true,
            itemStyle:
            {
                color: "#d4d2d2"
            }
        },
        chart: {
            type: 'item',
            height:"350px",
            backgroundColor:'transparent'
        },
        plotOptions: {
            item: {
                dataLabels:
            {
                enabled:false
            }
            }
            
        },
        tooltip:{enabled:false},
        series: [{
            name: '',
            keys: ['name', 'y', 'color'],
            data: [
              ['Swimming', 120, '#BE3075'],
              ['Table Tennis', 100, '#f37a13'],
              ['Weightlifting', 90, '#64A12D'],
              ['DJ-ing', 100, '#FFED00'],
              ['Public Speaking', 70, '#000000'],
              ['Problem Solving', 150, '#d40000'],
              ['Work Ethic', 94, '#009EE0']
            ],
            center: ['50%', '50%'],
            size: '85%',
            startAngle: 0,
            endAngle: 360
        }],
        title: {
            style:{color:'transparent',fontSize:'0px',fontFamily:'cursive'},
            text: '-----'
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

export default SoftChart;