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
  title: {
    margin: theme.spacing(2),
  },
}));

export default function FeedsService() {
  const classes = useStyles();

  const [isCopied, setCopied] = useClipboard(
    "docker run -d --restart=always -p 10080:10080 trinitytech/feeds"
  );

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setCopied(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Typography variant="h5" color="primary" className={classes.title}>
          Debian Packages for Linux System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-service/releases/download/release-v1.5.0/feedsd_1.5.0_amd64_ubuntu_2004.deb"
        >
          🐧 Linux
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-service/releases/download/release-v1.5.0/feedsd_1.5.0_armhf_raspbian.deb"
        >
          🍓 Raspberry Pi
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-service/releases/download/release-v1.5.0/Feeds.Service.app.macos.zip.zip"
        >
          🍏 Mac OS
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-service/releases"
        >
          😺 Github
        </Button>

        <Typography variant="h5" color="secondary" className={classes.title}>
          Docker
        </Typography>
        <Typography variant="h6" color="secondary">
          🏃 Run the following command in the terminal to install and start the
          service
        </Typography>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClick}
          className={classes.button}
        >
          docker run -d --restart=always -p 10080:10080 trinitytech/feeds
        </Button>

        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="success">
            {isCopied ? "Copied to Clipboard! 👍" : "Nope! 👎"}
          </MuiAlert>
        </Snackbar>
      </Grid>
    </div>
  );
}
