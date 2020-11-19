import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import Quiz from "./Quiz/Quiz";
//
//theme imports
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Button } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";
//
//
function App() {
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
        `https://login-auth-web-mini.herokuapp.com/verifyToken?token=${token}`
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
    return <div className=" ">Checking Authentication...</div>;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
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

                <NavLink
                  activeClassName="active"
                  to="/dashboard"
                  className="headera"
                >
                  Dashboard
                </NavLink>
                <div style={{ display: "flex", flex: 1 }} />
                <Button onClick={themeToggler}>
                  <a>
                    {theme === "light" ? (
                      <a>Switch to Dark Mode</a>
                    ) : (
                      <a>Switch to Light Mode</a>
                    )}
                  </a>
                </Button>
              </div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PublicRoute path="/login" component={Login} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/quiz" component={Quiz} />
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
