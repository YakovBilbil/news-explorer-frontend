import { useNavigate } from "react-router-dom";

import githubIcon from "../../images/github-icon.png";
import facebookIcon from "../../images/facebook-icon.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <p className="footer__title">
        &copy; {new Date().getFullYear()} Yakov Bilbil, Supersite, Powered by
        News API
      </p>
      <nav className="footer__list">
        <button className="footer__link" onClick={() => navigate("/")}>
          Home
        </button>

        <a
          className="footer__link footer__link_practicum"
          href="https://www.practicum.com"
          target="_blank"
          rel="noreferrer"
        >
          Practicum by Yandex
        </a>

        <div className="footer__social-icons">
          <a
            className="footer__link"
            href="https://github.com/YakovBilbil/news-explorer-frontend.git"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a
            className="footer__link"
            href="https://www.facebook.com/yakov.bilbil/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
