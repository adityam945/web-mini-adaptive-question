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
  display: flex;
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
