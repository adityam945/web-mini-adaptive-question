import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ChatBot from "react-simple-chatbot";

import { Fade, Avatar } from "@material-ui/core";
var style = {
  backgroundColor: "gray",
  borderTop: "1px solid #E7E7E7",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "auto",
  width: "100%",
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
  },
}));
//
//
//
const know = {
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
    { response: "Hello, I am your Chat assistant", userResponse: "", id: 0 },
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
    if (question in know) {
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
    <div>
      <div>
        <article class="comic">
          <div class="panel">
            <p class="text top-left">Welocome </p>

            <p class="text bottom-right">...something amazing happened</p>
          </div>
          <div class="panel">
            <p class="text top-left">Try resizing...</p>
            <p class="text bottom-right">...it's responsive</p>
          </div>
          <div class="panel">
            <p class="top-left text">A speech bubble</p>
          </div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel">
            <p class="text bottom-right">THE END</p>
          </div>
        </article>
      </div>
      <div style={style}>
        <h3 style={{ textAlign: "center" }}>
          Performance Based Adaptive Questioning
        </h3>

        <div onClick={handleOpen} className="button-radiant">
          ChatBot
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
            <div className={classes.paper}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <Avatar>RR</Avatar>
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
                <form onSubmit={chat}>
                  <div>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) =>
                        setquestion(e.target.value.toLowerCase())
                      }
                      style={{ width: "70%" }}
                    />
                    <input
                      type="submit"
                      value="Talk"
                      style={{ width: "25%" }}
                    />
                  </div>
                </form>
              </div>
              <div
                style={{ cursor: "pointer", marginTop: 40 }}
                onClick={handleClose}
              >
                close
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
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
