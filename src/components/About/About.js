import avatar from "../../images/avatar.png";

function About() {
  return (
    <div className="about">
      <img className="about__avatar-image" src={avatar} alt="Author avatar" />
      <div className="about__description">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">I am that and I am that...</p>
      </div>
    </div>
  );
}

export default About;
