import React, { useEffect, useState } from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "../App.css";
import { ProfileCard, LogColor } from "../Themes/globalStyles";
import { Grid, Typography } from "@material-ui/core";

function Profile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemsUserData, setItemsUserData] = useState([]);
  const [itemsJson, setItemsJson] = useState([]);

  const user = getUser();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://adaptive-question-api.herokuapp.com/userdata/databyusername/?username=${user.name}`,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItemsUserData(result.UserData);
          setItemsJson(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
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
  } else {
    return (
      <ProfileCard className="mainProfile">
        Total number Quiz attempted by {user.name} is:{" "}
        {JSON.stringify(itemsJson.count)}
        <div>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ display: "flex" }}
          >
            <Grid item xs={11} md={12} lg={9}>
              {itemsUserData.map((item) => (
                <div key={item.id}>
                  {item.username === user.name && (
                    <div
                      className="cardProfile"
                      style={{
                        marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "black",
                        borderStyle: "solid",
                      }}
                    >
                      <h3 style={{ textAlign: "center" }}>
                        Quiz Name: {item.quizName}
                      </h3>
                      <div>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            style={{
                              borderWidth: 2,
                              borderColor: "black",
                              borderStyle: "solid",
                            }}
                          >
                            <h4 style={{ textAlign: "center" }}>Section 1</h4>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div>
                                Section difficulty: {item.section1Difficulty}
                              </div>
                              <div style={{ display: "flex", flex: 1 }} />
                              <p>Section Score: </p>
                              <div>
                                <p className="grounded-radiants">
                                  {" "}
                                  {item.section1}
                                </p>
                              </div>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            style={{
                              borderWidth: 2,
                              borderColor: "black",
                              borderStyle: "solid",
                            }}
                          >
                            <h4 style={{ textAlign: "center" }}>Section 2</h4>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div>
                                Section difficulty : {item.section2Difficulty}
                              </div>
                              <div style={{ display: "flex", flex: 1 }} />
                              <p>Section Score: </p>
                              <div>
                                <p className="grounded-radiants">
                                  {" "}
                                  {item.section2}
                                </p>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Grid>
          </Grid>
        </div>
      </ProfileCard>
    );
  }
}

export default Profile;
