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
`;

export const QuizColorStyle = createGlobalStyle`
.appQuiz {
    background: ${({ theme }) => theme.QuizCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
