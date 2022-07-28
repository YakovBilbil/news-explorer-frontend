import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./header.css";
import "./_saved-articles/header_saved-articles.css";
import "./__component/header__component.css";
import "./__component/_news-explorer/header__component_news-explorer.css";
import "./__component/_home/header__component_home.css";
import "./__component/_home_not-logged-in/header__component_home_not-logged-in.css";
import "./__component/_home_saved-articles/header__component_home_saved-articles.css";
import "./__component/_saved-articles_saved-news/header__component_saved-articles_saved-news.css";
import "./__component/_saved-articles/header__component_saved-articles.css";
import "./__component/_user/header__component_user.css";
import "./__component/_user_not-logged-in/header__component_user_not-logged-in.css";
import "./__sign-out-icon/header__sign-out-icon.css";
import "./__user-name-button/header__user-name-button.css";
import "./__user-name-button/_not-logged-in/header__user-name-button_not-logged-in.css";
import "./__user-name-button/_saved-articles/header__user-name-button_saved-articles.css";
import "./__user-name-button-text/header__user-name-button-text.css";
import "./__sign-out-button/header__sign-out-button.css";
import "./__home-button/header__home-button.css";
import "./__home-button/_saved-articles/header__home-button_saved-articles.css";
import "./__saved-articles-button/header__saved-articles-button.css";
import "./__saved-articles-button/_saved-articles/header__saved-articles-button_saved-articles.css";
import "./__menu/header__menu.css";

import signOutIconDefault from "../../images/sign-out-default.svg";
import signOutSavedArticlesIcon from "../../images/sign-out-saved-articles.svg";
import menuIconWhite from "../../images/menu-icon-white.svg";
import menuIconBlack from "../../images/menu-icon-black.svg";

function Header({
  currentUserName,
  headerState,
  isLoggedIn,
  changeHeaderState,
  onPopupWithFormClick,
  onPopupMenuForPhoneClick,
  signOut,
}) {
  const navigate = useNavigate();
  // const [isHomePageLoggedInOpen, setIsHomePageLoggedInOpen] = useState(false);
  return (
    <header
      className={`header ${
        headerState === "SavedArticles" ? "header_saved-articles" : ""
      }`}
    >
      <div className="header__component header__component_news-explorer">
        <p>NewsExplorer</p>
      </div>
      <div
        className={`header__component header__component_home ${
          headerState === "NotLoggedIn"
            ? "header__component_home_not-logged-in"
            : ""
        }   ${
          headerState === "SavedArticles"
            ? "header__component_home_saved-articles"
            : ""
        }  `}
      >
        <button
          className={`header__home-button ${
            headerState === "SavedArticles"
              ? "header__home-button_saved-articles"
              : ""
          }`}
          onClick={() => {
            if (headerState === "SavedArticles") {
              changeHeaderState("LoggedIn");
              navigate("/");
            }
          }}
        >
          <p>Home</p>
        </button>
      </div>
      <div
        className={`header__component header__component_saved-articles ${
          headerState === "SavedArticles"
            ? "header__component_saved-articles_saved-news"
            : ""
        }   `}
        style={{
          display: `${headerState === "NotLoggedIn" ? "none" : ""}`,
        }}
      >
        <button
          className={`header__saved-articles-button ${
            headerState === "SavedArticles"
              ? "header__saved-articles-button_saved-articles"
              : ""
          }`}
          onClick={() => {
            changeHeaderState("SavedArticles");
            navigate("/saved-news");
          }}
        >
          <p>Saved articles</p>
        </button>
      </div>

      <div
        className="header__component header__component_user header__component_user_not-logged-in"
        style={{
          display: `${headerState === "NotLoggedIn" ? "" : "none"}`,
        }}
      >
        <button
          className="header__user-name-button header__user-name-button_not-logged-in"
          onClick={onPopupWithFormClick}
        >
          <p className="header__user-name-button-text">Sign in</p>
        </button>
      </div>

      <div
        className="header__component header__component_user "
        style={{
          display: `${headerState === "NotLoggedIn" ? "none" : ""}`,
        }}
      >
        {/*                               */}
        <div
          className={`header__user-name-button ${
            headerState === "SavedArticles"
              ? " header__user-name-button_saved-articles"
              : ""
          }`}
        >
          <p className="header__user-name-button-text">{`${currentUserName}`}</p>

          <button
            className="header__sign-out-button"
            onClick={() => {
              signOut();
            }}
          >
            <img
              className="header__sign-out-icon"
              src={`${
                headerState === "SavedArticles"
                  ? signOutSavedArticlesIcon
                  : signOutIconDefault
              }`}
              alt="Sign out Icon"
            />
          </button>
        </div>

        {/*                               */}
      </div>
      <button className="header__menu" onClick={onPopupMenuForPhoneClick}>
        <img
          className={`${
            headerState === "SavedArticles"
              ? "header__menu-icon-black"
              : "header__menu-icon-white"
          }`}
          src={`${
            headerState === "SavedArticles" ? menuIconBlack : menuIconWhite
          }`}
          alt="Menu Icon"
        />
      </button>
    </header>
  );
}

export default Header;

/*  <button
          className={`header__user-name-button ${
            headerState === "SavedArticles"
              ? " header__user-name-button_saved-articles"
              : ""
          }`}
        >
          <p className="header__user-name-button-text">{`${currentUserName}`}</p>
          <img
            className="header__sign-out-icon"
            src={`${
              headerState === "SavedArticles"
                ? signOutSavedArticlesIcon
                : signOutIconDefault
            }`}
            alt="Sign out Icon"
          />
        </button>

        */
