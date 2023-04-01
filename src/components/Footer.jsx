import React from "react";

function Footer() {
    return (
      <footer>
        <ul className="social-icons-footer">
          <li>
            <a
              id="linkedin-icon"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              id="github-icon"
              href="https://github.com/jessikea"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
        <p>created by Jess Tran</p>
      </footer>
    );
}

export default Footer;