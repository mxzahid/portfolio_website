import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Slide from "./Slide";
import Project1 from "../../Images/Project1.jpg";
import profPic from "../../Images/profPic.jpeg";
// import { Link } from "react-router-dom";
// // import AboutSlide from "./AboutSlide";
// import charsi from "../Images/charsi.jpeg"
// import waterG from "../Images/coolDude.jpeg";
import pencil from "../../Images/pencilDude.jpeg"
class Slider extends Component {
  constructor(props) {
    super();
    this.state = {
      content: [
        {
          id: 0,
          mainHeader: "",

          subHeader: "Check out my github!",
          imgSrc: pencil,
          link: "https://github.com/mxzahid/",
          imageText: 'My Work',
          selected: false,
        },
        {
          id: 1,
          mainHeader: "Who am I?",
          subHeader: "",
          imgSrc: profPic,
          link: "/about",
          imageText: 'Me',
          selected: false,
        },
        {
          id: 2,
          mainHeader: "",
          subHeader: "What do I know...",
          imgSrc: Project1,
          imageText: 'My Skills',
          link: "/skills",
          selected: false,
        },
      ],
    };
  }

  handleClick = (id, slide) => {
    let items = [...this.state.content];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (content) => {
    return content.map((item) => {
      // return item.id === 0 ? (
      return(  
        <Slide
          item={item}
          click={(e) => this.handleClick(item.id, e)}
          key={item.id}
          
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around" style={{ color: "#C5C1C0" }}>
          {this.makeItems(this.state.content)}
        </Row>
      </Container>
    );
  }
}

export default Slider;
