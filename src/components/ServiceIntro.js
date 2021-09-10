import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import scanimg from "../assets/feeds-service-scan.jpg";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "50%",
    height: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(2),
  },
  desktopimg: {
    margin: theme.spacing(1),
    width: "100%",
    height: "auto",
  },
  scanimg: {
    margin: theme.spacing(1),
    width: "50%",
    height: "auto",
  },
}));

export default function ServiceIntro() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="#guideWM"
        >
          🖥️ Windows / 🍏 Mac OS
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="#guidePL"
        >
          🍓 Raspberry Pi / 🐧 Linux
        </Button>
      </Grid>
    </div>
  );
}
