import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tags from "./Tags.js";
import { useSpring, animated, config, useChain } from "react-spring";

function ProjectV2(props) {
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
      <div className="project-main">
        <div className="left">
          <h3 className="project-title">{props.title}</h3>
          <p className="project-description">{props.description}</p>
          <p>{props.username}</p>
          <p>{props.password}</p>
          <div className="buttons">
            <div className="button">
              <button
                class="btn project-btn"
                onClick={() => {
                  window.open(props.src);
                }}
              >
                <i class="fa fa-code"></i> Source
              </button>
            </div>
            <div className="button">
              <button
                class="btn project-btn"
                onClick={() => {
                  window.open(props.demo);
                }}
              >
                <i class="fa fa-desktop"></i> Demo
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="screenImage" src={props.img} />
        </div>
      </div>
    </animated.div>
  );
}

export default ProjectV2;
