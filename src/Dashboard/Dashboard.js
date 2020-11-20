import React, { useEffect, useState } from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "./Dashboard.css";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import { QuizCardColor, QuizColorStyle } from "../Themes/globalStyles";

function Dashboard(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //
  const [quizQuestions, setQuizQuestions] = useState([]);
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  useEffect(() => {
    fetch("https://adaptive-question-api.herokuapp.com/quiz/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuizQuestions(result.Question);
        },

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
      <QuizCardColor>
        <div>
          <h2 style={{ textAlign: "center" }}>
            Welcome {user.name}!<br />
          </h2>
          <br />
          <input
            type="button"
            onClick={handleLogout}
            value="Logout"
            className="buttonTakeQuiz"
          />
          {quizQuestions.map((item) => (
            <div class="cardQuiz">
              <h2 class="" style={{ textAlign: "center" }}>
                {item.quizNo}
              </h2>
              <h2 style={{ textAlign: "center" }}>{item.quizName}</h2>
              <div class="containerQuiz">
                <p style={{ textAlign: "center" }}>{item.quizDescription}</p>
              </div>
              <button
                className="buttonTakeQuizSyle"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Link
                  activeClassName="active"
                  to={{ pathname: "/quiz", state: { id: item._id } }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Solve
                </Link>
              </button>
            </div>
          ))}

          <button
            style={{
              position: "absolute",
              width: 100,
              height: 50,
              bottom: 40,
              right: 60,
              backgroundColor: "green",
              zIndex: 100,
              borderRadius: 10,
              borderColor: "red",
              border: "solid",
              borderWidth: 8,
            }}
          >
            ChatBot
          </button>
        </div>
      </QuizCardColor>
    );
  }
}

export default Dashboard;
