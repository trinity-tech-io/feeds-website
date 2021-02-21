import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
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
}));

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#307ae0",
      },
      secondary: {
        main: "#A067FF",
      },
    },
    typography: {
      fontFamily: ['"Montserrat"', "Open Sans"].join(","),
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Helmet>
          <style>{`body{background: #fff;`}</style>
        </Helmet>
        {/* <Container className={classes.root}> */}
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
        <Copyright />
        {/* </Container> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
