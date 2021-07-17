import React from "react";
import SkillChart from "../Components/charts/SkillsChart" 

function SkillPage(props) {
    
    var softSkillsChartData = {
        labels: ['Public Speaking', 'Swimming','Weightlifting','Reading', 'Coding', 'Table Tennis', 'DJing'],
        datasets: [
          {
            label: 'Hobbies',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'Professional',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ],
        frontTitle1: 'Soft',
        frontTitle2: 'Skills'
      };

      var webDevData = {
        datasets: [{
            data: [40,30,20,10],
            backgroundColor: ['Red','Yellow','Purple','Green'],
        }],
    
       
        labels: [
            'Python',
            'Bash',
            'Java',
            'C'
        ],
        frontTitle: 'WebDev',
        options: 
            {legend: 
                {display: true, position: "bottom", labels:
                    {
                        fontColor:'#FFFFFF'
                    }
                }
            }
        }

    var devOpsData = {
            datasets: [{
                data: [40,30,20,10],
                backgroundColor: ['Red','Yellow','Purple','Green'],
            }],
        
           
            labels: [
                'Python',
                'Bash',
                'Java',
                'C'
            ],
            frontTitle: 'DevOps',
            options: 
                {legend: 
                    {display: true, position: "bottom", labels:
                        {
                            fontColor:'#FFFFFF'
                        }
                    }
                }
            }

    return  (
        <div>
            <SkillChart
            //  chartDataML = {dataML}
             softSkillsChartData = {softSkillsChartData}
             webDevChartData = {webDevData}
             devOpsChartData = {devOpsData}
            />
        </div>

    )
}

export default SkillPage
