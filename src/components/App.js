import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import CoursesPage from "./courses/CoursesPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./courses/ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/course/:slug"} component={ManageCoursePage} />
        <Route path={"/about"} component={AboutPage} />
        <Redirect from="/about-page" to={"about"} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
