import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "./ScrollToTop/ScrollTopPage";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import Quiz from "./Quiz/Quiz";
import Profile from "./Profile/Profile";
import "./App.css";
import AboutApp from "./Dashboard/AboutApp";
//
//theme imports
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Button } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";
import { Typography } from "@material-ui/core";
//
//
function App(props) {
  const token = getToken();
  const [authLoading, setAuthLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(
        `https://adaptive-question-api.herokuapp.com/verifyToken?token=${token}`
      )
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return (
      <div class="wrapper">
        <span class="circle circle-1"></span>
        <span class="circle circle-2"></span>
        <span class="circle circle-3"></span>
        <span class="circle circle-4"></span>
        <span class="circle circle-5"></span>
        <span class="circle circle-6"></span>
        <span class="circle circle-7"></span>
        <span class="circle circle-8"></span>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <ScrollToTop />

            <div>
              <div className="header">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/"
                  className="headera"
                >
                  Home
                </NavLink>

                {token ? (
                  <div style={{ display: "flex" }}>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard"
                      className="headera"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      to="/profile"
                      className="headera"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      exact
                      activeClassName="active"
                      to="/about"
                      className="headera"
                    >
                      About
                    </NavLink>
                  </div>
                ) : (
                  <NavLink
                    activeClassName="active"
                    to="/login"
                    className="headera"
                  >
                    Login
                  </NavLink>
                )}

                <div style={{ display: "flex", flex: 1 }} />

                <div>
                  <Button onClick={themeToggler}>
                    <Typography>
                      {theme === "light" ? (
                        <Typography>Dark Mode</Typography>
                      ) : (
                        <Typography>Light Mode</Typography>
                      )}
                    </Typography>
                  </Button>
                </div>
              </div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PublicRoute path="/login" component={Login} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/profile" component={Profile} />
                  <PrivateRoute path="/quiz" component={Quiz} />
                  <PrivateRoute path="/about" component={AboutApp} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
