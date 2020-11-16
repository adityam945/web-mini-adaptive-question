import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "./Dashboard.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      <input
        type="button"
        onClick={handleLogout}
        value="Logout"
        className="buttonTakeQuiz"
      />
      <h3>Avaliable Quiz</h3>
      <div class="containerCard">
        <div class="flipperCard">
          <div class="frontCard">
            <p class="captionCard">Quiz-1</p>
            <h3 style={{ textAlign: "center" }}>Simple CSE quiz</h3>
          </div>
          <div class="backCard">
            <a>
              <h1 className="h1Card">Quiz-1</h1>
            </a>
            <p class="dateCard">Posted:9/11/2020</p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <button
                className="buttonTakeQuiz"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLink
                  activeClassName="active"
                  to="/quiz"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Take Quiz
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
