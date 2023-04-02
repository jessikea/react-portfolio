import React from "react";
import "boxicons";

const handleLink = (link) => {
    window.open(link);
};

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-links">
                <h3> Email me with the button below</h3>
                <p className="email">tran.jessica2017@gmail.com</p>
                <br />
                <a href="mailto:tran.jessica2017@gmail.com">
                    <button className="email-button">Email Me!</button>
                </a>

                <div className="socials">
                    <h3>Or check out my socials!</h3>
                <ul className="social-icons">
                    <li>
                        <button
                            id="linkedin-icon"
                            onClick={() => handleLink("https://www.linkedin.com/in/jessica-tran-36534b214/")}
                            aria-label="Linkedin profile"
                        > 
                            <i className="bx bxl-linkedin"></i>
                        </button>
                    </li>
                    <li>
                        <button
                            id="github-icon"
                            onClick={() => handleLink("https://github.com/jessikea")}
                            aria-label="Github profile"
                        >
                            <i className="bx bxl-github"></i>
                        </button>
                    </li>
                    <li>
                        <button 
                            id="instagram-icon"
                            onClick={() => handleLink("https://www.instagram.com/jtran_iv")}
                            aria-label="Instagram profile"
                        >
                            <i className="bx bxl-instagram"></i>
                        </button>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Contact;
