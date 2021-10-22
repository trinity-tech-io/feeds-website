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

export default function PiLinux() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 1 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            ⬇️ Download deb package to Desktop
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/feedsd_armhf_raspbian.deb"
        >
          🍓 Raspberry Pi
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/feedsd_amd64_ubuntu_2004.deb"
        >
          🐧 Linux
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 2 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            Open terminal and type:
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            <Typography style={{ textTransform: "none" }}>
              <i>cd Desktop</i>
            </Typography>
          </Button>
          <Typography variant="h5" color="black" className={classes.font}>
            And then,
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            <Typography style={{ textTransform: "none" }}>
              <i>sudo dpkg -i filenamehere.deb</i>
            </Typography>
          </Button>
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 3 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            Read the terms and conditions.
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            Type "y" to accept
          </Typography>
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          <Typography style={{ textTransform: "none" }}>
            <i>y</i>
          </Typography>
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 4 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            🩺 To check the service status, type:
          </Typography>
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          <Typography style={{ textTransform: "none" }}>
            <i>sudo systemctl status feedsd</i>
          </Typography>
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 5 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            🔍 Open internet browser and type:
          </Typography>
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          <Typography style={{ textTransform: "none" }}>
            <i>http://localhost:10018</i>
          </Typography>
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Step 6 ☑️
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            📲 Scan QR code from the Feeds app
          </Typography>
          <img src={scanimg} className={classes.scanimg} />
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Additional Notes 📝
          </Typography>
          <Typography variant="h5" color="black" className={classes.font}>
            🛑 To stop service, type:
          </Typography>
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          <Typography style={{ textTransform: "none" }}>
            <i>sudo systemctl stop feedsd</i>
          </Typography>
        </Button>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="black" className={classes.font}>
            🏎️ To start service, type:
          </Typography>
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          <Typography style={{ textTransform: "none" }}>
            <i>sudo systemctl start feedsd</i>
          </Typography>
        </Button>
      </Grid>
    </div>
  );
}
