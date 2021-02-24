import {
  AppBar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import HideOnScroll from "./HideOnScroll";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import logo from "../assets/feeds-logo.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
    textDecoration: `none`,
    // textTransform: `uppercase`,
    color: `white`,
    "&:hover": {
      backgroundColor: "primary",
      color: "#fff",
    },
  },
  logo: {
    height: 60,
    width: "auto",
  },
}));

const navLinks = [
  { title: `Features`, path: `#features` },
  { title: `Feeds Service`, path: `#feeds-service` },
  { title: `Download`, path: `#download` },
  { title: `Manual`, path: `#manual` },
];

function Navbar({ switchtheme }) {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar component="nav">
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <NavLink
                to="/"
                activeStyle={{
                  background: "primary",
                  color: "primary",
                }}
              >
                <img src={logo} className={classes.logo}></img>
              </NavLink>

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <a key={title} className={classes.linkText}>
                      <ListItem button>
                        <Link
                          className={classes.linkText}
                          activeClass="active"
                          to={path.substring(1)} //remove the # for Link tag to work
                          spy={true}
                          smooth={true}
                        >
                          {title}
                        </Link>
                      </ListItem>
                    </a>
                  ))}
                </List>
                <List className={classes.navListDisplayFlex}>
                  {switchtheme}
                </List>
              </Hidden>

              <Hidden mdUp>
                <SideDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}

export default Navbar;
