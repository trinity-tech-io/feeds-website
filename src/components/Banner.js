import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "100%",
    height: "auto",
  },
}));

export default function Banner({ img }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center">
        <img
          src={img}
          alt="Available on elastOs, Android and iOS!"
          className={classes.media}
        />
        <Grid container direction="row" justify="center">
          <Button
            variant="contained"
            color="primary"
            href="/pasar"
            target="_blank"
          >
            🎨 Explore Pasar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
