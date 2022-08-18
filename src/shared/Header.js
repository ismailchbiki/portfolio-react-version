import React from "react";

const Header = () => {
  return (
    <div className="nav-links">
      <a href="https://ismailchbiki.com" className="logo">
        ismailchbiki.com
      </a>
      <div className="nav-links-right">
        <a
          href="https://www.linkedin.com/in/ismailchbiki"
          target="_blank"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://github.com/ismailchbiki"
          target="_blank"
          className="fa fa-github"
        ></a>
        <a
          href="https://www.instagram.com/ismail_chbiki"
          target="_blank"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://twitter.com/Ismailchbiki"
          target="_blank"
          className="fa fa-twitter"
        ></a>
        <a
          href="https://www.youtube.com/c/IsmailChbiki"
          target="_blank"
          className="fa fa-youtube"
        ></a>
      </div>
    </div>
  );
};

export default Header;
