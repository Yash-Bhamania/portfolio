import React from "react";
import "./stlye.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
                Website building and hosting
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text"> +91 8295669607</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text"> yashbhamania45@gmil.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
