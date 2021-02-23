import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(3), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 200px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 600,

    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    marginBottom: spacing(5),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
}));

export default function Content({ feedsContent }) {
  const styles = useStyles();

  const shadowStyles = useOverShadowStyles();

  return (
    <div>
      <Grid container direction="row" justify="center">
        {feedsContent}
      </Grid>
    </div>
  );
}
