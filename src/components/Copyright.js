import React from "react";
import { Typography, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="body2" color="grey" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://trinitytech.io/">
          Trinity Tech Co., Ltd.
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Grid>
  );
}
export default Copyright;
