import GoogleIconColor from "../icons/GoogleIconColor";

const TestimonialsItem = ({ name, avatar, date, stars, comment, link }) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-header">
        <div className="testimonials__person">
          <div className="testimonials__avatar">{avatar}</div>
          <div className="testimonials__info">
            <p className="testimonials__name">{name}</p>
            <div className="testimonials__person-stars">
              {"★".repeat(stars)}
              <span className="testimonials__date">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="testimonials__comment">{comment}</p>
      <div className="testimonials__link-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <GoogleIconColor />
        </a>
        <span>Zobacz w</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="testimonials__link"
        >
          Google
        </a>
      </div>
    </div>
  );
};

export default TestimonialsItem;
