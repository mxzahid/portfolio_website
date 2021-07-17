import React from "react";
import Header from "../Components/Header";
import About from "../Components/AboutMe/About";
import form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import Footer from "../Components/Footer"
class ContactPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      disable: false,
      emailSent: null,
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
    emailjs
      .sendForm(
        "gmail",
        "template_59i9pbh",
        e.target,
        "user_vpNFwhgpCtL4HiHuYoPXe"
      )
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
