/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./pages/project/Project";
import DetailProject from "./pages/detail-project/DetailProject";
import LandingPage from "./pages/landing-page/LandingPage";
import Category from "./pages/category/Category";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import SideMenu from "./components/sidebar/SideMenu";

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
        <Route exact path="/webarchitect">
          <LandingPage />
        </Route>
        <Route path={"/client"}>Client</Route>
        <Route path={"/webarchitect/about"} component={About} />
        <Route path={"/webarchitect/project"} component={Project} />
        <Route path={"/webarchitect/contact"} component={Contact} />
        <Route
          path={"/webarchitect/detail/project/:id"}
          component={DetailProject}
        />
        <Route
          path={"/webarchitect/p/:category"}
          component={Category}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
