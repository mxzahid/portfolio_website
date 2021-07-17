import React from "react";
import FlipCard from '../FlipCard'
import Road from "../Road"
import SoftChart from "../charts/SoftChart"
function RoadLevel5(props) {

    return (
        <div>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div style = {{display: 'flex', flexDirection: 'row', top: '160px',alignItems: 'center'}}>                
                <Road 
                width={'160px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'}
                dashType = 'horizontal-dash'/>
                 <Road 
                width={'160px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'}
                dashType = 'horizontal-dash'/>
                 <Road 
                width={'160px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'}
                dashType = 'horizontal-dash'/>
                 <Road 
                width={'160px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'}
                dashType = 'horizontal-dash'/>
                <FlipCard
                  width = {"400px"}
                  height = {"400px"}
                  FlipStyle = {{ backgroundImage:'url("/softSkills.jpg")', 
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '110%',
                  backgroundPosition: 'center'}}
                  Back = {
                    <div style={{height:'400px'}}>
                      <h1 style = {{textAlign:'center', color:'#fff44f',fontFamily:'cursive'}}>
                          Soft Skills
                        </h1>
                      <SoftChart />
                    </div>
                     
                      }
                >
                </FlipCard>
            </div>
          </div>
        </div>
        )              
}

export default RoadLevel5;