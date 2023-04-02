import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons-footer">
        <div className="social-links">
          <a id= "linkedin-icon " href="https://www.linkedin.com/in/jessica-tran-36534b214/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a id = "github-icon" href="https://github.com/jessikea" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <p className="footer-text">© 2022 Jessica Tran</p>
      </div>
    </footer>
  );
};

export default Footer;
