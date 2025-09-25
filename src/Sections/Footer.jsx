import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content wrapper">
        <div className="footer__line"></div>
        <div className="footer__socials">
          <a
            href="https://www.google.com/maps/place/SPEC-AUTO+Mechanika+Pojazdowa+%26+Pomoc+Drogowa+24h/@50.2785257,19.1764117,17z/data=!3m1!4b1!4m6!3m5!1s0x4716dbf1d537c557:0xf349befa56c0ab5b!8m2!3d50.2785223!4d19.1789866!16s%2Fg%2F11l294v43b?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon className="footer__socials--icon" />
          </a>
          <a
            href="https://www.facebook.com/p/SPEC-AUTO-Mechanika-Pojazdowa-Pomoc-Drogowa-24h-61550670223679/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="footer__socials--icon" />
          </a>
        </div>
        <p className="footer__text">
          © 2025 Spec-Auto-Sosnowiec. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
