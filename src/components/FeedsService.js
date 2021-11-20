import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useClipboard from "react-use-clipboard";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  media: {
    width: "50%",
    height: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonMac: {
    width: "94%",
    [theme.breakpoints.down('xs')]: {
      width: "96%",
    }
  },
  buttonDocker: {
    textTransform: "lowercase"
  },
  title: {
    margin: theme.spacing(2),
  },
  font: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
}));

export default function FeedsService() {
  const classes = useStyles();

  const [isCopied, setCopied] = useClipboard(
      "docker run -d --restart=always -p 10018:10018 trinitytech/feeds"
  );

  //snackbar
  const [state, setState] = React.useState({
    open: false,
    vertical: "center",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    setCopied(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            href="/guide"
            target="_blank"
          >
            📦 Feeds Service Installation Guide
          </Button>
          <Typography variant="h5" color="secondary" className={classes.title}>
            Choose Your Platform
            <span style={{ fontSize: "0.9rem" }}> v2.0.2</span>
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
        <Grid container item direction="row" justify="center" alignItems="center">
          <Grid item direction="row" xs={12} sm={6} md={6} lg={6}>
            <Button
                variant="contained"
                color="secondary"
                className={[classes.button, classes.buttonMac]}
                href="https://download.trinity-feeds.app/feeds-service/Feeds.Service.app.macos.zip"
            >
              🍏 Mac OS
            </Button>
          </Grid>

          <Grid item direction="row" xs={12} sm={6} md={6} lg={6}>
            <Button
                variant="contained"
                color="secondary"
                className={[classes.button, classes.buttonMac]}
                href="https://download.trinity-feeds.app/feeds-service/Feeds.Service.app.macos.arm64.zip"
            >
              🍏 Mac OS(Silicon Chip)
            </Button>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/feedsd_arm64_raspbian.deb"
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

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-service/releases"
          target="_blank"
        >
          😺 Github
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://store.elabox.com/"
          target="_blank"
        >
          📦 Purchase Elabox
        </Button>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            For Docker
          </Typography>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography color="secondary" className={classes.font}>
            🏃 Run the following command in the terminal and start the service
          </Typography>
        </Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClick({ vertical: "center", horizontal: "center" })}
          className={[classes.button, classes.buttonDocker]}
        >
          docker run -d --restart=always -p 10018:10018 trinitytech/feeds
        </Button>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <MuiAlert onClose={handleClose} severity="success">
          {isCopied ? "Copied to Clipboard! 👍" : "Nope! 👎"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
