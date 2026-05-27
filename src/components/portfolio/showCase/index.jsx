    import React, { useState } from "react";
    import "./style.scss";
    import Arrow from "../../Shared/arrow";

    const ShowCase = ({ data, trasition }) => {

const [showModal, setShowModal] = useState(false);


        const handleProjectClick = (link) => {
            if(link && link.trim() !== "") {
                window.open(link, "_blank");
            } else {
                setShowModal(true);
            }
        };



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
                        onClick={() => handleProjectClick(project.link)}
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
                        {console.log(project.link)}

                    </div>
                ))};


                   {showModal && (
                <div className="custom-modal">
                    <div className="modal-content">

                        <h2>Project Not Available</h2>

                        <p>
                            This project link is currently unavailable.
                        </p>

                        <button
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}


                
            </div>
            
        );
    };
    

    export default ShowCase;
