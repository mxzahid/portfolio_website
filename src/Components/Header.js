import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.mainHeader && (
              props.last == "True" ? 
              <div 
                className= "connectHeader">
                {props.mainHeader}
              </div> :
                <h1
                  className="display-2 font-weight-bolder"
                  style={{ color: "#FFFFFF" }}
                >
                  {props.mainHeader}
                </h1>
            )}
            {props.subHeader && (
              <h3
                style={{ color: "#A5A5Af" }}
                className="display-4 font-weight-light"
              >
                {props.subHeader}
              </h3>
            )}
            {/* {props.subText && (
              <h3
                style={{ color: "#EAE3EA" }}
                className="lead font-weight-light"
              >
                {props.subText}
              </h3>
            )} */}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Header;
