import { useState } from "react";
import "./style.scss";
import CallToAction from "../../Shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo"></div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {!mobileMenu ? (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => {
                        menuItemClickHandler("skills");
                    }}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => {
                        menuItemClickHandler("portfolio");
                    }}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => {
                        menuItemClickHandler("blog");
                    }}
                >
                    Bloks & Articals
                </span>
                <CallToAction
                    text="Contact Me"
                    action={() => {
                        menuItemClickHandler("contact");
                    }}
                />
            </div>
        </div>
    );
};

export default Navigation;
