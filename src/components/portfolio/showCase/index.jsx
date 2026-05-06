import React from "react";
import "./style.scss";
import Arrow from "../../Shared/arrow";

const ShowCase = ({ data, trasition }) => {
    return (
        <div className="project-showCase">
            {data.map((project) => (
                <div
                    key={project.name}
                    className={`showCase-item ${
                        trasition === "zoomOut"
                            ? "zoomOut"
                            : trasition === "zoomIn"
                            ? "zoomIn"
                            : ""
                    } `}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span>
                                <div className="text">Project Details</div>
                            </span>
                            <Arrow />
                        </div>
                    </div>
                    <img
                        src={project.media.thumbnail}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};

export default ShowCase;
