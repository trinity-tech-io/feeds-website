import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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

export default function Features({ carouselimg }) {
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
            Features
          </Typography>
        </Grid>
      </Grid>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={4}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img
                src={carouselimg[0]}
                alt="Own your data"
                className={classes.media}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                ✅ Data Ownership 🔱
              </Button>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.title}
              >
                Take back ownership of your data!
              </Typography>
            </Grid>
          </Slide>
          <Slide index={1}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img
                src={carouselimg[1]}
                alt="Private and secure"
                className={classes.media}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                ✅ Private ⛔
              </Button>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.title}
              >
                Your privacy is secure!
              </Typography>
            </Grid>
          </Slide>
          <Slide index={2}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img
                src={carouselimg[2]}
                alt="Share your feeds online"
                className={classes.media}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                ✅ Content-Sharing 🤝
              </Button>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.title}
              >
                Follow your favorite Feeds and share contents with friends and
                family safely!
              </Typography>
            </Grid>
          </Slide>
          <Slide index={3}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img
                src={carouselimg[3]}
                alt="Decentralized"
                className={classes.media}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                ✅ Decentralized 🧱⛓️
              </Button>
              <Typography
                variant="h6"
                color="secondary"
                className={classes.title}
              >
                No central authority!
              </Typography>
            </Grid>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}
