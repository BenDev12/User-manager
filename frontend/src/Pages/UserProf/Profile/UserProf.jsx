import React from "react";
import "./UserProf.css";
import avata from "../../../Assets/ben.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActiveUser from "../Active/ActiveUser";

const UserProf = () => {
  return (
    <div className="profile-details">
      <div className="user-picture">
        <img src={avata} alt="user-Dp" />{" "}
      </div>
      <div className="user-information">
        <h4>Onyango Benard</h4>
        <p>Senior Full stack Developer!</p>
      </div>
      <div className="meta-data">
        <div className="meta-data-item">
          <FontAwesomeIcon icon="envelope" />
        </div>
        <div className="meta-data-item">
          <FontAwesomeIcon icon="bell" />
        </div>
        <div className="meta-data-item">
          <FontAwesomeIcon icon="lock" />
        </div>
        <div className="meta-data-item">
          <FontAwesomeIcon icon="tools" />
        </div>
      </div>
      <ActiveUser />
    </div>
  );
};

export default UserProf;
