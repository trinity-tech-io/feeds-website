import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ownership from "../assets/feeds-ownership.svg";
import privacy from "../assets/feeds-private.svg";
import social from "../assets/feeds-social.svg";
import decentralized from "../assets/feeds-decentralized.svg";

const carouselInfos = [
  {
    index: 0,
    imgsrc: ownership,
    alt: "Own your data",
    title: `✅ Data Ownership 🔱`,
    descr: `Take back ownership of your data`,
  },
  {
    index: 1,
    imgsrc: privacy,
    alt: "Private and secure",
    title: `✅ Private ⛔`,
    descr: `Your data is private and secure`,
  },
  {
    index: 2,
    imgsrc: social,
    alt: "Share your feeds online",
    title: `✅ Content-Sharing 🤝`,
    descr: `Follow your favorite Feeds and share contents with friends and
    family safely`,
  },
  {
    index: 3,
    imgsrc: decentralized,
    alt: "Decentralized App",
    title: `✅ Decentralized 🧱⛓️`,
    descr: `No central authority`,
  },
];

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
        <Grid container direction="column" justify="center" alignItems="center">
          <CardContent>
            <Typography variant="h5" color="black" className={classes.font}>
              TL;DR➡Decentralized Twitter🥳🎉
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={4}
        isPlaying={true}
      >
        <Slider>
          {carouselInfos.map((carouselInfo, index) => (
            <Slide key={index} index={carouselInfo.index}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <img
                  src={carouselInfo.imgsrc}
                  alt={carouselInfo.alt}
                  className={classes.media}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {carouselInfo.title}
                </Button>
                <Typography
                  variant="h6"
                  color="secondary"
                  className={classes.title}
                >
                  {carouselInfo.descr}
                </Typography>
              </Grid>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}
