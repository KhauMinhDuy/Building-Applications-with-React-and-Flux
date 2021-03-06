import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/course/:slug"} component={ManageCoursePage} />
        <Route path={"/course"} component={ManageCoursePage} />
        <Route path={"/about"} component={AboutPage} />
        <Redirect from="/about-page" to={"about"} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
