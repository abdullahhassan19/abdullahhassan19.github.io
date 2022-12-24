import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          One of my favourite things about developing web applications is the
          variety in projects. So if you want to collaborate or have some work
          for me , Get in touch and tell me what you have in mind. — I can’t
          wait to hear all about it! 😇
          <br />
          Gmail:abdullahmohdi1999@gmail.com
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:8801480803"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto: abdullahmohdi1999@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com/Abdulla2246"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/abdullahhassan19"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/abdullah-bin-hassan-936a17233/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        Designed and build by Abdullah, 2022 All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
