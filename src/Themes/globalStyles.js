import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

export const LoginCardColor = styled.div`
  .app {
    background: ${({ theme }) => theme.loginCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }
  .main1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.loginCardBg};
  }
`;

export const LogColor = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.loginCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

export const QuizColor = styled.div`
.appQuiz {
  background-color: ${({ theme }) => theme.QuizCardBg}
  min-width: 800px;
  min-height: 200px;
  max-width: 800px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
}
.bodyQuiz {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
}
.appCardQuiz {
  background-color: ${({ theme }) => theme.loginCardBg}
  min-width: 800px;
  min-height: 200px;
  max-width: 800px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-evenly;
}
`;

export const QuizColorStyle = createGlobalStyle`
.appQuiz {
    background: ${({ theme }) => theme.QuizCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .appCardQuiz {
    background: ${({ theme }) => theme.loginCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid;
  border-radius: 3px;
  padding: 10px;
`;

export const QuizCardColor = styled.div`
  .cardQuiz {
    background: ${({ theme }) => theme.loginCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }
  .buttonTakeQuizSyle {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 145x;
    letter-spacing: 1px;
    position: relative;
    background-color: #757575;
    border: none;
    color: black;
    padding: 10px;
    text-align: center;
    transition-duration: 0.4s;
    border-radius: 4px;
    margin: 30px;
  }
  .buttonTakeQuiz {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 145x;
    letter-spacing: 1px;
    position: relative;
    background-color: #757575;
    border: none;
    color: black;
    padding: 10px;
    text-align: center;
    transition-duration: 0.4s;
    border-radius: 4px;
    margin: 30px;
  }
`;

export const ProfileCard = styled.div`
  .mainProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.profileCardBg};
  }
  .cardProfile {
    background: ${({ theme }) => theme.profileCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }

  .grounded-radiants {
    position: relative;
    border: 4px solid transparent;
    border-radius: 16px;
    background: linear-gradient(#9ccc65, #33691e);
    background-clip: padding-box;
    padding: 10px;
    box-shadow: 0 3px 9px black, inset 0 0 9px white;
    left: 0px;
    margin: 0px;
    margin-right: 10px;
  }
`;

export const HomeChatColor = styled.div`
  .chat {
    background: ${({ theme }) => theme.homeChatBg};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
    border: "2px solid #000";
  }
`;
