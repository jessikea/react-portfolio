import React from "react";

const handleLink = (link) => {
    window.open(link);
}

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1>Contact</h1>
            <div className="contact-links">
                <h3> Email me with the button below or check out my socials!</h3>
                <p className="email"> tran.jessica2017@gmail.com </p>
                <br />
                <a href="mailto: tran.jessica2017@gmail.com" >

                <button className="email-button"> Email Me!</button>
                </a>

                <ul className="social-icons">
                    <li>
                        <a
                            id="linkedin-icon"
                            onClick={() => handleLink("https://www.linkedin.com/in/jessica-tran-36534b214/")}
                            > 
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    </li>
                    <li>
                        <a
                            id="github-icon"
                            onClick={() => handleLink("https://github.com/jessikea")}
                            >
                    <i className="bx bxl-github"></i>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
