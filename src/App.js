import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch as SwitchRouter,
  withRouter,
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Pasar from "./pages/Pasar";
import Guide from "./pages/Guide";
import Disclaimer from "./pages/Disclaimer";
import DisclaimerNFT from "./pages/DisclaimerNFT";
//import Switch from "@material-ui/core/Switch";
import DarkModeToggle from "react-dark-mode-toggle";
// Animate on scroll initialization
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5),
  },
  toggle: {
    outline: "none",
  },
}));

function App(props) {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? "dark" : "light";

  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (
      (props.location.pathname === "/disclaimer") |
      (props.location.pathname === "/disclaimer-nft") |
      (props.location.pathname === "/guide")
      // (props.location.pathname === "/pasar")
    ) {
      setNav(false);
    } else {
      setNav(true);
    }
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#7B2CFE",
      },
      secondary: {
        main: "#368BFF",
      },
      type: palletType,
    },
    typography: {
      fontFamily: ['"Montserrat"', "Open Sans"].join(","),
    },
  });

  const switchTheme = (
    // <Switch checked={darkMode} onChange={handleThemeChange} color={"grey"} />
    <DarkModeToggle
      onChange={handleThemeChange}
      checked={darkMode}
      size={75}
      speed={5}
      className={classes.toggle}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        {palletType == "dark" ? (
          <style>{`body{background: #2e2638;`}</style>
        ) : (
          <style>{`body{background: #f7f2ff;`}</style>
        )}
      </Helmet>
      {/* <Container className={classes.root}> */}
      <NavBar switchtheme={switchTheme} showNav={nav} />

      <SwitchRouter>
        <Route path="/" exact component={Home} />
        <Route path="/guide" exact component={Guide} />
        <Route path="/disclaimer" exact component={Disclaimer} />
        <Route path="/disclaimer-nft" exact component={DisclaimerNFT} />
      </SwitchRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);
