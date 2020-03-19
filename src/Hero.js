import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Resume from "./resume.pdf";
import { useSpring, animated, config, useChain } from "react-spring";

function Hero() {
  const fadeInRef = useRef();
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    ref: fadeInRef
  });

  const dropDownRef = useRef();
  const dropDown = useSpring({
    to: { top: 20, opacity: 1 },
    from: { top: 0, opacity: 0 },
    config: { duration: 500 },
    ref: dropDownRef
  });

  const slideInRef = useRef();
  const slideIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },

    config: { duration: 1000 },
    ref: slideInRef
  });

  useChain([fadeInRef, slideInRef, dropDownRef]);

  return (
    <React.Fragment>
      <animated.div className="nav" style={dropDown}>
        <a href={Resume}>RESUME</a>
      </animated.div>
      <div className="Hero">
        <animated.div style={fadeIn}>
          <h1>Rhys Maiden</h1>
          <p>
            I’m an enthusiastic full-stack web and mobile developer who brings
            ideas to life.
          </p>
        </animated.div>

        <animated.div className="hero-buttons" style={slideIn}>
          <button
            class="btn project-btn"
            onClick={() => {
              window.open("mailto:maidenrhys@gmail.com");
            }}
          >
            <i class="fa fa-address-book"></i> Get in touch
          </button>
        </animated.div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
