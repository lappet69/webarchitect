/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
// import logo from "../assets/logo/webscript.png";
import logo from "../../logo.svg";
import Footer from "../footer/Footer";
import "./sidebar.scss";

import * as Fa from "react-icons/fa";
import * as Bi from "react-icons/bi";
import * as Hi from "react-icons/hi";
import * as Md from "react-icons/md";
import * as Bs from "react-icons/bs";
// import * as Io from "react-icons/io";
import * as Gi from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { data } from "../../data/data";
import $ from "jquery";
import { e_mail } from "../../pages/contact/Contact";

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
  const widthWindow = $(window).width();
  useEffect(() => {
    if (inactive) {
      // removeActiveClassFromSubMenu();
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
    <>
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
              {inactive ? <Fa.FaRegWindowClose className="toggle-menu-btn" /> : <Fa.FaAlignJustify />}
            </div>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <Link
                  className="menu-item"
                  to="/webarchitect"
                  onClick={() =>
                    widthWindow <= 700 ? setInactive(!inactive) : false
                  }
                >
                  <div className="menu-icon">
                    <Fa.FaHome />
                  </div>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/webarchitect/about"}
                  onClick={() =>
                    widthWindow <= 700 ? setInactive(!inactive) : false
                  }
                  className={`menu-item`}
                >
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
                <Link
                  to={"/webarchitect/project"}
                  className={`menu-item`}
                  onClick={() =>
                    widthWindow <= 700 ? setInactive(!inactive) : false
                  }
                >
                  <div className="menu-icon">
                    <Bi.BiBuildingHouse />
                  </div>
                  {"Project"}
                </Link>
                <ul className={`sub-menu`}>
                  <li key={"index"}>
                    <NavLink
                      to={"/webarchitect/p/" + categories[0]}
                      onClick={() =>
                        widthWindow <= 700 ? setInactive(!inactive) : false
                      }
                    >
                      <Md.MdHouse />
                      {" Rumah"}
                    </NavLink>
                    <NavLink
                      to={"/webarchitect/p/" + categories[1]}
                      onClick={() =>
                        widthWindow <= 700 ? setInactive(!inactive) : false
                      }
                    >
                      <Gi.GiShop />
                      {" Ruko"}
                    </NavLink>
                    <NavLink
                      to={"/webarchitect/p/" + categories[2]}
                      onClick={() =>
                        widthWindow <= 700 ? setInactive(!inactive) : false
                      }
                    >
                      <Md.MdOutlineLocalConvenienceStore />
                      {" Kios"}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <Link
                className="menu-item"
                to="/webarchitect/contact"
                onClick={() =>
                  widthWindow <= 700 ? setInactive(!inactive) : false
                }
              >
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
                href={"https://www.instagram.com/pradinata.architect/"}
                target="_blank"
              >
                <Fa.FaInstagram />
              </a>
              <a
                target={"_blank"}
                href={"https://www.facebook.com/Pradinata-Architect-101465768826062"}
              >
                <Fa.FaFacebookSquare />
              </a>
              <a target={"_blank"} href={e_mail}>
                <Bs.BsEnvelope />
              </a>
            </div>
            <div className="copyright">
              <p>
                ?? {new Date().getFullYear()} Copyright of Pradinata Architect{" "}
              </p>
              <p>Design Studio.</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
