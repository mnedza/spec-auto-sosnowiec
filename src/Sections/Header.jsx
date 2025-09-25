import { useState, useEffect } from "react";
import logo from "../images/logo-nobcg.png";
import HamburgerIcon from "../icons/HamburgerIcon";
import CloseIcon from "../icons/CloseIcon";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${showHeader ? "header--visible" : ""}`}>
      <div className="header__content wrapper">
        <a href="#home" className="header__logo-link">
          <div className="header__logo-wrapper">
            <img
              src={logo}
              alt="Spec Auto Sosnowiec Logo"
              className="header__logo"
            />
          </div>
        </a>
        <ul className="header__nav-desktop">
          <li className="header__nav-item">
            <a href="#home" className="header__desktop-link">
              home
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#about" className="header__desktop-link">
              o nas
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#services" className="header__desktop-link">
              usługi
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#testimonials" className="header__desktop-link">
              opinie
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#faq" className="header__desktop-link">
              FAQ
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__desktop-link">
              kontakt
            </a>
          </li>
        </ul>

        <button className="header__button" onClick={toggleMenu}>
          <HamburgerIcon />
        </button>

        <div className={`header__mobile-menu ${menuOpen ? "open" : ""}`}>
          <button
            className="header__button header__button--mobile"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </button>
          <ul className="header__mobile-nav">
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#home" className="header__mobile-link">
                home
              </a>
            </li>
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#about" className="header__mobile-link">
                O nas
              </a>
            </li>
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#services" className="header__mobile-link">
                Usługi
              </a>
            </li>
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#faq" className="header__mobile-link">
                FAQ
              </a>
            </li>
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#testimonials" className="header__mobile-link">
                Opinie
              </a>
            </li>
            <li className="header__mobile-item" onClick={toggleMenu}>
              <a href="#contact" className="header__mobile-link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
