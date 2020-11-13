import React, { useState } from "react";
import "./Quiz.css";
import { Link, withRouter, NavLink } from "react-router-dom";

function App() {
  //
  const questions = [
    {
      questionText: "Nibble is the series of ……………… bits.",
      answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "12", isCorrect: false },
      ],
    },
    {
      questionText:
        "Consider the following statements: 1. A compiler is a computer program that transforms source code written in a programming language into a machine-code or lower-level form. 2. A compiler describes and explains in simpler language to make user’s work easy. Choose the correct answer from the codes given below:",
      answerOptions: [
        { answerText: "Both", isCorrect: true },
        { answerText: "only 1", isCorrect: false },
        { answerText: "only 2", isCorrect: false },
        { answerText: "none", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which among the following defines rules that all computers must follow to communicate with each other on the internet?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: false },
        { answerText: "HTML", isCorrect: false },
        { answerText: "TCP", isCorrect: true },
      ],
    },
    {
      questionText: "Which among the following was the first computer virus?",
      answerOptions: [
        { answerText: "Melissa", isCorrect: false },
        { answerText: "Elk", isCorrect: true },
        { answerText: "Conficker", isCorrect: false },
        { answerText: "I Love you", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which among the following services is not provided by the internet?",
      answerOptions: [
        { answerText: "Delivering Nike shoe", isCorrect: true },
        { answerText: "Money transfer", isCorrect: false },
        { answerText: "Making friendship", isCorrect: false },
        { answerText: "Booking of movie ticket", isCorrect: false },
      ],
    },
  ];
  const easyquestions = [
    {
      questionText: "The Third Generation Computer used …",
      answerOptions: [
        { answerText: " Transistors", isCorrect: false },
        { answerText: "Integrated circuit", isCorrect: true },
        { answerText: "Vacuum tube", isCorrect: false },
        { answerText: " Chip", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who among the following has developed the Perl programing language?",
      answerOptions: [
        { answerText: "Larry Wall", isCorrect: true },
        { answerText: "Guido van Rossum", isCorrect: false },
        { answerText: "Joe Armstrong", isCorrect: false },
        { answerText: " Yukihiro Matsumoto", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which among the following is the shortcut key to open a new window?",
      answerOptions: [
        { answerText: "Shift + N", isCorrect: false },
        { answerText: "Alt + N", isCorrect: false },
        { answerText: "Alt + F5", isCorrect: false },
        { answerText: "Ctrl + N", isCorrect: true },
      ],
    },
    {
      questionText: "The information stored in a computer is known as …",
      answerOptions: [
        { answerText: "Facts", isCorrect: false },
        { answerText: " Data", isCorrect: true },
        { answerText: "Directory or repository", isCorrect: false },
        { answerText: "Files", isCorrect: false },
      ],
    },
    {
      questionText: " Which among the following works faster?",
      answerOptions: [
        { answerText: "RAM", isCorrect: true },
        { answerText: "ROM", isCorrect: false },
        { answerText: "Processor", isCorrect: false },
        { answerText: "FlashDrive", isCorrect: false },
      ],
    },
  ];
  const hardquestion = [
    {
      questionText:
        " Which among the following is/are required to make a computer usable for a common person?",
      answerOptions: [
        {
          answerText: " A computer system with well-connected hardware",
          isCorrect: false,
        },
        {
          answerText: "A computer system with required hardware and software",
          isCorrect: true,
        },
        { answerText: "A computer system with scanner", isCorrect: false },
        { answerText: "A computer system with web cam", isCorrect: false },
      ],
    },
    {
      questionText:
        "If you restart your computer by switching it off (i.e. power cut), it is known as …",
      answerOptions: [
        { answerText: "Cold boot", isCorrect: true },
        { answerText: " Warm boot", isCorrect: false },
        { answerText: "Soft boot", isCorrect: false },
        { answerText: "Boot", isCorrect: false },
      ],
    },
    {
      questionText: "Which among the following is incorrectly matched?",
      answerOptions: [
        { answerText: "ALGOL-Algorithmic Language", isCorrect: false },
        { answerText: "COMAL-Common Algorithmic Language", isCorrect: false },
        { answerText: "APL-A Programing Language", isCorrect: false },
        { answerText: " SQL-Simply Qualified Language", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which among the following is the shortcut key to full screen the active window (basically web browser) in your computer system?",
      answerOptions: [
        { answerText: "F5", isCorrect: false },
        { answerText: " F11", isCorrect: true },
        { answerText: " F10", isCorrect: false },
        { answerText: " Ctrl + L", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which among the following is the shortcut key to search a file or folder in your computer system?",
      answerOptions: [
        { answerText: "F3", isCorrect: true },
        { answerText: " F10", isCorrect: false },
        { answerText: "F6", isCorrect: false },
        { answerText: "F1", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
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

  const handleShowRightAnswersEasy = () => {
    setShowRightAnwsersEasy(true);
    setShowScoreFinalEasy(false);
  };
  const handleShowRightAnswersHard = () => {
    setShowRightAnwsersHard(true);
    setShowScoreFinalHard(false);
  };
  return (
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
        {sectionOne && <h1>Section1</h1>}
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
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                    <br />
                    {currentQuestion >= 1 && (
                      <button
                        className="buttonQuizPrevious"
                        onClick={() =>
                          handlePreviousOptionClick(currentQuestion)
                        }
                      >
                        Prev question
                      </button>
                    )}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="buttonQuiz"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {hard && <h1>Hard Section 2</h1>}
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
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestionHard + 1}</span>/
                    {hardquestion.length}
                  </div>
                  <div className="question-text">
                    {hardquestion[currentQuestionHard].questionText}
                    <br />
                    {currentQuestionHard >= 1 && (
                      <button
                        className="buttonQuizPrevious"
                        onClick={() =>
                          handlePreviousOptionClickHard(currentQuestionHard)
                        }
                      >
                        Prev question
                      </button>
                    )}
                  </div>
                </div>
                <div className="answer-section">
                  {hardquestion[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="buttonQuiz"
                        onClick={() =>
                          handleAnswerOptionClickHard(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        )}
        {easy && <h1>Easy Section 2</h1>}
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
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestionEasy + 1}</span>/
                    {easyquestions.length}
                  </div>
                  <div className="question-text">
                    {easyquestions[currentQuestionEasy].questionText}
                    <br />
                    {currentQuestionEasy >= 1 && (
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
                </div>
                <div className="answer-section">
                  {easyquestions[currentQuestionEasy].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="buttonQuiz"
                        onClick={() =>
                          handleAnswerOptionClickEasy(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
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
            style={{ display: "flex", flexDirection: "column", marginTop: 60 }}
          >
            <p>
              <h2>Section 1</h2>
              You scored {score} out of {questions.length} <br />
              <h2> Section 2</h2>
              You scored {scoreHard} out of {questions.length} <br />
            </p>
            <div>
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
  );
}

export default withRouter(App);
