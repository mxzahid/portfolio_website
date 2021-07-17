import React from "react";
import FlipCard from '../FlipCard'
import Road from "../Road"
import WebDevChart from "../charts/WebDevChart";
import DevopsChart from "../charts/DevopsChart";

function RoadLevel4(props) {

    return(
        <div style = {{display: 'flex', flexDirection: 'column'}}>
              <div style = {{display:'flex',flexDirection:'row-reverse',marginTop:'10px',marginRight:'55px'}}>
              <FlipCard
                  width = {"400px"}
                  height = {"384px"}
                  FlipStyle = {{backgroundImage:'url("/webDev.jpg")',
                  backgroundSize:'100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
                  Back = {
                    <div>
                      <h1 style = {{textAlign:'center', color:'#fff44f',fontFamily:'cursive'}}>
                          Web Dev
                        </h1>
                      <WebDevChart />
                    </div>
                      }
                ></FlipCard>
                <Road 
                      width={'160px'}
                      height= {'160px'}
                      StylingInfo = {'horizontal-road1'}
                      dashType = 'horizontal-dash'
                />
                    <Road 
                      width={'160px'}
                      height={'160px'}
                      StylingInfo = {'horizontal-road3'}
                      dashType = {'horizontal-dashC2'}
                    />
                    </div>
                    <div style = {{marginLeft:'0px',marginTop:'-220px'}}>
                    <Road 
                    width={'160px'}
                    height={'160px'}
                    StylingInfo = {'vertical-road2'}
                    dashType = {'vertical-dash'}
                      />
                      <Road 
                    width={'160px'}
                    height={'120px'}
                    StylingInfo = {'vertical-road'}
                    dashType = {'vertical-dash'}
                      />
                    </div>  
                   
                    <FlipCard
                    width = {"400px"}
                    height = {"384px"}
                    FlipStyle = {{
                                    backgroundImage:'url("/devops.jpg")', 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                    // Front=
                    // {
                    //   <div>
                    //     <h1 className = 'devOps-hF'>
                    //     {props.devOpsChartData.frontTitle}
                    //     </h1>
                    //   </div>
                    // }
                    Back = {
                      <div>
                       <h1 style = {{textAlign:'center', color:'#fff44f',fontFamily:'cursive'}}>
                          DevOps
                        </h1>
                      <DevopsChart />
                      </div>
                        }
                  >
                  </FlipCard>

        </div>


    )


}

export default RoadLevel4;