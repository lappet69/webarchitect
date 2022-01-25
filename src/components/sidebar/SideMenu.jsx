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
// import MenuItem from "./MenuItem";

//

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "fas fa-user",
  },
  {
    name: "About",
    exact: true,
    to: `/about`,
    iconClassName: "fab fa-github-square",
    subMenus: [
      { name: "Team", to: "/content-2/team" },
      { name: "Company", to: "/content-2/company" },
    ],
  },
  {
    name: "Project",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Rumah", to: "/content/courses" },
      { name: "Ruko", to: "/content/ruko" },
      { name: "Cafe", to: "/content/cafe" },
    ],
  },
  {
    name: "Contact",
    to: `/contact`,
    iconClassName: "bi bi-vector-pen",
  },
];

const SideMenu = (props) => {
  const categories = [
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  const [inactive, setInactive] = useState(false);
  const drawerRef = useRef(null);

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

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
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

  console.log(categories);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? <Fa.FaRegWindowClose /> : <Fa.FaAlignJustify />}
        </div>
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}

      {/* <div className="divider"></div> */}

      <div className="main-menu">
        <ul>
          {/* {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              Fa={menuItem.Fa}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))} */}

          <li>
            <Link className="menu-item" to="/">
              <div className="menu-icon">
                <Fa.FaHome />
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={`menu-item`}>
              <div className="menu-icon">
                <Hi.HiUserGroup />
              </div>
              <span>{"About"}</span>
            </Link>
            <ul className={`sub-menu`}>
              <li key={"index"}>
                <NavLink to={"/about/company"}>
                  <Io.IoMdBusiness />
                  {"Company"}
                </NavLink>
                <NavLink to={"/about/team"}>
                  <Fa.FaPeopleCarry />
                  {"Team"}
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/project"} className={`menu-item`}>
              <div className="menu-icon">
                <Bi.BiBuildingHouse />
              </div>
              <span>{"Project"}</span>
            </Link>
            <ul className={`sub-menu`}>
              <li key={"index"}>
                <NavLink to={"/p/" + categories[0]}>
                  <Md.MdHouse />
                  {"Rumah"}
                </NavLink>
                <NavLink to={"/p/" + categories[1]}>
                  <Gi.GiShop />
                  {"Ruko"}
                </NavLink>
                <NavLink to={"/p/" + categories[2]}>
                  <Md.MdOutlineLocalConvenienceStore />
                  {"Kios"}
                </NavLink>
              </li>
            </ul>
          </li>
          <Link className="menu-item" to="/contact">
            <div className="menu-icon">
              <Md.MdOutlineContactMail />
            </div>
            <span>Contact</span>
          </Link>
          {/* <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          /> */}
          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="side-menu-footer">
        {/* <div className="avatar"><img src={"user"} alt="user" /></div> */}
        <div className="sosmed-info">
          <a href={"https://www.instagram.com/scarlett.actress/"} target="_blank" >
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
  );
};

export default SideMenu;
