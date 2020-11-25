import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import "./Login.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { LoginCardColor, LogColor } from "../Themes/globalStyles";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [islogin, setIsLogin] = useState(false);
  //
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [contactSignUp, setContactSignUp] = useState("");
  const [decsriptionSignUp, setDescriptionSignup] = useState("");

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://adaptive-question-api.herokuapp.com/users/signin", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again");
      });
  };

  return (
    <LoginCardColor>
      <div className="main1">
        <div className="app">
          <Grid container>
            {islogin ? (
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                justify="top"
                alignContent="top"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  display: "flex",
                  flex: 1,
                }}
              >
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                <br />
                <div>
                  <label className="textToRight" style={{ fontSize: "20px" }}>
                    Enter name
                  </label>

                  <br />
                  <input
                    className="textToRight"
                    type="text"
                    value={usernameSignUp}
                    onChange={(e) => setUsernameSignUp(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <label className="textToRight" style={{ fontSize: "20px" }}>
                    Refer your contact
                  </label>
                  <br />

                  <input
                    className="textToRight"
                    type="text"
                    value={contactSignUp}
                    onChange={(e) => setContactSignUp(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <label className="textToRight" style={{ fontSize: "20px" }}>
                    Give a short description about yourself
                  </label>
                  <br />
                  <textarea
                    className="textToRight"
                    type="text"
                    value={decsriptionSignUp}
                    onChange={(e) => setDescriptionSignup(e.target.value)}
                    style={{ width: "100%" }}
                    rows="4"
                  />
                </div>

                <input
                  className="buttonTakeQuiz"
                  type="button"
                  value={loading ? "Please Wait(Authenticating User)" : "Login"}
                  onClick={handleLogin}
                  disabled={loading}
                />
                <br />
                <p style={{ textAlign: "center" }}>Remember your login?</p>
                <Button onClick={() => setIsLogin(false)}>
                  <a className="atext">Click here</a>
                </Button>
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                justify="top"
                alignContent="top"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  display: "flex",
                  flex: 1,
                }}
              >
                <h2 style={{ textAlign: "center" }}>Login</h2>
                <br />
                <div>
                  <label className="textToRight" style={{ fontSize: "20px" }}>
                    Username
                  </label>

                  <br />
                  <input
                    className="textToRight"
                    type="text"
                    {...username}
                    autoComplete="new-password"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <label className="textToRight" style={{ fontSize: "20px" }}>
                    Password
                  </label>
                  <br />
                  <input
                    className="textToRight"
                    type="password"
                    {...password}
                    autoComplete="new-password"
                    style={{ width: "100%" }}
                  />
                </div>
                {error && (
                  <>
                    <small style={{ color: "red" }}>{error}</small>
                    <br />
                  </>
                )}
                <br />
                <input
                  className="buttonTakeQuiz"
                  type="button"
                  value={loading ? "Please Wait(Authenticating User)" : "Login"}
                  onClick={handleLogin}
                  disabled={loading}
                />
                <br />
                <p style={{ textAlign: "center" }}>
                  Not a user yet! Don't worry
                </p>
                <Button onClick={() => setIsLogin(true)}>
                  <a className="atext">Click here</a>
                </Button>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </LoginCardColor>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
