import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { Github } from "./Github";
import Statistics from "./Statistics";

import styles from "./TechStacks.module.css";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      id="techstacks"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills
      </h1>
      <div className={styles.borderBottom} />
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Front End
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <span>Redux</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-npm-original-wordmark colored" />

          <span>Npm</span>
        </div>

        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class=""></i>
          <span>Chakra Ui</span>
        </div>
      </div>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Back End
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#509941" }} className="devicon-nodejs-plain" />
          <span>Node</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-express-original" />
          <span>Express</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-mongodb-plain colored" />
          <span>MongoDB</span>
        </div>
      </div>
      {/* <Statistics /> */}
      <div style={{ color: `${newTheme.title}` }} className={styles.heading}>
        <Github />
      </div>
    </div>
  );
};

export default TechStacks;
