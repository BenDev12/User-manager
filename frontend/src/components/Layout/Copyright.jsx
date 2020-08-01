import React from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Copyright() {
  return (
    <Router>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://localhost:3000">
          User Repository Manager
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Router>
  );
}

export default Copyright;
