import { useState, useRef } from "react";

const faqData = [
  {
    question: "Czy pomoc drogowa działa całą dobę?",
    answer: "Tak, jesteśmy dostępni 24/7.",
  },
  {
    question: "Jak szybko możecie dojechać po zgłoszeniu?",
    answer: "Zazwyczaj do 30 minut w Sosnowcu i okolicach.",
  },
  {
    question: "Jakie samochody obsługujecie?",
    answer: "Samochody osobowe, dostawcze oraz motocykle.",
  },
  {
    question: "Czy mogę przyjechać bez umawiania wizyty?",
    answer: "Tak, ale zalecamy kontakt telefoniczny.",
  },
  {
    question: "Ile kosztuje holowanie lub naprawa?",
    answer: "Cena zależy od rodzaju usterki i dystansu.",
  },
  {
    question: "Jak dojechać do warsztatu?",
    answer: "Znajdziesz nas w Sosnowcu przy ul. Dobrzańskiego 35.",
  },
];

const FAQItem = ({ question, answer, isActive, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className={`faq__item ${isActive ? "faq__item--active" : ""}`}>
      <button className="faq__question" onClick={onClick}>
        <span>{question}</span>
        <span className="faq__icon">{isActive ? "-" : "+"}</span>
      </button>
      <div
        className="faq__answer"
        ref={contentRef}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__section wrapper">
        <h2 className="faq__heading">Najczęściej zadawane pytania</h2>
        <div className="faq__list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
