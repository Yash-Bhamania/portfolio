import "./experience.scss";

const experiences = [
  {
    period: "Current",
    role: "React Developer",
    company: "Software Development Experience",
    description:
      "Building responsive web interfaces and reusable React components with a focus on clean UI and practical frontend development.",
    highlights: [
      "Built responsive web interfaces and reusable components using React.js, JavaScript, HTML, CSS, SCSS, Material UI, Bootstrap, and Tailwind CSS.",
      "Integrated REST APIs using Axios and worked with application state, form handling, authentication, and responsive UI patterns.",
      "Translated Figma designs into clean, reusable frontend components with focus on usability, consistency, and cross-device responsiveness.",
      "Worked with Node.js, Express.js, MongoDB, and MySQL for full-stack application development.",
    ],
  },
  {
    period: "Previous",
    role: "Web Developer / Frontend Development Intern",
    company: "Lofty Fly IT Service & Solutions",
    description:
      "Worked on responsive frontend interfaces and contributed to practical application development alongside senior developers.",
    highlights: [
      "Built responsive and interactive interfaces using HTML, CSS, JavaScript, and React.js.",
      "Worked with component-based architecture, state management, API integration, debugging, and UI/UX improvements.",
      "Collaborated with senior developers and followed practical frontend development and coding practices.",
    ],
  },
  {
    period: "Previous",
    role: "React Developer",
    company: "MinQuake Private Limited",
    description:
      "Developed frontend interfaces for a biometric registration system focused on secure identity verification.",
    highlights: [
      "Built a biometric registration system with live photo and fingerprint capture for secure identity verification.",
      "Collaborated with the backend team using Java and MySQL for data handling and system integration.",
      "Developed responsive React.js interfaces using SCSS for cross-device compatibility.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__header">
          <p className="section-label">Experience</p>

          <h2>
            Where I've worked
            <span> and what I've built.</span>
          </h2>
        </div>

        <div className="experience__list">
          {experiences.map((experience, index) => (
            <article className="experience__item" key={experience.company}>
              <div className="experience__meta">
                <span className="experience__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="experience__period">
                  {experience.period}
                </span>
              </div>

              <div className="experience__content">
                <div className="experience__title">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                </div>

                <p className="experience__description">
                  {experience.description}
                </p>

                <ul className="experience__highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;