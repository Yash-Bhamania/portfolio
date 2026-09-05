import "./hero.scss";

import heroImage from "../../../assets/Hero_section.png";
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
        {/* Left Content */}
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
              <span>↗</span>
              View My Work
            </a>

            <a
              href={resumeFile}
              className="hero__button hero__button--secondary"
              onClick={handleResumeDownload}
            >
              <span>↓</span>
              Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__socials-label">Find me on</span>

            <div className="hero__socials-links">
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
        </div>

        {/* Right Visual */}
        <div className="hero__visual" aria-hidden="true">
          {/* Background glow */}
          <div className="hero__glow" />

          {/* Orbit rings */}
          <div className="hero__orbit hero__orbit--outer" />
          <div className="hero__orbit hero__orbit--inner" />

          {/* Portrait */}
          <div className="hero__portrait">
            <div className="hero__portrait-ring" />

            <img src={heroImage} alt="" />
          </div>

          {/* React badge */}
          <div className="hero__tech hero__tech--react">
            <span className="hero__tech-icon">⚛</span>

            <div>
              <strong>React</strong>
              <small>Frontend</small>
            </div>

            <span className="hero__tech-dot" />
          </div>

          {/* JavaScript badge */}
          <div className="hero__tech hero__tech--javascript">
            <span className="hero__tech-icon hero__tech-icon--js">
              JS
            </span>

            <div>
              <strong>JavaScript</strong>
              <small>Language</small>
            </div>

            <span className="hero__tech-dot" />
          </div>

          {/* Code badge */}
          <div className="hero__code-badge">
            &lt;/&gt;
          </div>

          {/* Developer card */}
          <div className="hero__developer-card">
            <div className="hero__developer-top">
              <span>&lt;/&gt;</span>
              <span>developer</span>
            </div>

            <div className="hero__developer-item">
              <span className="hero__developer-icon">⚛</span>
              <span>React.js</span>
            </div>

            <div className="hero__developer-item">
              <span className="hero__developer-icon hero__developer-icon--js">
                JS
              </span>
              <span>JavaScript</span>
            </div>

            <div className="hero__developer-item">
              <span className="hero__developer-icon">&lt;/&gt;</span>
              <span>UI Development</span>
            </div>

            <div className="hero__developer-item">
              <span className="hero__developer-icon">◈</span>
              <span>Responsive UI</span>
            </div>
          </div>

          {/* Build / Learn / Improve */}
          <div className="hero__message">
            <span>Build</span>
            <span>Learn</span>
            <span>Improve</span>
            <span>Repeat</span>
          </div>

          {/* Decorative dots */}
          <div className="hero__dots hero__dots--one" />
          <div className="hero__dots hero__dots--two" />
        </div>
      </div>
    </section>
  );
}

export default Hero;