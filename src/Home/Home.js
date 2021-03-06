import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import comicImage from "../assets/beautiful.jpg";
import comicImage1 from "../assets/bang.png";
import comicImage2 from "../assets/quiz-icon.png";
import { HomeChatColor } from "../Themes/globalStyles";
import SendIcon from "@material-ui/icons/Send";
import { Grid } from "@material-ui/core";

import { Fade, Avatar } from "@material-ui/core";
var style = {
  backgroundColor: "#b0bec5",
  borderTop: "1px solid #E7E7E7",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  paddingTop: 0,
  marginTop: 40,
};
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black",
  },
}));
//
//
//
const know = {
  hi: "Hello,How can I help You",
  yo: "Hello,How can I help You",
  hello: "Hello,How can I help You",
  "how to login?":
    "Login is done by the admin,Please kindly contact your Teacher.",
  "login?":
    "Login is done through the admin,Please kindly contact your Teacher.",
  "what can this app do?":
    "It provides certain MCQ questions that students should answer within the options and at final it calculate the total marks that student has scorred.",
  "do?":
    "It provides certain MCQ questions that students should answer within the options and at final it calculate the total marks that student has scorred.",
  "who can attend?": "Everyone whose account has been created by admin.",
  "attend?": "Everyone whose account has been created by admin.",
  "what kind of topics are there?":
    "Topics regarding the Computer Science and GeneralKnowledge",
  "there?": "Topics regarding the Computer Science and GeneralKnowledge",
  "what are the types of quiz questions can we expect?":
    "There will be three set of questions Easy,Moderate and Difficult.Easy questions is common to all.If the student gets less than average marks of given set of questions then he gets moderate questions/If student get's more than average marks in Easy questions he gets Difficult Question.",
  expect:
    "There will be three set of questions Easy,Moderate and Difficult.Easy questions is common to all.If the student gets less than average marks of given set of questions then he gets moderate questions/If student get's more than average marks in Easy questions he gets Difficult Question.",
  "when we will get to know the marks of the Quiz?":
    "You will get the marks instantly after you finish answering to all questions.",
  "quiz?":
    "You will get the marks instantly after you finish answering to all questions.",
  "is there any negative marks for answered question?":
    "No! there is no negative marks for any set of questions.",
  "questions?": "No! there is no negative marks for any set of questions.",
  "is there dark mode?":
    "Yes,After Login there is a button on top right you can use that.",
  "dark mode?":
    "Yes,After Login there is a button on top right you can use that.",
  "what is the use of dashboard?":
    "Dashboard is the place where you can login to attend quiz.",
  "dashboard?": "Dashboard is the place where you can login to attend quiz.",
  "is there any timer for each quiz-question?":
    "Yes,there will be a certain limited time for each quiz-questions.",
  "quiz-question?":
    "Yes,there will be a certain limited time for each quiz-questions.",
  "what do we do if we forgot password?":
    "You need to contact to the respected admin/teacher.",
  "password?": "You need to contact to the respected admin/teacher.",
  "is the username and password is case-sensitive?":
    "Yes,It is case-sensitive.",
  "case-sensitive?": "Yes,It is case-sensitive.",
  "is the topic of quiz is choosen by student or teacher?":
    "It is choosen and set by the Teacher.",
  "teacher?": "It is choosen and set by the Teacher.",
  "can student see the previous attended quiz marks?":
    "Yes,There will be track of every marks that have been previously attended by the students.",
  "marks?":
    "Yes,There will be track of every marks that have been previously attended by the students.",
  "is it loaded only on mobile/pc?": "It can be loaded both on Mobile/PC",
  "mobile/pc?": "It can be loaded both on Mobile/PC",
};

function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [question, setquestion] = React.useState("");
  const [questionMod, setquestionMod] = React.useState("");

  const [chatLogLength, setChatLogLength] = React.useState(1);
  const [chatLog, setChatLog] = React.useState([
    {
      response: "Hello, I am PebaQ!, your Chat assistant",
      userResponse: "",
      id: 0,
    },
  ]);

  //
  const [theArray, setTheArray] = React.useState([]);
  const addEntryClick = () => {
    setTheArray([...theArray, `Entry ${theArray.length}`]);
  };
  const chat = async (evt) => {
    evt.preventDefault();
    setquestion(question.trim());

    await subChat();
  };
  const subChat = () => {
    if (question === "") {
      const JsonRes = {
        response: "Ask me a question I cant read answer blank questions :(",
        userResponse: question,
        id: chatLogLength,
      };

      setChatLog([...chatLog, JsonRes]);
      setChatLogLength(chatLogLength + 1);
    } else if (question in know) {
      //know[question]
      const JsonRes = {
        response: know[question.trim()],
        userResponse: question,
        id: chatLogLength,
      };

      setChatLog([...chatLog, JsonRes]);
      setChatLogLength(chatLogLength + 1);
    } else {
      const JsonRes = {
        response: "I did'nt get you",
        userResponse: question,
        id: chatLogLength,
      };

      setChatLog([...chatLog, JsonRes]);
      setChatLogLength(chatLogLength + 1);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HomeChatColor>
      <div style={{ height: "100%", marginBottom: 140 }}>
        <article class="comic">
          <div class="panel">
            <p class="text top-left textBold" style={{ fontSize: 18 }}>
              {" "}
              Welocome to{" "}
            </p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1 style={{ color: "black", fontSize: 25 }}>
                Performance Based Adaptive Questioning
              </h1>
            </div>

            <p class="text bottom-right">
              Experience New Approach of Questioning
            </p>
          </div>
          <div class="panel">
            <p class="text top-left">Evaluate </p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1 style={{ color: "black", fontSize: 25 }}>
                🎭 Your Performance{" "}
              </h1>
            </div>
            <p class="text bottom-right">...it's fun</p>
          </div>
          <div class="panel">
            <p class="top-left text">Select from</p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1 style={{ color: "black", fontSize: 25 }}>
                Wide Range of Challenges
              </h1>
            </div>
            <p class="text bottom-right">To Solve</p>
          </div>
          <div class="panel">
            <img src={comicImage} height="100%" width="100%" />
          </div>
          <div class="panel">
            {" "}
            <p class="top-left text">Magic happens</p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1 style={{ color: "black", fontSize: 25 }}>
                Difficulty of Questions Adapt
              </h1>
            </div>
            <p class="text bottom-right">Based on Your Performance</p>
          </div>
          <div class="panel">
            <p class="top-left text">More Queries</p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1 style={{ color: "black", fontSize: 25 }}>
                Chat with Our Assistant <br /> ~PebaQ!
              </h1>
            </div>
            <p class="text bottom-right">PebaQ!</p>
          </div>
          <div class="panel">
            <p class="top-left text">And...</p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontSize: 25,
                  textDecoration: "underline",
                  textDecorationColor: "red",
                }}
              >
                Have Fun Answering....!
              </h1>
            </div>
            <p class="text bottom-right">Every thing counts</p>
          </div>
          <div class="panel">
            {" "}
            <img src={comicImage1} height="100%" width="100%" />
          </div>
          <div class="panel">
            <p class="top-left text">Finally....</p>
            <div
              className="textCenter"
              style={{
                textalignvertical: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontSize: 25,
                }}
              >
                {" "}
                Accept the Challenge!
                <br />
                <a
                  className="atext"
                  href="/login"
                  style={{
                    textDecoration: "none",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  Click here{" "}
                </a>
              </h1>
            </div>
            <p class="text bottom-right">THE END</p>
          </div>
        </article>
      </div>
      <div style={style}>
        <div className="" style={{ marginBottom: 10 }}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <main className="mainFooter">
                <p className="pFooter">
                  Performance Based
                  <br /> Adaptive Questioning
                </p>
              </main>
            </Grid>
          </Grid>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: 30,
            bottom: 40,
          }}
        >
          <div>
            <a
              href="https://web-mini-adaptive-question-admin.vercel.app/"
              className="atext"
              style={{ marginLeft: 20, fontSize: 25, bottom: 40 }}
            >
              {" "}
              Admin Login
            </a>
          </div>
          <div
            onClick={handleOpen}
            className="button-radiant"
            style={{ bottom: 40 }}
          >
            Chat with PebaQ!
          </div>
        </div>

        {/*         




         */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div>
              <div className={classes.paper}>
                <div
                  className="chat"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div>
                    <Avatar>
                      <img src={comicImage2} />
                    </Avatar>
                  </div>
                  <div>
                    <p> Hi, I'm your chat assistant</p>
                  </div>
                </div>
                <div>
                  <div style={{ overflowY: "scroll", height: 250, width: 400 }}>
                    <div>
                      {chatLog.map((item) => (
                        <div>
                          <p style={{ textAlign: "right" }}>
                            {item.userResponse}
                          </p>
                          <p style={{ textAlign: "left" }}>{item.response}</p>
                        </div>
                      ))}
                      <br />
                    </div>
                  </div>
                  <form
                    onSubmit={chat}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <input
                      type="text"
                      value={question}
                      onChange={(e) =>
                        setquestion(e.target.value.toLowerCase())
                      }
                      style={{ width: "70%", height: 30 }}
                    />

                    <button type="submit" style={{ width: "25%" }}>
                      <SendIcon />{" "}
                    </button>
                  </form>
                </div>
                <div>
                  Ask Me!:
                  <ol>
                    <li>what can this app do?</li>
                    <li>login? or how to login?</li>
                    <li>what kind of topics are there?</li>
                    <li>what are the types of quiz questions can we expect?</li>
                  </ol>
                </div>
                <div
                  style={{ cursor: "pointer", marginTop: 40 }}
                  onClick={handleClose}
                >
                  close
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </HomeChatColor>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Home;
