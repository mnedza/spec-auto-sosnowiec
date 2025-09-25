import Button from "../utils/Button";
import aboutUsImg from "../images/about-us-pic.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content wrapper">
        <div className="about__description">
          <h2 className="about__title about__title--left">Co nas wyróżnia?</h2>
          <p className="about__text">
            Stawiamy na uczciwość, szybki kontakt i indywidualne podejście do
            klienta. Jeśli szukasz mechanika, na którego możesz liczyć w każdej
            sytuacji - <span className="about__highlight">dobrze trafiłeś</span>
            . Naszym celem jest, aby każda naprawa dawała Ci pełne poczucie
            bezpieczeństwa i spokoju na drodze.
          </p>
          <div className="about__button">
            <a href="#services">
              <Button variant="primary" color="red">
                Dowiedz się więcej
              </Button>
            </a>
          </div>
        </div>
        <div className="about__image">
          <img
            src={aboutUsImg}
            alt="Zdjęcie mechanika przy czerwonym samochodzie"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
