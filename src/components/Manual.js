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

export default function Manual() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Typography variant="h5" color="secondary" className={classes.title}>
          Installation Guide/Manual
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="/guide"
          target="_blank"
        >
          📦 Feeds Service Installation Guide
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://web.telegram.org/#/im?p=@feedscapsule"
          target="_blank"
        >
          ✈️ Telegram Channel
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://feeds.featurebase.app/"
          target="_blank"
        >
          💡 Submit Feedback
        </Button>
      </Grid>
    </div>
  );
}
