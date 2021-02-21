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
    textDecoration: `none`,
    // textTransform: `uppercase`,
    color: `white`,
    "&:hover": {
      backgroundColor: "#307ae0",
      color: "#fff",
    },
  },
  logo: {
    height: 60,
    width: "auto",
    backgroundColor: "#307ae0",
  },
}));

const navLinks = [
  { title: `Feeds Service`, path: `/#feeds-service` },
  { title: `Download`, path: `/#download` },
  { title: `Manual`, path: `/#manual` },
];

const Navbar = () => {
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
                  background: "#307ae0",
                  color: "#307ae0",
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
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  ))}
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
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Navbar;
