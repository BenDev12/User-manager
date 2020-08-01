import React, { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import Layout from "./Pages/Main/Layout";
import "./utils/FontAwesome/index";

// import { library } from "@fortawesome/fontawesome-svg-core";

// import {
//   faHome,
//   faEnvelope,
//   faBell,
//   faTools,
// } from "@fortawesome/free-solid-svg-icons";

// library.add(faHome, faEnvelope, faBell, faTools);

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Layout />
      <Footer />
    </Fragment>
  );
};

export default App;
