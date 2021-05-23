import "../styles/navbar.css";

function Nav() {
  return (
    <nav className="navbar px-3 shadow-lg">
      <h2 id="user-name">Welcome to MY PORTFOLIO</h2>
      <div id="nav-btn-container">
        <a href="#about" id="about-nav">
          ABOUT
        </a>
        <a href="#skills" id="skills-nav">
          SKILLS
        </a>
        <a href="#projects" id="projects-nav">
          PROJECTS
        </a>
      </div>
    </nav>
  );
}

export default Nav;
