import React from "react";

const SocialIcons = ({ icon, color, link }) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: color }}
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
            {icon}
        </div>
    );
};

export default SocialIcons;
