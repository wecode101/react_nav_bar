import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import TabOne from "./components/TabOne.component";
import TabTwo from "./components/TabTwo.component";
import TabThree from "./components/TabThree.component";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://wecode101.com/" rel="noopener noreferrer" target="_blank">
                <img src={logo} width="30" height="30" alt="wecode101.com/" />
              </a>
              <Link to="/" className="navbar-brand">Home</Link> {/*Clickable links related to the Router*/}
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">tab-one</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/two" className="nav-link">tab-two</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/three" className="nav-link">tab-three</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <Route path="/" exact component={TabOne} />{/*The Router enables the navigation among views of various components*/}
            <Route path="/two" component={TabTwo} />
            <Route path="/three" component={TabThree} />
          </div>
        </Router>
    );
  }
}

export default App;