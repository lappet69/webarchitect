import React from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div
      className="col-md-3 box-sidebar flex-column"
      style={{ border: "solid 1px" }}
    >
      <div className="sidebar flex-column align-items-between">
        <div className="col-md-1">
          {" "}
          <NavLink className="navbar-brand sidebar-logo" to="/" exact>
            Logo
          </NavLink>
        </div>
        <div className="col-md-9">
          <ul className="sidebar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="sidebar-link active" to="/" exact>
                <i className="fas fa-tachometer">
                  <Icons.FaJsSquare />
                </i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="sidebar-link" to="/about">
                <i className="fas fa--address-book">
                  <Icons.FaJsSquare />
                </i>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="sidebar-link" to="/project">
                <i className="fas fa--address-book">
                  <Icons.FaJsSquare />
                </i>
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="sidebar-link" to="/contact">
                <Icons.FaJsSquare />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md sosmed">
          <Icons.FaInstagram />
          <Icons.FaFacebook />
          <Icons.FaGithub />
        </div>
      </div>
      {/* <nav className=" navbar-expand-lg sidebar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          Logo
        </NavLink>
        <button
          onClick={"() => animation()"}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icons.FaJsSquare />
         
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item ">
              <NavLink className="nav-link active" to="/" exact>
                <i className="fas fa-tachometer">
                  <Icons.FaJsSquare />
                </i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <i className="fas fa--address-book">
                  <Icons.FaJsSquare />
                </i>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/project">
                <i className="fas fa--address-book">
                  <Icons.FaJsSquare />
                </i>
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <Icons.FaJsSquare />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
       
      </nav> */}
    </div>
  );
};

export default Sidebar;
