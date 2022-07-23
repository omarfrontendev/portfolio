const AboutCard = props => {

  return (
    <article data-aos="zoom-in" className="about_me-card">
      {props.icon}
      <h5>{props.title}</h5>
      <small>{props.p}</small>
    </article>
  );
};

export default AboutCard;