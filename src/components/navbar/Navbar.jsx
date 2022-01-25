import React, { useEffect } from "react";
import * as Icons from "react-feather";
import {
  Navbar,
  Offcanvas,
  Nav,
  Button,
  Form,
  Container,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.scss";
import $ from "jquery";

const NavbarComp = () => {
  function animation() {
    var tabsNewAnim = $("#offcanvasNavbar");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();

    $(".hori-selector").css({
      " top": itemPosNewAnimTop + "px",
      left: itemPosNewAnimLeft + "px",
      height: activeWidthNewAnimHeight + "px",
      " width": activeWidthNewAnimWidth + "px",
    });

    $("#offcanvasNavbar").on("click", "li", function (e) {
      $("#offcanvasNavbar ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop + "px",
        left: itemPosNewAnimLeft + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(() => {
        animation();
      }, 500);
    });
  });
  return (
    <Router>
      <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Link to="/">LOGO</Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <div className="hori-selector">
                  <div className="left"></div>
                  <div className="right"></div>
                </div> */}
                <Nav.Link href="/project">
                  <Icons.Box />
                  Project
                </Nav.Link>
                <Nav.Link href="/about">
                  <Icons.Book />
                  About
                </Nav.Link>
                {/* <NavDropdown title="About" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/about">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/team">Team</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="/contact">
                  <Icons.Copy />
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </Router>
  );
};
export default NavbarComp;
