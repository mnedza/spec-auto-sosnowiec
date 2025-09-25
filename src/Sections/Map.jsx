import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.717900992873!2d19.176411676049703!3d50.27852569972856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dbf1d537c557%3A0xf349befa56c0ab5b!2sSPEC-AUTO%20Mechanika%20Pojazdowa%20%26%20Pomoc%20Drogowa%2024h!5e0!3m2!1sen!2spl!4v1758649019666!5m2!1sen!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
