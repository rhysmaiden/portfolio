import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Project(props) {
  return (
    <div className="Project">
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h4>Front-end: {props.frontEnd}</h4>
        <p>{props.frontEndDescription}</p>
        {props.backEnd && (
          <React.Fragment>
            <h4>Back-end: {props.backEnd}</h4>
            <p>{props.backEndDescription}</p>
          </React.Fragment>
        )}
      </div>

      <div className="preview">
        <img src={props.gif} alt="animated" className="gif"></img>
      </div>
      <div className="buttons">
        {props.frontEndSrc && (
          <button
            class="btn"
            onClick={() => {
              window.open(props.frontEndSrc);
            }}
          >
            <i class="fa fa-code"></i> Front-End Source
          </button>
        )}

        {props.backEndSrc && (
          <button
            class="btn"
            onClick={() => {
              window.open(props.backEndSrc);
            }}
          >
            <i class="fa fa-code"></i> Back-End Source
          </button>
        )}
        {props.src && (
          <button
            class="btn"
            onClick={() => {
              window.open(props.src);
            }}
          >
            <i class="fa fa-code"></i> Source
          </button>
        )}
        <button
          class="btn"
          onClick={() => {
            window.open(props.demo);
          }}
        >
          <i class="fa fa-desktop"></i> Demo
        </button>
      </div>
    </div>
  );
}

export default Project;
