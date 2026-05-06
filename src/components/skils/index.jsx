import React from "react";
import "./style.scss";
import skill from "../../images/tech-icons.png";
import Section from "../Shared/section";
import CallToAction from "../Shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skill-content-wrapper">
                <div className="left-col">
                    <img
                        src={skill}
                        alt="skill"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I bring a strong command of React, JavaScript, HTML, and
                        CSS to develop fast, responsive, and visually appealing
                        web applications. With tools like Material UI, Tailwind
                        CSS, and Bootstrap, I create polished user interfaces
                        that feel intuitive and modern. I also work with Node.js
                        and MongoDB to build reliable backend systems, allowing
                        me to deliver complete, scalable solutions from design
                        to deployment.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => {
                            console.log("Button is triggered");
                            window.open("/Yash_Resume.pdf", "_blank");
                            const link = document.createElement("a");
                            link.href = "/Yash_Resume.pdf";
                            link.download = "Yash_Resume.pdf";
                            link.click();
                        }}
                    />
                </div>
            </div>{" "}
        </Section>
    );
};

export default Skills;
