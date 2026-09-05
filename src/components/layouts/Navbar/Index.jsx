import "./navbar.scss";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#" className="navbar__logo">
          YB<span>.</span>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;