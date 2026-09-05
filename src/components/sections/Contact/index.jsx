import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.scss";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header">
          <p className="section-label">Get In Touch</p>

          <h2>
            Let's build something
            <span> useful together.</span>
          </h2>

          <p className="contact__intro">
            Have a project, opportunity, or just want to say hello? Fill out
            the form and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-block">
              <span>Email</span>

              <a href="mailto:yashbhamania45@gmail.com">
                yashbhamania45@gmail.com
              </a>
            </div>
            <div className="contact__info-block">
  <span>Phone</span>

  <a href="tel:+918295669607">
    +91 82956 69607
  </a>
</div>

            <div className="contact__info-block">
              <span>Available for</span>

              <p>
                Frontend Development · React · Freelance · Collaboration
              </p>
            </div>

          </div>

          <form
            ref={formRef}
            className="contact__form"
            onSubmit={sendEmail}
          >
            <div className="contact__field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="title">Subject</label>

              <input
                id="title"
                type="text"
                name="title"
                placeholder="How can I help?"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me a little about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}

              <span>↗</span>
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;