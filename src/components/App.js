import React from "react";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";

const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage />;
    }
    if (route === "/courses") {
      return <CoursesPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
