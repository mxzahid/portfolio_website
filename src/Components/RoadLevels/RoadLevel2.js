import React from "react";
import FlipCard from '../FlipCard'
import Road from "../Road"
import DrilldownPie from "../charts/DrillDownPie"

function RoadLevel2(props) {
    return(
        <div style = {{display: 'flex', flexDirection: 'column', marginLeft:'-0.92em' 
        }}>
                <Road 
                      width={'160px'}
                      height={'155px'}
                      StylingInfo = {'horizontal-road2'}
                      dashType = {'horizontal-dashC'}
                    />
                    
                <Road 
                     width={'160px'}
                     height={'80px'}
                     StylingInfo = {'vertical-road2'}
                     dashType = {'vertical-dash'}
                />
                <div
                style ={{marginBottom:'-1.3%', marginLeft:'-28%'}}
                >
                <FlipCard
                    width = {"400px"}
                    height = {"384px"}
                    FlipStyle = {{ backgroundImage:'url("/ML.jpg")',
                    backgroundSize: '110%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'}}
                    Back = {
                      <div>
                        <h1 style = {{textAlign:'center', color:'#fff44f',fontFamily:'cursive'}}>
                          Machine Learning
                        </h1>
                        {/* <Bar data={props.mlChartData}
                          options= {props.mlChartData.options}
                        /> */}
                        <span style = {{backgroundColor:'transparent', overflow:'hidden'}}>
                          <DrilldownPie/>
                        </span>
                      </div>
                        }
                  >
                  </FlipCard>
                </div>  
                <Road 
                     width={'160px'}
                     height={'5em'}
                     StylingInfo = {'vertical-road'}
                     dashType = {'vertical-dash'}
                       />
                <div>
                    <Road 
                     width={'160px'}
                     height={'160px'}
                     StylingInfo = {'vertical-road1'}
                    //  paddingRight = {'6em'}
                     dashType = {'vertical-dashC'}
                    />
                    <div style = {{display:'flex',flexDirection:'column',marginTop:'-40%',marginLeft:'-37.6%'}}>
                    <Road 
                      width={'160px'}
                      height= {'160px'}
                      StylingInfo = {'horizontal-road1'}
                      dashType = 'horizontal-dash'
                    />
                    </div>
                    <div style = {{display:'flex',flexDirection:'column',marginTop:'-40%',marginLeft:'-75.6%'}}>
                    <Road 
                      width={'160px'}
                      height= {'160px'}
                      StylingInfo = {'horizontal-road1'}
                      dashType = 'horizontal-dash'
                    />
                    </div>
                    
                    
                </div>

        </div>


    )


}

export default RoadLevel2