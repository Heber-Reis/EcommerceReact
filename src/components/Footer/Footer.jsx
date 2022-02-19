import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./styles.module.css";

function Footer () {
  return(
    <div className={styles.Footer}>
      <div className={styles.Challenge}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
      </div>
      <div className={styles.Developer}>
        <div className={styles.Coded}>
          Coded by Heber Magno
        </div>
        <div className={styles.Social}>
          <a href="https://www.github.com/Heber-Reis" target="_blank">
            <FaGithubSquare fill="black" className={styles.GitHub} size="30px"/>
          </a>
          <a href="https://www.linkedin.com/in/heber-magno-06307a165/" target="_blank">
            <BsLinkedin fill="blue" className={styles.Linkedin} size="30px"/>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer;