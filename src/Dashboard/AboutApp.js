import { blue } from "@material-ui/core/colors";
import React from "react";
import "./Dashboard.css";

export default function() {
  return (
    <div className="cardHome">
      <div style={{ paddingLeft: 30 }}>
        <h2 style={{ textAlign: "center" }}>About This Web Application</h2>
        <p style={{ fontSize: 18, fontWeight: "bolder" }}>
          Name: Performance Based Adaptive Questioning
        </p>
        This Application is created on technology stack:
        <ol>
          <li>
            React JS uses HTML, CSS, JS(Babel), React Hooks and More <br />
            {"=>"}
            React JS consists of the front-end of both User and Admin Portal
          </li>
          <br />

          <li>
            Node JS is used to design a Application Programming Interface(API)
            <br />
            {"=>"}
            API is designed with Express, MongoDB, mongoose, JWTRoute and other
            modules
          </li>
        </ol>
        Front-End Application Links:
        <ol>
          <li>
            User:
            <a
              style={{ color: "blue" }}
              href="https://web-mini-adaptive-question.vercel.app/"
              target="_blank"
            >
              {" "}
              https://web-mini-adaptive-question.vercel.app/
            </a>
          </li>
          <li>
            Admin:
            <a
              style={{ color: "blue" }}
              href="https://web-mini-adaptive-question-admin.vercel.app/"
              target="_blank"
            >
              {" "}
              https://web-mini-adaptive-question-admin.vercel.app/{" "}
            </a>
          </li>
        </ol>
        API Link
        <ol>
          <li>
            API:{" "}
            <a
              style={{ color: "blue" }}
              href="https://********-********-api.********.com/"
              target="_blank"
            >
              https://********-********-api.********.com/
            </a>
          </li>
        </ol>
        Contributes
        <ol>
          <li>
            Aditya M
            <a
              style={{ color: "blue" }}
              href="https://github.com/adityam945"
              target="_blank"
            >
              {" "}
              Github
            </a>
          </li>
          <br />

          <li>
            Karthik GPN
            <a
              style={{ color: "blue" }}
              href="https://github.com/KarthikGPN"
              target="_blank"
            >
              {" "}
              Github
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
