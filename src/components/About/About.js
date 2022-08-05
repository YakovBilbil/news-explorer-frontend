import "./about.css";
import "./__avatar-image/about__avatar-image.css";
import "./__description/about__description.css";
import "./__title/about__title.css";
import "./__text/about__text.css";

import avatar from "../../images/avatar.png";

function About() {
  return (
    <div className="about">
      <img className="about__avatar-image" src={avatar} alt="Author avatar" />
      <div className="about__description">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          I am Yakov Bilbil and I am a full stack web developer. For developing
          I use: HTML, CSS, JavaScript, React, Node, Express, MongoDB, Git and
          Google Cloud Platform.
        </p>
        <p className="about__text">
          I graduated by "Practicum100", a full stack web developing bootcamp
          course by Masterschool and Yandex. In the course we learned to build
          websites from skretch, include frontend and backend.
        </p>
      </div>
    </div>
  );
}

export default About;
