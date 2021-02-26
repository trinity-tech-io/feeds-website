import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { ColumnToRow, Row, Item } from "@mui-treasury/components/flex";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { usePlainNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/plain";
import logo from "../assets/feeds-logo.svg";
import Copyright from "./Copyright";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: "center",
    color:
      palette.type === "dark"
        ? "rgba(255,255,255,0.57)"
        : palette.text.secondary,
    position: "relative",
    [breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0,
        },
      },
    },
  },
  navMenu: {
    flexWrap: "wrap",
    fontFamily: `"Montserrat","Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  onHover: {
    "&:hover": {
      backgroundColor: "#368BFF",
      color: "#FFF",
    },
  },
  logo: {
    height: 75,
  },
}));

export const Footer = React.memo(function NeptuneAppFooter() {
  const classes = useStyles();
  return (
    <Box width={"100%"}>
      <Container>
        <Box pt={8} pb={2}>
          <Row wrap>
            <Item grow={2}>
              <Row alignItems={"center"}>
                <Item>
                  <NavLink to="/">
                    <img
                      src={logo}
                      className={classes.logo}
                      alt={"feeds"}
                    ></img>
                  </NavLink>
                </Item>
                <Item>
                  <Typography variant={"h6"} color={"textSecondary"}>
                    Feeds
                  </Typography>
                </Item>
              </Row>
              <NavMenu className={classes.navMenu}>
                {/*<NavItem href={"/about"}>About</NavItem>
                <NavItem href={"/contact"}>Contact</NavItem>
                 <NavItem>Press</NavItem>
                <NavItem>Customer Services</NavItem> */}
              </NavMenu>
            </Item>
            <Item grow maxWidth={500} mx={"auto"}>
              <Box textAlign={"right"} mt={{ xs: 2, md: 0 }} my={2}>
                <IconButton
                  aria-label="Twitter"
                  href={"https://twitter.com/elastOSFeeds"}
                  color="primary"
                  className={classes.onHover}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  aria-label="Telegram"
                  href={"https://web.telegram.org/#/im?p=@feedscapsule"}
                  color="primary"
                  className={classes.onHover}
                >
                  <TelegramIcon />
                </IconButton>
              </Box>
            </Item>
          </Row>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at={"md"}
            columnStyle={{ alignItems: "center" }}
            rowStyle={{ alignItems: "unset" }}
          >
            <Item grow ml={-2} shrink={0}>
              <NavMenu useStyles={usePlainNavigationMenuStyles}>
                <ColumnToRow at={"sm"}>
                  {/* <NavItem className={cx(classes.legalLink)}>
                    Terms & Conditions
                  </NavItem> */}
                  <NavItem
                    className={cx(classes.legalLink)}
                    href={"https://trinitytech.io/privacy_policy.html"}
                  >
                    Privacy Policy
                  </NavItem>
                  <NavItem
                    className={cx(classes.legalLink)}
                    href={"https://trinitytech.io/disclaimer.html"}
                  >
                    Disclaimer
                  </NavItem>
                </ColumnToRow>
              </NavMenu>
            </Item>
            <Item>
              <Box py={1} textAlign={{ xs: "center", md: "right" }}>
                <Typography
                  component={"p"}
                  variant={"caption"}
                  color={"textSecondary"}
                >
                  Designed by Ordantech
                </Typography>
              </Box>
            </Item>
          </ColumnToRow>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
});

export default Footer;
