import CheckCircleIcon from "../icons/CheckCircleIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <p className="hero__subtitle">
          <CheckCircleIcon />
          <span>100% zadowolonych klientów</span>
        </p>
        <h1 className="hero__title">
          Mechanika Samochodowa
          <br />
          Pomoc Drogowa 24/7
          <br />
          Sosnowiec i okolice
          <br />
        </h1>
        <p className="hero__description">
          Pomagamy kierowcom w Sosnowcu i okolicach - naprawy mechaniczne,
          diagnostyka i całodobowa pomoc drogowa, zawsze gdy tego potrzebujesz.
        </p>
        <div className="hero__ctas">
          <Button variant="primary" color="red" className="hero__primary">
            <a href="#contact">Zadzwoń teraz</a>
          </Button>
          <Button variant="secondary" color="white" className="hero__secondary">
            <a href="#contact">Zobacz jak dojechać</a>
          </Button>
        </div>
        <div className="hero__arrow bounce">
          <a href="#about">
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
