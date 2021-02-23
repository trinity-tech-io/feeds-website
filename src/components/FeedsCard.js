import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Content from "../components/Content";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    width: 600,
    marginTop: 10,
    padding: 15,
    // borderStyle: "solid",
    borderColor: "#f2f2f2",
  },
  media: {
    width: "50%",
    height: "auto",
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "#A067FF",
    width: theme.spacing(7),
    height: theme.spacing(7),
    "&:hover": {
      backgroundColor: "#368BFF",
      color: "#FFF",
    },
  },
  like: {
    color: "red",
  },
}));

export default function FeedsCard({
  id,
  avatarimg,
  title,
  username,
  descr,
  content,
  like,
  comment,
}) {
  const classes = useStyles();

  return (
    <div id={id}>
      <Grid container direction="row" justify="center">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar alt="Avatar" className={classes.avatar}>
                {avatarimg}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>
            }
            title={title}
            subheader={username}
          />
          <CardContent>
            <Typography variant="h5" component="p">
              {descr}
            </Typography>
          </CardContent>
          <Grid container direction="row" justify="center">
            <Content feedsContent={content} />
          </Grid>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon className={classes.like} />
            </IconButton>
            <Typography variant="body2" color="textSecondary" component="p">
              {like}
            </Typography>
            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary" component="p">
              {comment}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
