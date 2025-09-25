import MapsIcon from "../icons/MapsIcon";
import PhoneIcon from "../icons/PhoneIcon";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";

const Preheader = () => {
  return (
    <section className="preheader">
      <div className="preheader__list wrapper">
        <div className="preheader__info-mini-list">
          <div className="preheader__item">
            <MapsIcon className="preheader__icon" />
            <p className="preheader__text">
              <span className="preheader__text--bold">
                Sosnowiec ul. Dobrzańskiego 35
              </span>
              <span className="preheader__text--gray">(dojazd od osiedla)</span>
            </p>
          </div>
          <div className="preheader__item preheader__item--phone">
            <PhoneIcon className="preheader__icon" />
            <p className="preheader__text">
              <span className="preheader__text--bold">512 722 296</span> Michał
              Piątkowski
            </p>
          </div>
        </div>
        <div className="preheader__item preheader__socials">
          <a
            href="https://www.google.com/maps/place/SPEC-AUTO+Mechanika+Pojazdowa+%26+Pomoc+Drogowa+24h/@50.2785257,19.1764117,17z/data=!3m1!4b1!4m6!3m5!1s0x4716dbf1d537c557:0xf349befa56c0ab5b!8m2!3d50.2785223!4d19.1789866!16s%2Fg%2F11l294v43b?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon className="preheader__socials--icon" />
          </a>
          <a
            href="https://www.facebook.com/p/SPEC-AUTO-Mechanika-Pojazdowa-Pomoc-Drogowa-24h-61550670223679/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="preheader__socials--icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Preheader;
