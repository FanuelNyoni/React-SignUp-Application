import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";

import Navbar from "./components/navbar.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    };

    //.bind is used in the constructor to avoid:
    // TypeError: Cannot read property 'setState' of undefined
    //.bind this binds the methods to change the values to the state

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Methods/Functions to change the values of the formfield/state
  changeFirstName(event) {
    this.setState({
      firstname: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changeUserName(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  changeLastName(event) {
    this.setState({
      lastname: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    //User data is saved to on object called registered
    const registered = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/app/signup", registered)
      .then((response) => console.log(response.data));

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Navbar />
        </div>
        <br />

        <div className="Form-div">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="First Name"
              onChange={this.changeFirstName}
              value={this.state.firstname}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="Last Name"
              onChange={this.changeLastName}
              value={this.state.lastname}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="Username"
              onChange={this.changeUserName}
              value={this.state.username}
              className="form-control form-group"
            ></input>

            <input
              type="text"
              placeholder="Email Address"
              onChange={this.changeEmail}
              value={this.state.email}
              className="form-control form-group"
            ></input>

            <input
              type="password"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
              className="form-control form-group"
            ></input>

            <input
              type="submit"
              value="Submit"
              className="btn btn-danger btn-block"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
