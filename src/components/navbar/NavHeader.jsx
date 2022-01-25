import React, { useState, useEffect, useRef } from "react";
import { Styles, Navbar, CSSReset, HamburgerButton } from "./navHeaderCss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function NavHeader() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Router>
      <Styles.Wrapper>
        <CSSReset />

        <Navbar.Wrapper>
          <Navbar.Logo>
            <Link to="/">Logo</Link>
          </Navbar.Logo>

          <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
            <HamburgerButton.Lines />
          </HamburgerButton.Wrapper>

          <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
            <Navbar.Item>
              <Link to="/about"><i className="far fa-address-book"></i>About</Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/project">Project</Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/contact"><i className="far fa-copy"></i>Contact</Link>
            </Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      </Styles.Wrapper>
     
    </Router>
  );
}

export default NavHeader;
