import React from "react";
import Header from "../Components/Header";
import About from "../Components/AboutMe/About";
import form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../Components/Footer"
import axios from 'axios'
class ContactPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      disable: false,
      emailSent: null,
      api: "https://5ktw2ettwh.execute-api.us-east-1.amazonaws.com/production?"
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.apiBuilder(e);
    axios.get(this.state.api)
    .then(
      (result) => {
        console.log(result.text);
        this.setState({
          disabled: true,
          emailSent: true,
        });
      },
      (error) => {
        console.log(error.text);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      }
    );
  };

  apiBuilder = (e) => {
     this.state.api = this.state.api + 'name=' + e.target.name.value + "&" + 'email=' + e.target.email.value + "&" + 'message=' + e.target.message.value;
  };



  render(props) {
    return (
      <div>
        <Header 
          mainHeader={this.props.mainHeader}
          last = {this.props.last} 
        />
        <About>
          <form onSubmit={this.handleSubmit}>
            <form.Group>
              <form.Label htmlFor="full-name" style={{ color: " #FAF0E6" }}>
                Full Name
              </form.Label>
              <form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </form.Group>
            <form.Group>
              <form.Label htmlFor="email" style={{ color: " #FAF0E6" }}>
                Email
              </form.Label>
              <form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </form.Group>
            <form.Group>
              <form.Label htmlFor="message" style={{ color: " #FAF0E6" }}>
                Your Message
              </form.Label>
              <form.Control
                id="message"
                name="message"
                as="textarea"
                rows="5"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </form.Group>
            <Button
              style = {{backgroundColor: "red", borderColor: "black"}}

              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Not sent, had an issue :(</p>
            )} 
          </form>
        </About>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
