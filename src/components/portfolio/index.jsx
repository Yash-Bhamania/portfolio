import React, { useState } from "react";
import Section from "../Shared/section";
import "./style.scss";
import Filters from "./filters";
import ShowCase from "./showCase";

const projectsData = [
    {
        id: 1,
        name: "PG Life",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
        link: "https://yash-bhamania.github.io/PG_Life/",
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
        link: "",
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
        link: "",
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
        link: "",
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
        link: "",
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
        link: "",
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
        link: "",
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
        link: "",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [trasition, setTrasition] = useState(false);

    const filterProjects = (tag) => {
        setTrasition("zoomOut");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTrasition("zoomIn");
        }, 200);
        setTimeout(() => {
            setTrasition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            background="light"
            title="Check My Portfolio"
        >
            <div className="portfolio-content-section">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <ShowCase
                    data={projects}
                    trasition={trasition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
