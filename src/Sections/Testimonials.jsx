import { useState, useEffect } from "react";
import GoogleWord from "../utils/GoogleWord";
import TestimonialsItem from "./TestimonialsItem";

const testimonialsData = [
  {
    id: 1,
    name: "Edyta Gedlek",
    avatar: "E",
    date: "Lipiec 2025",
    stars: 5,
    comment:
      "Polecam z czystym sumieniem. Przed Panem Michałem inni mechanicy skreślili moje auto ze względu na wiek 99r i nie opłaca się, szkoda tyle czasu na robotę..",
    link: "https://maps.app.goo.gl/khRZEkSkvmYTxgUq5",
  },
  {
    id: 2,
    name: "Wiktoria Gansty",
    avatar: "W",
    date: "Maj 2025",
    stars: 5,
    comment:
      "U Pana Michała zawsze zostawiam swój samochód gdy tylko coś wyda mi się w nim niepokojącego. Czuję się tam zawsze profesjonalnie obsłużona...",
    link: "https://maps.app.goo.gl/Yrkh1cps7wtnVh3j9",
  },
  {
    id: 3,
    name: "Jakub Rubik",
    avatar: "J",
    date: "Kwiecień 2025",
    stars: 5,
    comment:
      "Gorąco polecam, wysoka jakość usługi, bezproblemowy kontakt z mechanikiem konkretna wycena bez ukrytych kosztów. Zakres usługi od A do Z od lawety po wydanie naprawionego samochodu",
    link: "https://maps.app.goo.gl/ZGABqXkqiepoEfi76",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__content wrapper">
        <h2 className="testimonials__title">Opinie naszych klientów</h2>

        <div className="testimonials__header">
          <div className="testimonials__rating">
            <GoogleWord />
            <div className="testimonials__details">
              <span className="testimonials__score">5.0</span>
              <span className="testimonials__stars">★★★★★</span>
              <span className="testimonials__reviews-count">46 opinii</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/SPEC-AUTO+Mechanika+Pojazdowa+%26+Pomoc+Drogowa+24h/@50.2785223,19.1789866,17z/data=!4m8!3m7!1s0x4716dbf1d537c557:0xf349befa56c0ab5b!8m2!3d50.2785223!4d19.1789866!9m1!1b1!16s%2Fg%2F11l294v43b?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn--primary btn--blue">
              Zostaw opinię
            </button>
          </a>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__list">
            {testimonialsData.map((testimonials) => {
              return (
                <TestimonialsItem
                  key={testimonials.id}
                  name={testimonials.name}
                  avatar={testimonials.avatar}
                  date={testimonials.date}
                  stars={testimonials.stars}
                  comment={testimonials.comment}
                  link={testimonials.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
