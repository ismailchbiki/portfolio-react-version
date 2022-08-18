import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p id="current_date" className="footer-copyright">
        © Ismail Chbiki {year}
      </p>
    </footer>
  );
};

export default Footer;
