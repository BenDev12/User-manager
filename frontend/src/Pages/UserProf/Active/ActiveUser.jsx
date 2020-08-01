import React from "react";
import avata from "../../../Assets/ben.jpg";
import "./Active.css";

const ActiveUser = () => {
  return (
    <div className="co-worker">
      <div className="single-user">
        <img src={avata} alt="co-pic" />
        <div className="user-name">
          <p>Onyango Jovita</p>
        </div>
      </div>
      <div className="single-user">
        <img src={avata} alt="co-pic" />
        <div className="user-name">
          <p>Onyango Jovita</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
