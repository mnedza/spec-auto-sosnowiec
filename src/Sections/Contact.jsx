import MapsIcon from "../icons/MapsIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ClockIcon from "../icons/ClockIcon";
import Map from "./Map";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__section wrapper">
        <h2 className="contact__title">Kontakt</h2>
        <div className="contact__container">
          <div className="contact__info">
            <div className="contact__phone">
              <div className="contact__phone-icon">
                <PhoneIcon className="contact__icon" />
              </div>
              <p className="contact__details">
                Zadzwoń Michał Piątkowski <br />
                Pomoc Drogowa 24/7,
                <br />
                Mechanika pojazdowa
                <br />
                <div className="contact__bold">512-722-296</div>
              </p>
            </div>
            <div className="contact__address">
              <div className="contact__address-icon">
                <MapsIcon className="contact__icon" />
              </div>
              <p className="contact__details">
                <span className="contact__bold">
                  Sosnowiec ul. Dobrzańskiego 35
                </span>
                <br />
                <span className="contact__grayed">(dojazd od osiedla)</span>
              </p>
            </div>
            <div className="contact__open-hours">
              <div className="contact__open-hours-icon">
                <ClockIcon className="contact__icon" />
              </div>
              <p className="contact__details">
                Godziny pracy warsztatu <br />
                Poniedziałek:
                <span className="contact__bold">10:00 - 18:00</span> <br />
                Wtorek: <span className="contact__bold">10:00 - 18:00</span>
                <br />
                Środa: <span className="contact__bold">10:00 - 18:00</span>
                <br />
                Czwartek: <span className="contact__bold">10:00 - 18:00</span>
                <br />
                Piątek: <span className="contact__bold">10:00 - 18:00</span>
                <br />
                Sobota: <span className="contact__bold">10:00 - 16:00</span>
                <br />
                Niedziela -nieczynne <br />
                <span className="contact__bold">Pomoc Drogowa - 24/7</span>
              </p>
            </div>
          </div>
          <div className="contact__map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
