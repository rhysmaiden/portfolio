import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated, config, useChain } from "react-spring";

function Project(props) {
  const [visible, setVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  const dropDown = useSpring({
    to: { top: 20 },
    from: { top: -100 },
    config: { duration: 500 }
  });

  const slideInRef = useRef();
  const slideIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <animated.div className="Project" style={fadeIn}>
      <h1 className="project-title">{props.title}</h1>

      <div className="project-content">
        <div className="text">
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
      </div>
      <div className="buttons">
        {props.frontEndSrc && (
          <button
            class="btn project-btn"
            onClick={() => {
              window.open(props.frontEndSrc);
            }}
          >
            <i class="fa fa-code"></i> Front-End Source
          </button>
        )}

        {props.backEndSrc && (
          <button
            class="btn project-btn"
            onClick={() => {
              window.open(props.backEndSrc);
            }}
          >
            <i class="fa fa-code"></i> Back-End Source
          </button>
        )}
        {props.src && (
          <button
            class="btn project-btn"
            onClick={() => {
              window.open(props.src);
            }}
          >
            <i class="fa fa-code"></i> Source
          </button>
        )}
        <button
          class="btn project-btn"
          onClick={() => {
            window.open(props.demo);
          }}
        >
          <i class="fa fa-desktop"></i> Demo
        </button>
      </div>
    </animated.div>
  );
}

export default Project;
