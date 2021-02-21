import React from "react";
import { Typography, Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://trinitytech.io/">
        Trinity Tech Co., Ltd.
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
export default Copyright;
