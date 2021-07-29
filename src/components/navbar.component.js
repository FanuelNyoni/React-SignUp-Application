import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand navbar-header" href="#">
              SignUp App
            </a>
          <div className="collapase navbar-collapse">
            <ul className="nav navbar-nav mr-auto">
              <li className="navbar-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">New User</a>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}
