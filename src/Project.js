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
        <h4>Back-end: {props.backEnd}</h4>
        <p>{props.backEndDescription}</p>
      </div>

      <div className="preview">
        <img src={props.gif} alt="animated" className="gif"></img>
      </div>
      <div className="buttons">
        {props.frontEndSrc && (
          <button
            onclick={() => {
              window.location.href = props.frontEndSrc;
            }}
          >
            <i className="fas fa-code fa-large icon"></i>
            <p> Front End Source</p>
          </button>
        )}
        {props.backEndSrc && (
          <button src={props.backEndSrc}>
            <i className="fas fa-code fa-large icon"></i>
            <p> Back End Source</p>
          </button>
        )}
        {props.src && (
          <button>
            <i className="fas fa-code fa-large icon"></i>
            <p>Source</p>
          </button>
        )}
        <button>
          <i className="fas fa-desktop icon"></i>
          <p>Demo</p>
        </button>
      </div>
    </div>
  );
}

export default Project;
