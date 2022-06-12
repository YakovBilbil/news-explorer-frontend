import avatar from "../../images/avatar.png";

function About() {
  return (
    <div className="about">
      <img className="about__avatar-image" src={avatar} alt="Author avatar" />
      <div className="about__description">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
