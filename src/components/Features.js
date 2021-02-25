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

export default function Features({ img }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <CardContent>
            <Typography variant="h5" color="black" className={classes.font}>
              TL;DR➡Decentralized Twitter🥳🎉
            </Typography>
          </CardContent>
          <Typography variant="h5" color="secondary" className={classes.title}>
            About Feeds
          </Typography>
        </Grid>

        <Button variant="outlined" color="secondary" className={classes.button}>
          ✅ Data Ownership 🔱
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          ✅ Private ⛔
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          ✅ Content-Sharing 🤝
        </Button>
        <Grid container direction="column" justify="center" alignItems="center">
          {/* <img
            src={img}
            alt="Available on elastOs, Android and iOS!"
            className={classes.media}
          /> */}
        </Grid>
        <Button variant="outlined" color="secondary" className={classes.button}>
          ✅ Decentralized 🧱⛓️
        </Button>
      </Grid>
    </div>
  );
}
