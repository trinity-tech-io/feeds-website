import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

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
          <Typography variant="h5" color="primary" className={classes.title}>
            App store/Play Store
          </Typography>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://play.google.com/store/apps/details?id=io.trinitytech.dapp.feeds"
          target="_blank"
        >
          🤖 Android
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://apps.apple.com/us/app/trinity-feeds/id1546436333"
          target="_blank"
        >
          🍏 ios
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="primary" className={classes.title}>
             Source Code
          </Typography>
        </Grid>

        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            href="http://download.elastos.org/app/trinity-feeds/feeds.apk"
            target="_blank"
        >
          🤖 Android APK
        </Button>

        <Grid container direction="column" justify="center" alignItems="center">
          <CardContent>
            <Typography variant="h5" color="black" className={classes.font}>
              If you're already using Elastos Essentials, you can sign
              in🔑 with your existing DID. A temporary DID will be issued by
              Feeds during onboarding for users without DIDs🛑. You can either
              export🚢 that DID and publish it to the blockchain later or you
              can create one yourself now🦸! Just click the button below and
              follow the procedures from the site🌊
            </Typography>
          </CardContent>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" color="primary" className={classes.title}>
            DID (Decentralized Identifier)
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://www.getdids.com/"
          target="_blank"
        >
          🆔 Create DID
        </Button>
      </Grid>
    </div>
  );
}
