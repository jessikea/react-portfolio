import React from "react";
import { profIcon } from "../assets";

const About = ({ setCurrentPage }) => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h1>Hi There!</h1>
                    <h1>My name is Jess </h1>

                    <h2>
                        <span>I'm a Full Stack Web Developer</span>
                    </h2>

                    <span className="more-about">
                        <p> More about Me</p>
                    </span>

                    <p>

                        I'm a Full Stack Web Developer with a background in science and laboratory work.
                        I have completed a certificate in Full Stack Web Development from Rutgers University.
                        I am passionate about creating web applications that are user-friendly and intuitive.
                        I am currently looking for a full-time position as a web developer.

                    </p>

                    <br />

                    <button className="contact-btn" onClick={() => setCurrentPage("contact")}>Contact Me</button>
                </div>
                <div className="about-img">
                    <img id="profile" src={profIcon} alt="placeholder img" />
                    <br />
                </div>
            </div>
        </section>
    )
}

export default About;


