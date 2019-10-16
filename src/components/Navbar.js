import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button className="nav-btn" type="button" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* <<<<<< Use the below logic (including Toggle Handler above for Personal Site) >>>>> */}
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/rooms">Rooms</Link>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}
