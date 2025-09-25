import ServicesItem1 from "../images/services_item1.png";
import ServicesItem2 from "../images/services_item2.png";
import ServicesItem3 from "../images/services_item3.png";
import Button from "../utils/Button";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__content wrapper">
        <div className="services__intro">
          <h2 className="services__title">Nasze usługi</h2>
          <p className="services__description">
            Zajmujemy się kompleksową obsługą kierowców - zarówno w warsztacie,
            jak i na drodze. Sprawdź w czym możemy Ci pomóc.
          </p>
        </div>

        <div className="services__list">
          <div className="services__list">
            <div className="services__item">
              <img
                src={ServicesItem1}
                alt="Mechanika pojazdowa"
                className="services__item--img"
              />
              <h3 className="services__item-title">Mechanika pojazdowa</h3>
              <p className="services__item-description">
                Pełna obsługa Twojego auta. Wymiana hamulców, oleju, filtrów i
                naprawy bieżące.
              </p>
              <a href="#contact">
                <Button variant="secondary" color="black">
                  Sprawdź
                </Button>
              </a>
            </div>

            <div className="services__item">
              <img
                src={ServicesItem2}
                alt="Diagnostyka i serwis"
                className="services__item--img"
              />
              <h3 className="services__item-title">Diagnostyka i serwis</h3>
              <p className="services__item-description">
                Profesjonalna diagnostyka komputerowa i przeglądy, które
                pozwalają szybko wykryć i usunąć usterki.
              </p>
              <a href="#contact">
                <Button variant="secondary" color="black">
                  Sprawdź
                </Button>
              </a>
            </div>

            <div className="services__item">
              <div className="services__item--truck">
                <img
                  src={ServicesItem3}
                  alt="Pomoc drogowa 24/7"
                  className="services__item--img services__item--truck-img"
                />
              </div>
              <h3 className="services__item-title">Pomoc drogowa 24/7</h3>
              <p className="services__item-description">
                Holowanie samochodów osobowych, dowóz paliwa, uruchamianie auta
                zimą zawsze, gdy potrzebujesz.
              </p>
              <a href="#contact">
                <Button variant="secondary" color="black">
                  Sprawdź
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
