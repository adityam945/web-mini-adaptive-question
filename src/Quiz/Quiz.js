import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { withRouter, NavLink } from "react-router-dom";
import { QuizColor, QuizColorStyle } from "../Themes/globalStyles";
import { useLocation } from "react-router-dom";

function App(props) {
  const location = useLocation();
  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  //
  const [startQuiz, setStartQuiz] = useState(false);
  //
  const [hard, setHard] = useState(false);
  const [showScoreHard, setShowScoreHard] = useState(false);
  const [scoreHard, setScoreHard] = useState(0);
  const [currentQuestionHard, setCurrentQuestionHard] = useState(0);
  const [showScoreFinalHard, setShowScoreFinalHard] = useState(false);

  //
  const [easy, setEasy] = useState(false);
  const [showScoreEasy, setShowScoreEasy] = useState(false);
  const [scoreEasy, setScoreEasy] = useState(0);
  const [currentQuestionEasy, setCurrentQuestionEasy] = useState(0);
  const [showScoreFinalEasy, setShowScoreFinalEasy] = useState(false);

  //
  const [sectionOne, setSectionOne] = useState(true);
  //
  const [showRightAnwsersEasy, setShowRightAnwsersEasy] = useState(false);
  const [showRightAnwsersHard, setShowRightAnwsersHard] = useState(false);
  //
  //
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //
  const [questions, setQuestions] = useState([]);
  const [easyquestions, setEasyQuestions] = useState([]);
  const [hardquestion, setHardQuestion] = useState([]);
  const [completeArray, setCompleteArray] = useState([]);

  //
  //
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://adaptive-question-api.herokuapp.com/quiz/${id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuestions(result.moderateQuestions);
          setEasyQuestions(result.easyQuestions);
          setHardQuestion(result.hardQuestions);
          setCompleteArray(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousOptionClick = (thisQuestion) => {
    const nextQuestion = thisQuestion - 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleHardSection = () => {
    setHard(true);
    setSectionOne(false);
  };

  const handleEasySection = () => {
    setEasy(true);
    setSectionOne(false);
  };
  //
  const handleAnswerOptionClickEasy = (isCorrect) => {
    if (isCorrect) {
      setScoreEasy(score + 1);
    }

    const nextQuestion = currentQuestionEasy + 1;
    if (nextQuestion < easyquestions.length) {
      setCurrentQuestionEasy(nextQuestion);
    } else {
      setShowScoreEasy(true);
    }
  };

  const handleAnswerOptionClickHard = (isCorrect) => {
    if (isCorrect) {
      setScoreHard(score + 1);
    }

    const nextQuestion = currentQuestionHard + 1;
    if (nextQuestion < easyquestions.length) {
      setCurrentQuestionHard(nextQuestion);
    } else {
      setShowScoreHard(true);
    }
  };
  //
  const finalScoreEasy = () => {
    setShowScoreFinalEasy(true);
    setEasy(false);
  };

  const finalScoreHard = () => {
    setShowScoreFinalHard(true);
    setHard(false);
  };
  //
  const handlePreviousOptionClickHard = (thisQuestion) => {
    const nextQuestion = thisQuestion - 1;
    if (nextQuestion < hardquestion.length) {
      setCurrentQuestionHard(nextQuestion);
    }
  };

  const handlePreviousOptionClickEasy = (thisQuestion) => {
    const nextQuestion = thisQuestion - 1;
    if (nextQuestion < easyquestions.length) {
      setCurrentQuestionHard(nextQuestion);
    }
  };
  const handleShowRightAnswersEasy = () => {
    setShowRightAnwsersEasy(true);
    setShowScoreFinalEasy(false);
  };
  const handleShowRightAnswersHard = () => {
    setShowRightAnwsersHard(true);
    setShowScoreFinalHard(false);
  };
  //
  //
  const quizName = location.state.quizName;
  const id = location.state.id;
  const quizDescription = location.state.quizDescription;

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
      <QuizColor>
        <QuizColorStyle />
        {startQuiz ? (
          <div>
            <div></div>

            <div>
              <button className="buttonGoBAck">
                <NavLink
                  activeClassName="active"
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Exit Quiz
                </NavLink>
              </button>

              <div className="bodyQuiz">
                {sectionOne && (
                  <div>
                    <h1>Section 1</h1>
                    <div style={{ marginBottom: 20 }}>
                      Questions in this section: {questions.length}
                    </div>
                  </div>
                )}
                {sectionOne && (
                  <div className="appQuiz">
                    {showScore ? (
                      <div className="score-section">
                        You scored {score} out of {questions.length}
                        <br />
                        {score >= 3 && (
                          <div>
                            <button
                              className="buttonNextSection"
                              onClick={() => handleHardSection()}
                            >
                              Next Section
                            </button>
                          </div>
                        )}
                        {score < 3 && (
                          <div>
                            <button
                              className="buttonNextSection"
                              onClick={() => handleEasySection()}
                            >
                              Next Section
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <div className="question-section">
                          <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/
                            {questions.length}
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div
                              style={{
                                minWidth: "65%",

                                marginRight: 20,
                                textAlign: "justify",
                              }}
                            >
                              {questions[currentQuestion].questionText} <br />
                              {currentQuestion >= 1 && (
                                <button
                                  className="buttonQuizPrevious"
                                  onClick={() =>
                                    handlePreviousOptionClick(currentQuestion)
                                  }
                                >
                                  Previous question
                                </button>
                              )}
                            </div>
                            <div
                              style={{
                                borderRight: 2,
                                borderRightStyle: "solid",
                              }}
                            />
                            {/* 

                       */}
                            <div className="answer-section">
                              {questions[currentQuestion].answerOptions.map(
                                (answerOption) => (
                                  <button
                                    className="buttonQuiz"
                                    onClick={() =>
                                      handleAnswerOptionClick(
                                        answerOption.isCorrect
                                      )
                                    }
                                  >
                                    {answerOption.answerText}
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {hard && (
                  <div>
                    <h1>Hard Section 2</h1>
                    <div style={{ marginBottom: 20 }}>
                      Questions in this section: {hardquestion.length}
                    </div>
                  </div>
                )}
                {hard && (
                  <div className="appQuiz">
                    {showScoreHard ? (
                      <div className="score-section">
                        You scored {scoreHard} out of {hardquestion.length}
                        <br />
                        <button
                          className="buttonNextSection"
                          onClick={() => finalScoreHard()}
                        >
                          Final Score
                        </button>{" "}
                      </div>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <div className="question-section">
                          <div className="question-count">
                            <span>Question {currentQuestionHard + 1}</span>/
                            {hardquestion.length}
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div
                              style={{
                                minWidth: "65%",

                                marginRight: 20,
                                textAlign: "justify",
                              }}
                            >
                              {hardquestion[currentQuestionHard].questionText}{" "}
                              <br />
                              {currentQuestionHard >= 1 && (
                                <button
                                  className="buttonQuizPrevious"
                                  onClick={() =>
                                    handlePreviousOptionClickHard(
                                      currentQuestionHard
                                    )
                                  }
                                >
                                  Previous question
                                </button>
                              )}
                            </div>
                            <div
                              style={{
                                borderRight: 2,
                                borderRightStyle: "solid",
                              }}
                            />
                            {/* 

                     */}
                            <div className="answer-section">
                              {hardquestion[
                                currentQuestionHard
                              ].answerOptions.map((answerOption) => (
                                <button
                                  className="buttonQuiz"
                                  onClick={() =>
                                    handleAnswerOptionClickHard(
                                      answerOption.isCorrect
                                    )
                                  }
                                >
                                  {answerOption.answerText}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {easy && (
                  <div>
                    <h1>Easy Section 3</h1>
                    <div style={{ marginBottom: 20 }}>
                      Questions in this section: {easyquestions.length}
                    </div>
                  </div>
                )}
                {easy && (
                  <div className="appQuiz">
                    {showScoreEasy ? (
                      <div className="score-section">
                        You scored {scoreEasy} out of {questions.length}
                        <br />
                        <button
                          className="buttonNextSection"
                          onClick={() => finalScoreEasy()}
                        >
                          Final Score
                        </button>
                      </div>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <div className="question-section">
                          <div className="question-count">
                            <span>Question {currentQuestionEasy + 1}</span>/
                            {easyquestions.length}
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div
                              style={{
                                minWidth: "65%",

                                marginRight: 20,
                                textAlign: "justify",
                              }}
                            >
                              {easyquestions[currentQuestionEasy].questionText}{" "}
                              <br />
                              {currentQuestionEasy >= 1 && (
                                <button
                                  className="buttonQuizPrevious"
                                  onClick={() =>
                                    handlePreviousOptionClickEasy(
                                      currentQuestionEasy
                                    )
                                  }
                                >
                                  Previous question
                                </button>
                              )}
                            </div>
                            <div
                              style={{
                                borderRight: 2,
                                borderRightStyle: "solid",
                              }}
                            />
                            {/* 

                     */}
                            <div className="answer-section">
                              {easyquestions[
                                currentQuestionEasy
                              ].answerOptions.map((answerOption) => (
                                <button
                                  className="buttonQuiz"
                                  onClick={() =>
                                    handleAnswerOptionClickEasy(
                                      answerOption.isCorrect
                                    )
                                  }
                                >
                                  {answerOption.answerText}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {showScoreFinalEasy && (
                  <div
                    className="appQuiz"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      <h2>Section 1</h2>
                      You scored {score} out of {questions.length} <br />
                      <h2> Section 2</h2>
                      You scored {scoreEasy} out of {questions.length} <br />
                    </p>
                    <div>
                      <h2> Total Score is {score + scoreEasy}</h2>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <button
                        className="buttonNextSection"
                        onClick={() => window.location.reload()}
                      >
                        Retake Test
                      </button>
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <button
                        className="buttonNextSection"
                        onClick={() => handleShowRightAnswersEasy()}
                      >
                        Show Answers
                      </button>
                    </div>
                  </div>
                )}
                {showScoreFinalHard && (
                  <div
                    className="appQuiz"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      <h2>Section 1</h2>
                      You scored {score} out of {questions.length} <br />
                      <h2> Section 2</h2>
                      You scored {scoreHard} out of {questions.length} <br />
                    </p>
                    <div>
                      <h2> Total Score is {score + scoreHard}</h2>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <button
                        className="buttonNextSection"
                        onClick={() => window.location.reload()}
                      >
                        Retake Test
                      </button>
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <button
                        className="buttonNextSection"
                        onClick={() => handleShowRightAnswersHard()}
                      >
                        Show Answers
                      </button>
                    </div>
                  </div>
                )}
                {showRightAnwsersEasy && (
                  <div
                    className="appQuiz"
                    style={{ flexDirection: "column", marginTop: 60 }}
                  >
                    <h2> Section 1</h2>
                    {questions.map((item) => (
                      <div>
                        {item.questionText}
                        <br />

                        {item.answerOptions.map((item1) => (
                          <div>
                            {item1.isCorrect === true ? (
                              <p style={{ color: "green" }}>
                                {item1.answerText} {"=>"}true
                              </p>
                            ) : (
                              <p style={{ color: "red" }}>{item1.answerText}</p>
                            )}
                          </div>
                        ))}
                        <br />
                      </div>
                    ))}
                    <h2> Section 2</h2>
                    {easyquestions.map((item) => (
                      <div>
                        {item.questionText}
                        <br />

                        {item.answerOptions.map((item1) => (
                          <div>
                            {item1.isCorrect === true ? (
                              <p style={{ color: "green" }}>
                                {item1.answerText} {"=>"}true
                              </p>
                            ) : (
                              <p style={{ color: "red" }}>{item1.answerText}</p>
                            )}
                          </div>
                        ))}
                        <br />
                      </div>
                    ))}
                  </div>
                )}
                {showRightAnwsersHard && (
                  <div className="appQuiz" style={{ flexDirection: "column" }}>
                    <h2> Section 1</h2>
                    {questions.map((item) => (
                      <div>
                        {item.questionText}
                        <br />

                        {item.answerOptions.map((item1) => (
                          <div>
                            {item1.isCorrect === true ? (
                              <p style={{ color: "green" }}>
                                {item1.answerText} {"=>"}true
                              </p>
                            ) : (
                              <p style={{ color: "red" }}>{item1.answerText}</p>
                            )}
                          </div>
                        ))}
                        <br />
                      </div>
                    ))}
                    <h2> Section 2</h2>
                    {hardquestion.map((item) => (
                      <div>
                        {item.questionText}
                        <br />

                        {item.answerOptions.map((item1) => (
                          <div>
                            {item1.isCorrect === true ? (
                              <p style={{ color: "green" }}>
                                {item1.answerText} {"=>"}true
                              </p>
                            ) : (
                              <p style={{ color: "red" }}>{item1.answerText}</p>
                            )}
                          </div>
                        ))}
                        <br />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="bodyQuiz"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <div className="appCardQuiz">
              <h2 style={{ textAlign: "center" }}> {quizName}</h2>
              <button
                onClick={() => setStartQuiz(true)}
                className="buttonTakeQuiz"
              >
                Start
              </button>
            </div>
          </div>
        )}
      </QuizColor>
    );
  }
}

export default withRouter(App);
