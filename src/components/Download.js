import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

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

export default function Download() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="secondary" className={classes.title}>
            Download Feeds Capsule/Native App
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://scheme.elastos.org/app?id=io.trinity-tech.dapp.feeds"
        >
          💊 elastOS
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://play.google.com/store/apps/details?id=io.trinitytech.dapp.feeds"
        >
          🤖 Android
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          href="https://apps.apple.com/us/app/trinity-feeds/id1546436333"
        >
          🍏 ios
        </Button>
      </Grid>
    </div>
  );
}
