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

export default function Features() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Typography variant="h5" color="secondary" className={classes.title}>
          About Feeds
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-manual-docs/blob/master/Feeds_Manual_en.md"
        >
          🔱 Data Ownership ✅
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-manual-docs/blob/master/Feeds_Manual_zh.md"
        >
          ⛔ Private ✅
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://github.com/elastos-trinity/feeds-manual-docs/blob/master/Feeds_Manual_zh.md"
        >
          🤝 Content-Sharing ✅
        </Button>
      </Grid>
    </div>
  );
}
