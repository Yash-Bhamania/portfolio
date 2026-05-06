import React from "react";
import "./style.scss";
import logo from "../../images/logo.svg";

import Section from "../Shared/section";

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";
import SocialIcons from "./social-icons";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
    return (
        <Section
            className="footer"
            background="dark"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={logo}
                        alt="Yash Bhamania"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => {
                            scrollToSection("skills");
                        }}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => {
                            scrollToSection("portfolio");
                        }}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => {
                            scrollToSection("blog");
                        }}
                    >
                        Blogs & Artical
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcons
                        color="#ff0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com/@yash_bhamania"
                    />
                    <SocialIcons
                        color="#0d2626"
                        icon={<FaGithub />}
                        link="https://github.com/Yash-Bhamania"
                    />
                    <SocialIcons
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://stackoverflow.com/users/27338406/yash-bhamania"
                    />
                    <SocialIcons
                        color="#0a66c2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/yash-bhamania/"
                    />
                    <SocialIcons
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/yash_bhamania/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        copyright Yash Bhamania | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
