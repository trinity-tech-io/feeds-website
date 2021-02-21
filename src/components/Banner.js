import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "50%",
    height: "auto",
  },
}));

export default function Banner({ img }) {
  const classes = useStyles();
  return (
    <img
      src={img}
      alt="Available on elastOs, Android and iOS!"
      className={classes.media}
    />
  );
}
