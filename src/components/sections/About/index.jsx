import "./about.scss";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <p className="section-label">About Me</p>

          <h2>
            Turning ideas into
            <span> functional interfaces.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <p>
              I'm Yash Bhamania, a Frontend / React Developer focused on
              building responsive and user-friendly web applications.
            </p>

            <p>
              I enjoy turning designs and ideas into clean, reusable
              interfaces using React.js, JavaScript, and modern frontend
              technologies.
            </p>

            <p>
              Alongside frontend development, I have experience working with
              REST APIs, application state, authentication, and full-stack
              technologies such as Node.js, Express.js, MongoDB, and MySQL.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__highlight">
              <span>01</span>

              <div>
                <h3>Frontend Development</h3>
                <p>
                  Responsive interfaces, reusable React components, and
                  practical UI development.
                </p>
              </div>
            </div>

            <div className="about__highlight">
              <span>02</span>

              <div>
                <h3>API & State Management</h3>
                <p>
                  REST API integration, application state, forms, and
                  authentication flows.
                </p>
              </div>
            </div>

            <div className="about__highlight">
              <span>03</span>

              <div>
                <h3>Design to Code</h3>
                <p>
                  Translating Figma designs into consistent and responsive
                  frontend experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;