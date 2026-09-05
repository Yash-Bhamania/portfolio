import "./skills.scss";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and reusable interfaces.",
    skills: [
      "JavaScript",
      "React.js",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "State & APIs",
    description: "Connecting interfaces with application logic.",
    skills: [
      "REST APIs",
      "Axios",
      "Zustand",
      "Jotai",
      "React Hook Form",
      "Socket.IO",
    ],
  },
  {
    title: "Backend & Database",
    description: "Working across the stack when projects require it.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    description: "Tools I use throughout the development workflow.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Cloudinary",
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__header">
          <p className="section-label">Technical Skills</p>

          <h2>
            Tools I use to
            <span> build things.</span>
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <article className="skills__card" key={group.title}>
              <div className="skills__card-top">
                <span className="skills__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>
              </div>

              <p className="skills__description">{group.description}</p>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;