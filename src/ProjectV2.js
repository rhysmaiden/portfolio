import React from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

function ProjectV2(props) {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
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
          <img className="screenImage" src={props.img} alt="img" />
        </div>
      </div>
    </animated.div>
  );
}

export default ProjectV2;
