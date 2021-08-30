import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useClipboard from "react-use-clipboard";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

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
  font: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
}));

export default function FeedsService() {
  const classes = useStyles();

  const [isCopied, setCopied] = useClipboard(
    "docker run -d --restart=always -p 10080:10080 trinitytech/feeds"
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
          <Typography variant="h5" color="secondary" className={classes.title}>
            Choose Your Platform <span style={{fontSize:"0.9rem"}}>(version 2.0.1)</span>
          </Typography>
        </Grid>
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
          href="https://download.trinity-feeds.app/feeds-service/feedsd_armhf_raspbian.deb"
        >
          🍓 Raspberry Pi
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://download.trinity-feeds.app/feeds-service/Feeds.Service.app.macos.zip"
        >
          🍏 Mac OS
        </Button>
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
          href="https://github.com/elastos-trinity/feeds-service/releases"
          target="_blank"
        >
          😺 Github
        </Button>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            For Docker
          </Typography>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography color="secondary" className={classes.font}>
            🏃Run the following command in the terminal and start the service
          </Typography>
        </Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClick({ vertical: "center", horizontal: "center" })}
          className={classes.button}
        >
          docker run -d --restart=always -p 10080:10080 trinitytech/feeds
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
