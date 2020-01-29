import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated, config } from "react-spring";

function Hero() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });

  return (
    <animated.div className="Hero" style={fadeIn}>
      <h1>Hi, I'm Rhys</h1>
      <p>
        I’m an enthusiastic full-stack web and mobile developer who brings ideas
        to life.
      </p>
      <div className="hero-buttons">
        <button class="btn inverse" onClick={() => {}}>
          <i class="fa fa-github-alt"></i> GitHub
        </button>
        <button class="btn inverse" onClick={() => {}}>
          <i class="fa fa-file-pdf"></i> Resume
        </button>
        <button class="btn inverse" onClick={() => {}}>
          <i class="fa fa-address-book"></i> Contact Me
        </button>
      </div>
      <div className="bottom">
        <div
          class="arrow bounce"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              left: 100,
              behavior: "smooth"
            });
          }}
        >
          <p style={{ fontSize: 16 }}>PROJECTS</p>
          <a class="fa fa-arrow-down fa-1x" href="#"></a>
        </div>
      </div>
    </animated.div>
  );
}

export default Hero;
