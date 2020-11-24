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
const chatBotArray = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];
//
const know = {
  hello: "hi",
  "how are you?": "good",
  ok: ":)",
  hi: "aaajca",
};

const myChat = [
  {
    question: "Hi",
    answer: "Hello :)",
  },
];

function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [question, setquestion] = React.useState("");
  const [chatLogLength, setChatLogLength] = React.useState(1);
  const [chatLog, setChatLog] = React.useState([]);

  //
  const [theArray, setTheArray] = React.useState([]);
  const addEntryClick = () => {
    setTheArray([...theArray, `Entry ${theArray.length}`]);
  };
  const chat = (evt) => {
    evt.preventDefault();
    if (question in know) {
      //know[question]
      const JsonRes = {
        response: know[question],
        userResponse: question,
        id: chatLogLength,
      };

      setChatLog([...chatLog, JsonRes]);
      setChatLogLength(chatLogLength + 1);
    } else {
      setChatLog("Try other");
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
      <div class="cardHome">
        <h2 style={{ textAlign: "center" }}>
          Performance Based Adaptive Questioning
        </h2>
        <div class="containerHome">
          <p style={{ textAlign: "center" }}>
            An adaptive model of Questioning which selects questions based on
            performance results on first section
          </p>
        </div>
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
                <div style={{ overflowY: "scroll", height: 250 }}>
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
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setquestion(e.target.value)}
                  />
                  <input type="submit" value="Submit" />
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
