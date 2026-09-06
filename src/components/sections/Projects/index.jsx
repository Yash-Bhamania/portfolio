import "./projects.scss";

const projects = [
  {
    number: "01",
    title: "Chat-App",
    type: "Real-time communication platform",
    description:
      "A real-time chat application built with the MERN stack, featuring real-time communication and media handling.",
    technologies: ["MERN", "Socket.IO", "Cloudinary"],
    liveUrl: "https://chat-app-frontend-ls3x.onrender.com/",
    githubUrl: "https://github.com/Yash-Bhamania/Chat-App",
  },
  {
    number: "02",
    title: "Vehicle Transportation Platform",
    type: "Transportation management platform",
    description:
      "A web platform for vehicle transportation workflows, built with React.js and a Node.js backend with MongoDB.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://yash-bhamania.github.io/ShipNshift",
    githubUrl: "https://github.com/Yash-Bhamania/ShipNshift",
  },
  {
    number: "03",
    title: "YouTube Clone",
    type: "Video browsing application",
    description:
      "A YouTube-inspired web application built with React.js and RapidAPI for fetching video-related data.",
    technologies: ["React.js", "RapidAPI"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    number: "04",
    title: "PG-Life",
    type: "Accommodation platform",
    description:
      "A web application for browsing PG accommodation listings with a PHP and MySQL backend.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://yash-bhamania.github.io/PG_Life/index.html",
    githubUrl: "https://github.com/Yash-Bhamania/PG_Life",
  },
];

function ProjectLink({ href, children, disabled = false }) {
  if (disabled) {
    return (
      <span className="projects__link projects__link--disabled">
        {children}
        <span>↗</span>
      </span>
    );
  }

  return (
    <a
      className="projects__link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span>↗</span>
    </a>
  );
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-label">Selected Work</p>

          <h2>
            Projects built with
            <span> purpose.</span>
          </h2>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="projects__item" key={project.number}>
              <div className="projects__number">{project.number}</div>

              <div className="projects__content">
                <div className="projects__title-row">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>

                  <span className="projects__arrow">↗</span>
                </div>

                <p className="projects__description">
                  {project.description}
                </p>

                <div className="projects__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="projects__links">
                  <ProjectLink
                    href={project.liveUrl}
                    disabled={!project.liveUrl}
                  >
                    Live Demo
                  </ProjectLink>

                  <ProjectLink
                    href={project.githubUrl}
                    disabled={!project.githubUrl}
                  >
                    GitHub
                  </ProjectLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;