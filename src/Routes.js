import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./pages/project/Project";
import DetailProject from "./pages/detail-project/DetailProject";
import LandingPage from "./pages/landing-page/LandingPage";
import Category from "./pages/Category/Category";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Header from "./components/navbar/Header";
import NavbarComp from "./components/navbar/Navbar";
import SideMenu, { menuItems } from "./components/sidebar/SideMenu";

export const baseUrl = "https://lappet69.github.io/webarchitect/";

const Routes = (Components, pageProps) => {
  const [inactive, setInactive] = useState(false);
  return (
    <Router>
      <SideMenu
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path={"/client"}>Client</Route>
        <Route path={baseUrl.toString() + "/about"} component={About} />
        <Route path={baseUrl.toString() + "/project"} component={Project} />
        <Route path={baseUrl.toString() + "/contact"} component={Contact} />
        <Route
          path={baseUrl.toString() + "/detail/project/:id"}
          component={DetailProject}
        />
        <Route
          path={baseUrl.toString() + "/p/:category"}
          component={Category}
        />
        {/* <Route path="/category/:category" component={Category} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
