import React from "react";
import "./style.scss";
import Section from "../Shared/section";
import ContactInfo from "./Contact-info";
import Form from "./form";
const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question? Feel free to Contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
};

export default Contact;
