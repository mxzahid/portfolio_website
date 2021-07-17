import React,{Component} from "react";
import RoadLevel1 from '../RoadLevels/RoadLevel1'
import RoadLevel2 from '../RoadLevels/RoadLevel2'
import RoadLevel3 from '../RoadLevels/RoadLevel3'
import RoadLevel4 from '../RoadLevels/RoadLevel4'
import RoadLevel5 from '../RoadLevels/RoadLevel5'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



class SkillsChart extends Component
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            plChartData: props.chartDataPL,
            mlChartData: props.chartDataML,
            webDevChartData: props.webDevChartData,
            devOpsChartData: props.devOpsChartData,
            softSkillsChartData: props.softSkillsChartData,
        }
    }
    render()
    {
        return(
          <div>
         <h1
         className="display-2 font-weight-bolder" 
         style = {{textAlign:'center',color:'#FFFFFF',fontSize:'5em'}}>
            My Tech Journey
         </h1>
         <h2 
         className="display-2 font-weight-lighter" 
         style = {{textAlign:'center',color:'#A5A5Af',fontSize:'1.5em'}}>
            (hover over each card to see)
         </h2>
         <br></br>
         <br></br>
         <Container 
         fluid={true}>
          <Row className="justify-content-left">
          <Col >
         
          <div style = {{display:'flex',flexDirection:'row'}}>
            <RoadLevel1
            plChartData= {this.state.plChartData}
            clickMessage={this.state.clickMessage}
            />
            <RoadLevel2 
            mlChartData = {this.state.mlChartData}
            clickMessage={this.state.clickMessage}
            />
          </div>
          {/* , marginTop:'-15.6%',marginLeft:'-10%' */}
          <div style={{marginTop:'-200px', marginLeft:'0px'}}>
            <div>
              <RoadLevel3
              webDevChartData= {this.state.webDevChartData}
              clickMessage={this.state.clickMessage}
              />
            </div>
          </div>
          <div style= {{display:'flex',flexDirection:'row'}}>
            <div>
              <RoadLevel4
              devOpsChartData = {this.state.devOpsChartData} 
              clickMessage={this.state.clickMessage}
              />
           </div>
            <div style = {{marginLeft:'-375px',marginTop:'500px'}}>
              <RoadLevel5 
              
              />
            </div>
          </div>
          </Col>
          </Row>
          </Container>
          </div>
         
            )
    }
}
            
export default SkillsChart