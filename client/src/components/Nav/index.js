// Imports Component and set it to the default export of the 'react' package.  If import React from "react" was used there could only be a single default export
import React, { Component } from "react";
// Imports Link and sets it to the default export of react-router-dom
import { Link } from "react-router-dom";
// Imports user generated style sheet
import "./style.css";

// To define a React component class you need to extend the component
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
  // Similar to documentReady, using componentDidMount makes it clear that data won’t be loaded until after the initial render. This reminds you to set up initial state properly, so you don’t end up with undefined state that causes errors.
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
  // componentWillUnmount is a method that is called when a component is being removed from the DOM
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
