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
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
