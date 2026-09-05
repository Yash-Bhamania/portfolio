import "./hero.scss";
import resumeFile from "../../../assets/Yash_Softwere_Developer.pdf";

function Hero() {
  const handleResumeDownload = (event) => {
    event.preventDefault();

    // Open resume in a new tab
    window.open(resumeFile, "_blank");

    // Download resume
    const link = document.createElement("a");

    link.href = resumeFile;
    link.download = "Yash_Softwere_Developer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Frontend / React Developer</p>

          <h1>
            I build modern
            <span> web experiences.</span>
          </h1>

          <p className="hero__description">
            I build responsive and user-focused web applications using React,
            JavaScript, and modern frontend technologies, with a focus on clean
            UI, reusable components, and great user experiences.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              View My Work
            </a>

            <a
              href={resumeFile}
              className="hero__button hero__button--secondary"
              onClick={handleResumeDownload}
            >
              Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/Yash-Bhamania"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yash-bhamania/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:yashbhamania45@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />

          <div className="hero__code-card">
            <span>&lt;developer /&gt;</span>
            <strong>React.js</strong>
            <strong>JavaScript</strong>
            <strong>UI Development</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;