import ClockIcon from "../icons/ClockIcon";
import HumanIcon from "../icons/HumanIcon";
import ToolIcon from "../icons/ToolIcon";
import WalletIcon from "../icons/WalletIcon";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__content wrapper">
        <h2 className="benefits__title">Zapewniamy</h2>
        <div className="benefits__items">
          <div className="benefits__item">
            <ClockIcon />
            <p className="benefits__description">Szybka reakcja 24/7</p>
          </div>
          <div className="benefits__item">
            <WalletIcon />
            <p className="benefits__description">Uczciwe ceny</p>
          </div>
          <div className="benefits__item">
            <ToolIcon />
            <p className="benefits__description">Rzetelne naprawy</p>
          </div>
          <div className="benefits__item">
            <HumanIcon />
            <p className="benefits__description">Indywidualne podejście</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
