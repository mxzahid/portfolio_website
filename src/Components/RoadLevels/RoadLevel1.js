import React from "react";
import FlipCard from '../FlipCard'
import Road from "../Road"
import SkillBar from 'react-skillbars';
import dataPL from '../../allData/plData';

function RoadLevel1(props) {
    return (
        <div>
            <div style = {{display: 'flex', flexDirection: 'row'}}>
              <FlipCard
                  width = {"400px"}
                  height = {"320px"}
                  FlipStyle = {{backgroundImage:'url("/pLangs.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'}}
                  Back = {
                    <div>
                      <h1 style ={{color:'#fff44f',fontFamily:'cursive'}}>
                        Programming Languages
                      </h1>
                      <SkillBar
                      skills={dataPL.skills}
                      colors= {dataPL.colors}
                      animationDelay={1000}/>
                    </div>
                      }
                >
                </FlipCard>               
                <Road 
                width={'195px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'} dashType = 'horizontal-dash'/>
                <Road 
                width={'180'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'} dashType = 'horizontal-dash'/>
                <Road 
                width={'195px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'} dashType = 'horizontal-dash'/>
                <Road 
                width={'195px'}
                height= {'160px'}
                StylingInfo = {'horizontal-road1'} dashType = 'horizontal-dash'/>
            </div>
            </div>
        )              
}

export default RoadLevel1;
