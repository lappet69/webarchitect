import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../../pages/Home";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/client">Client</Route>
        <Route path="/about">about</Route>
        <Route path="/project">Project</Route>
        <Route path="/contact" component={"Contact"} />
      </Switch>
    </Router>
  );
};
export default Navbar;
