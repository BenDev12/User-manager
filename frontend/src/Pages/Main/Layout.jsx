import React from "react";
import "./Layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProf from "../UserProf/Profile/UserProf";

const Layout = () => {
  return (
    <div className="main-content">
      <div className="side-nav">
        <div className="logo-area">
          <h2>
            User<span>Repo</span>
          </h2>
        </div>
        <div className="side-nav-section ">
          <div className="side-nave-item">
            {" "}
            <FontAwesomeIcon icon="home" />
          </div>
          <div className="side-nave-item">
            {" "}
            <FontAwesomeIcon icon="tasks" />
          </div>
          <div className="side-nave-item">
            {" "}
            <FontAwesomeIcon icon="file" />
          </div>
          <div className="side-nave-item">
            {" "}
            <FontAwesomeIcon icon="award" />
          </div>
        </div>
      </div>
      <div className="user-details">
        <div className="search-area">
          <form>Search area</form>
        </div>
        <div className="Welcome-home">
          <h2>Hey Ben welcome home</h2>
        </div>
        <div className="user-content">the actual dash board</div>
      </div>
      <UserProf />
    </div>
  );
};

export default Layout;
