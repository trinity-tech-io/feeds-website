import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import desktopimg from "../assets/feeds-service-desktop.png";
import switchimg from "../assets/feeds-service-switch.png";
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

export default function WindowsMac() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 1 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            ⬇️ Download program file
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/Feeds.Service.app.windows.zip"
        >
          🖥️ Windows
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/Feeds.Service.app.macos.zip"
        >
          🍏 Mac OS
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 2 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            🏃🏽‍♀️ Install and run program
          </Typography>
          <img src={desktopimg} className={classes.desktopimg} />
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 3 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            🔛 Toggle switch to display QR code
          </Typography>
          <img src={switchimg} className={classes.desktopimg} />
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 4 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            📲 Scan QR code from the Feeds app
          </Typography>
          <img src={scanimg} className={classes.scanimg} />
        </Grid>
      </Grid>
    </div>
  );
}
