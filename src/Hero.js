import React, { useRef, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Resume from "./resume.pdf";
import { useSpring, animated, config, useChain } from "react-spring";

function Hero() {

  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  const fadeInRef = useRef();
  const fadeIn = useSpring({
    to: { opacity: 1 },
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

  const slideOut = useSpring({
    to: { opacity: 0 },
    opacity: 1,

    config: { duration: 1000 }
  });

  useChain([fadeInRef, slideInRef, dropDownRef]);

  return (
    <React.Fragment>
      
      <div className="Hero">
        <div></div>
        <div>
          <animated.div style={slideIn} className="heroText">
            <h1>Rhys Maiden</h1>
            <p>
              I’m an enthusiastic full-stack web and mobile developer who brings
              ideas to life.
            </p>
          </animated.div>

          <animated.div className="hero-buttons" style={slideIn}>
            <button
              class="btn project-btn waves-effect"
              onClick={() => {
                window.open("mailto:maidenrhys@gmail.com");
              }}
            >
              Get in touch
            </button>
            <button
              class="btn project-btn waves-effec"
              onClick={() => {
                window.open(Resume);
              }}
            >
              Resume
            </button>
          </animated.div>
        </div>
        <animated.div class="mouse_scroll" style={scrollIndicatorVisible ? slideIn : slideOut}>

          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
          </div>
        </animated.div>
       
      </div>
    </React.Fragment>
  );
}

export default Hero;
