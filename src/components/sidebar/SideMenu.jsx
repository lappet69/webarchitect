/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState, useRef } from "react";
// import logo from "../assets/logo/webscript.png";
// import user from "../assets/user.jpg";
import logo from "../../logo.svg";

import "./sidebar.scss";

import * as Fa from "react-icons/fa";
import * as Bi from "react-icons/bi";
import * as Hi from "react-icons/hi";
import * as Md from "react-icons/md";
import * as Io from "react-icons/io";
import * as Gi from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { data } from "../../data/data";

//

const SideMenu = (props) => {
  const categories = [
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        // console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <nav>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? <Fa.FaRegWindowClose /> : <Fa.FaAlignJustify />}
          </div>
        </div>

        <div className="main-menu">
          <ul>
            <li>
              <Link className="menu-item" to="/webarchitect">
                <div className="menu-icon">
                  <Fa.FaHome />
                </div>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/webarchitect/about"} className={`menu-item`}>
                <div className="menu-icon">
                  <Hi.HiUserGroup />
                </div>
                <span>{"About"}</span>
              </Link>
              {/* <ul className={`sub-menu`}>
              <li key={"index"}>
                <NavLink to={"/webarchitect/about/company"}>
                  <Io.IoMdBusiness />
                  {"Company"}
                </NavLink>
                <NavLink to={"/webarchitect/about/team"}>
                  <Fa.FaPeopleCarry />
                  {"Team"}
                </NavLink>
              </li>
            </ul> */}
            </li>
            <li>
              <Link to={"/webarchitect/project"} className={`menu-item`}>
                <div className="menu-icon">
                  <Bi.BiBuildingHouse />
                </div>
                <span>{"Project"}</span>
              </Link>
              <ul className={`sub-menu`}>
                <li key={"index"}>
                  <NavLink to={"/webarchitect/p/" + categories[0]}>
                    <Md.MdHouse />
                    {"Rumah"}
                  </NavLink>
                  <NavLink to={"/webarchitect/p/" + categories[1]}>
                    <Gi.GiShop />
                    {"Ruko"}
                  </NavLink>
                  <NavLink to={"/webarchitect/p/" + categories[2]}>
                    <Md.MdOutlineLocalConvenienceStore />
                    {"Kios"}
                  </NavLink>
                </li>
              </ul>
            </li>
            <Link className="menu-item" to="/webarchitect/contact">
              <div className="menu-icon">
                <Md.MdOutlineContactMail />
              </div>
              <span>Contact</span>
            </Link>
          </ul>
        </div>
        <div className="side-menu-footer">
          <div className="sosmed-info">
            <a
              href={"https://www.instagram.com/scarlett.actress/"}
              target="_blank"
            >
              <Fa.FaInstagram />
            </a>
            <a target={"_blank"} href={"https://www.facebook.com/Scarjolivex/"}>
              <Fa.FaFacebookSquare />
            </a>
            <a target={"_blank"} href={"https://twitter.com/scarlett_jo"}>
              <Fa.FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
